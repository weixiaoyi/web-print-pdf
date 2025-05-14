export default class Socket {
    constructor() {
        this.send = (obj = {}) => {
            if (Object.prototype.toString.call(obj) === "[object Object]") {
                this.ws.send(JSON.stringify(obj));
            }
        };
        this.close = () => {
            this.isConnected = true;
            this.ws.close();
        };
        this.options = null;
        this.ws = null;
        this.isConnected = false;
        this.isDestroyed = false;
        this.retryTimes = 0;
    }
    init(options = {}) {
        this.options = options;
        const { url, onOpen, onMessage, onClose, onError, maxRetries = 5, } = options;
        this.ws = new WebSocket(url);
        this.ws.onopen = (e) => {
            this.isConnected = true;
            this.isDestroyed = false;
            this.retryTimes = 0;
            onOpen && onOpen(e);
        };
        if (onMessage) {
            this.ws.onmessage = onMessage;
        }
        this.ws.onclose = (e) => {
            if (this.isConnected) {
                if (this.retryTimes < maxRetries) {
                    this.retryTimes += 1;
                    this.init(this.options);
                }
                else {
                    this.isConnected = false;
                    this.isDestroyed = true;
                    onClose && onClose(e);
                }
            }
            else {
                this.isDestroyed = true;
                onClose && onClose(e);
            }
        };
        this.ws.onerror = (e) => {
            onError && onError(e);
        };
        return this.ws;
    }
}
//# sourceMappingURL=Websocket.js.map