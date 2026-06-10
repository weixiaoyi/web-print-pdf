export default class Utils {
    constructor(ins) {
        /*
         * 获取websocket连接状态
         * Get websocket connection status
         */
        this.getConnectStatus = async () => {
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
        this.setTitle = async (title) => {
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
        this.setThemeColor = async (themeColor) => {
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
        this.switchTabsVisibility = async (tabsVisibility) => {
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
        this.setContactUsTabInnerHtml = async (html) => {
            return await this.ins._promiseWrapper((commonParams = {}) => {
                this.ins._ws.send({
                    ...commonParams,
                    type: "setContactUsTabInnerHtml",
                    html,
                });
            });
        };
        this.getPrinterList = async () => {
            // return [{name:"",driverName:""},...]
            return await this.ins._promiseWrapper((commonParams = {}) => {
                this.ins._ws.send({
                    ...commonParams,
                    type: "getPrinterList",
                });
            });
        };
        this.getPrinterPapers = async (printer) => {
            // printer: {name:"",driverName:""}， "printer" is an item from the result returned by the getPrinterList interface
            // Obtain all paper types for the specified printer
            // return [{name:'A4',width:210,height:296,unit:'mm'}]
            return await this.ins._promiseWrapper((commonParams = {}) => {
                this.ins._ws.send({
                    ...commonParams,
                    type: "getPrinterPapers",
                    printer,
                });
            });
        };
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
}
//# sourceMappingURL=Utils.js.map