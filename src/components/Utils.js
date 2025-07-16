export default class Utils {
  constructor(ins) {
    this.ins = ins;
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
