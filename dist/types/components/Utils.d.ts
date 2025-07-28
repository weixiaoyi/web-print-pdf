export default class Utils {
    constructor(ins: any);
    ins: any;
    onResponse(callback: any): void;
    onError(callback: any): void;
    getConnectStatus: () => Promise<any>;
    setTitle: (title: any) => Promise<any>;
    setThemeColor: (themeColor: any) => Promise<any>;
    switchTabsVisibility: (tabsVisibility: any) => Promise<any>;
    setContactUsTabInnerHtml: (html: any) => Promise<any>;
}
