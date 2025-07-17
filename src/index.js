import Socket from "./components/Websocket";
import uuid from "./components/uuid";
import Utils from "./components/Utils";

class WebPrintPdf {
  constructor() {
    this._ws = null;
    this._messagePromisePool = {};
    this._connectPromisePool = [];
    this._port = 16794;
    this.utils = new Utils(this);
    this._onResponseCallback = null;
    this._onErrorCallback = null;
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
      if (!this._ws?.ws) {
        this._ws = new Socket();
        this._ws.init({
          url: `ws://127.0.0.1:${this._port}/websocket/standard`,
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
              this._onResponseCallback && this._onResponseCallback(message);
            }
          },
          onError: this._onErrorCallback,
        });
      } else {
        if (this._ws.isConnected) {
          this._mapResolveConnectPromise();
        } else if (this._ws.isDestroyed) {
          this._mapRejectConnectPromise("client ws has been destroyed");
        } else {
          this._mapRejectConnectPromise("client ws has not been connected");
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

  async printHtmlByUrl(
    url,
    pdfOptions = {},
    printOptions = {},
    extraOptions = {},
  ) {
    return await this._promiseWrapper((commonParams = {}) => {
      this._ws.send({
        ...commonParams,
        type: this.printHtmlByUrl.name,
        url,
        pdfOptions,
        printOptions,
        extraOptions,
      });
    });
  }

  async printHtmlByBase64(
    base64,
    pdfOptions = {},
    printOptions = {},
    extraOptions = {},
  ) {
    return await this._promiseWrapper((commonParams = {}) => {
      this._ws.send({
        ...commonParams,
        type: this.printHtmlByBase64.name,
        base64,
        pdfOptions,
        printOptions,
        extraOptions,
      });
    });
  }

  async printPdfByUrl(
    url,
    pdfOptions = {},
    printOptions = {},
    extraOptions = {},
  ) {
    return await this._promiseWrapper((commonParams = {}) => {
      this._ws.send({
        ...commonParams,
        type: this.printPdfByUrl.name,
        url,
        pdfOptions,
        printOptions,
        extraOptions,
      });
    });
  }

  async printPdfByBase64(
    base64,
    pdfOptions = {},
    printOptions = {},
    extraOptions = {},
  ) {
    return await this._promiseWrapper((commonParams = {}) => {
      this._ws.send({
        ...commonParams,
        type: this.printPdfByBase64.name,
        base64,
        pdfOptions,
        printOptions,
        extraOptions,
      });
    });
  }

  async printImageByUrl(
    url,
    pdfOptions = {},
    printOptions = {},
    extraOptions = {},
  ) {
    return await this._promiseWrapper((commonParams = {}) => {
      this._ws.send({
        ...commonParams,
        type: this.printImageByUrl.name,
        url,
        pdfOptions,
        printOptions,
        extraOptions,
      });
    });
  }

  async printImageByBase64(
    base64,
    pdfOptions = {},
    printOptions = {},
    extraOptions = {},
  ) {
    return await this._promiseWrapper((commonParams = {}) => {
      this._ws.send({
        ...commonParams,
        type: this.printImageByBase64.name,
        base64,
        pdfOptions,
        printOptions,
        extraOptions,
      });
    });
  }

  async batchPrint(
    printTaskList = [],
    pdfOptions = {},
    printOptions = {},
    extraOptions = {},
  ) {
    return await this._promiseWrapper((commonParams = {}) => {
      this._ws.send({
        ...commonParams,
        type: this.batchPrint.name,
        printTaskList,
        pdfOptions,
        printOptions,
        extraOptions,
      });
    });
  }
}

export default new WebPrintPdf();
