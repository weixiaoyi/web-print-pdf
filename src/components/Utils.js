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

  /*
   * 获取websocket连接状态
   * Get websocket connection status
   */
  getConnectStatus = async () => {
    return await this.ins._promiseWrapper((commonParams = {}) => {
      this.ins._ws.send({
        ...commonParams,
        type: "getConnectStatus",
      });
    });
  };

  /*
   * 设置客户端title
   * Set client title
   */
  setTitle = async (title) => {
    return await this.ins._promiseWrapper((commonParams = {}) => {
      this.ins._ws.send({
        ...commonParams,
        type: "setTitle",
        title,
      });
    });
  };

  /*
   * 设置客户端主题色
   * Set client theme color
   */
  setThemeColor = async (themeColor) => {
    return await this.ins._promiseWrapper((commonParams = {}) => {
      this.ins._ws.send({
        ...commonParams,
        type: "setThemeColor",
        themeColor,
      });
    });
  };

  /*
   * 切换客户端Tabs的显隐
   * Switch the visibility of client Tabs
   */
  switchTabsVisibility = async (tabsVisibility) => {
    return await this.ins._promiseWrapper((commonParams = {}) => {
      this.ins._ws.send({
        ...commonParams,
        type: "switchTabsVisibility",
        tabsVisibility,
      });
    });
  };

  /*
   * 设置“联系我们”页面的html内容
   * Set the HTML content for the 'Contact Us' page
   */
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
