import Socket from "./components/Websocket";
import uuid from "./components/uuid";

class WebPrintPdf {
  constructor() {
    this._ws = null;
    this._messagePromisePool = {};
    this._connectPromisePool = [];
  }

  _mapResolveConnectPromise = () => {
    this._connectPromisePool.forEach((item) => item.resolve());
    this._connectPromisePool = [];
  };

  _mapRejectConnectPromise = (e) => {
    this._connectPromisePool.forEach((item) => item.reject(e));
    this._connectPromisePool = [];
  };

  async _init() {
    // to keep a single instance in a project
    return new Promise((resolve, reject) => {
      this._connectPromisePool.push({ resolve, reject });
      if (!this._ws) {
        this._ws = new Socket();
        this._ws.init({
          url: "ws://127.0.0.1:16794/websocket/standard",
          onOpen: this._mapResolveConnectPromise,
          onClose: (e) => {
            this._ws = null;
            this._mapRejectConnectPromise(e);
          },
          onMessage: (payload) => {
            if (payload.data) {
              const message = JSON.parse(payload.data);
              const findPromiseOne = this._messagePromisePool[message.id];
              if (findPromiseOne) {
                delete this._messagePromisePool[message.id];
                if (message.success) {
                  findPromiseOne.resolve(message);
                } else {
                  findPromiseOne.reject(message);
                }
              }
            }
          },
        });
      } else {
        if (this._ws.isConnected) {
          this._mapResolveConnectPromise();
        } else if (this._ws.isDestroyed) {
          this._mapRejectConnectPromise();
        }
      }
    });
  }

  async _promiseWrapper(callback) {
    await this._init();
    return new Promise((resolve, reject) => {
      const id = uuid();
      const timestamp = Date.now();
      this._messagePromisePool[id] = { resolve, reject };
      callback && callback({ id, timestamp });
    });
  }

  async printHtml(
    content,
    pdfOptions = {},
    printOptions = {},
    extraOptions = {},
  ) {
    return await this._promiseWrapper((commonParams = {}) => {
      this._ws.send({
        ...commonParams,
        type: this.printHtml.name,
        content,
        pdfOptions,
        printOptions,
        extraOptions,
      });
    });
  }
}

export default new WebPrintPdf();
