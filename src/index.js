import Socket from "./components/Websocket";
import uuid from "./components/uuid";

class WebPrintPdf {
  constructor() {
    this.ws = null;
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
      if (!this.ws) {
        this.ws = new Socket();
        this.ws.init({
          url: "ws://127.0.0.1:16794/websocket/standard",
          onOpen: this._mapResolveConnectPromise,
          onClose: (e) => {
            this.ws = null;
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
        if (this.ws.isConnected) {
          this._mapResolveConnectPromise();
        } else if (this.ws.isDestroyed) {
          this._mapRejectConnectPromise();
        }
      }
    });
  }

  async _promiseWrapper(callback) {
    await this._init();
    return new Promise((resolve, reject) => {
      const id = uuid();
      this._messagePromisePool[id] = { resolve, reject };
      callback && callback({ id });
    });
  }

  async printHtmlToPdf(content, pdfOptions = {}, printOptions) {
    return await this._promiseWrapper(({ id }) => {
      this.ws.send({
        id,
        type: this.printHtmlToPdf.name,
        content,
        pdfOptions,
        printOptions,
      });
    });
  }
}

export default new WebPrintPdf();
