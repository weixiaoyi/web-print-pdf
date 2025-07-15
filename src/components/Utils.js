export default class Utils {
  constructor(ins) {
    this.ins = ins;
  }

  setPort = (port) => {
    this.ins._port = port;
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
}
