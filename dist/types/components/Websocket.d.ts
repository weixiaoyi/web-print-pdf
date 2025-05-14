export default class Socket {
    options: {} | null;
    ws: WebSocket | null;
    isConnected: boolean;
    isDestroyed: boolean;
    retryTimes: number;
    init(options?: {}): WebSocket;
    send: (obj?: {}) => void;
    close: () => void;
}
