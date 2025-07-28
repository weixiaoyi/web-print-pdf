declare const _default: WebPrintPdf;
export default _default;
declare class WebPrintPdf {
    _ws: Socket | null;
    _messagePromisePool: {};
    _connectPromisePool: any[];
    _port: number;
    utils: Utils;
    _onResponseCallback: any;
    _onErrorCallback: any;
    _mapResolveConnectPromise: () => void;
    _mapRejectConnectPromise: (e: any) => void;
    _setPort: (port: any) => Promise<void>;
    _init(): Promise<any>;
    _promiseWrapper(callback: any): Promise<any>;
    printHtml(content: any, pdfOptions?: {}, printOptions?: {}, extraOptions?: {}): Promise<any>;
    printHtmlByUrl(url: any, pdfOptions?: {}, printOptions?: {}, extraOptions?: {}): Promise<any>;
    printHtmlByBase64(base64: any, pdfOptions?: {}, printOptions?: {}, extraOptions?: {}): Promise<any>;
    printPdfByUrl(url: any, pdfOptions?: {}, printOptions?: {}, extraOptions?: {}): Promise<any>;
    printPdfByBase64(base64: any, pdfOptions?: {}, printOptions?: {}, extraOptions?: {}): Promise<any>;
    printImageByUrl(url: any, pdfOptions?: {}, printOptions?: {}, extraOptions?: {}): Promise<any>;
    printImageByBase64(base64: any, pdfOptions?: {}, printOptions?: {}, extraOptions?: {}): Promise<any>;
    batchPrint(printTaskList?: any[], pdfOptions?: {}, printOptions?: {}, extraOptions?: {}): Promise<any>;
}
import Socket from "./components/Websocket";
import Utils from "./components/Utils";
