export default class Utils {
  constructor(ins) {
    this.ins = ins;
  }

  onResponse(callback) {
    if (Object.prototype.toString.call(callback) !== "[object Function]") {
      throw new Error("onResponse's callback should be a function");
    }
    this.ins._onResponseCallback = callback;
  }

  onError(callback) {
    if (Object.prototype.toString.call(callback) !== "[object Function]") {
      throw new Error("onError's callback should be a function");
    }
    this.ins._onErrorCallback = callback;
  }

  setPort = (port) => {
    this.ins._port = port;
  };

  setTitle = async (title) => {
    return await this.ins._promiseWrapper((commonParams = {}) => {
      this.ins._ws.send({
        ...commonParams,
        type: "setTitle",
        title,
      });
    });
  };

  switchTabsVisibility = async (tabsVisibility) => {
    return await this.ins._promiseWrapper((commonParams = {}) => {
      this.ins._ws.send({
        ...commonParams,
        type: "switchTabsVisibility",
        tabsVisibility,
      });
    });
  };

  setContactUsTabInnerHtml = async (html) => {
    return await this.ins._promiseWrapper((commonParams = {}) => {
      this.ins._ws.send({
        ...commonParams,
        type: "setContactUsTabInnerHtml",
        html,
      });
    });
  };
}
