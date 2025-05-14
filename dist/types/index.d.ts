declare const _default: WebPrintPdf;
export default _default;
declare class WebPrintPdf {
    ws: Socket | null;
    _messagePromisePool: {};
    _connectPromisePool: any[];
    _mapResolveConnectPromise: () => void;
    _mapRejectConnectPromise: (e: any) => void;
    _init(): Promise<any>;
    _promiseWrapper(callback: any): Promise<any>;
    printHtmlToPdf(content: any, pdfOptions: {} | undefined, printOptions: any): Promise<any>;
}
import Socket from "./components/Websocket";
