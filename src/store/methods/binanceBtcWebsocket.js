export function initWebSocket(socket, onDataReceived) {
    socket.addEventListener('message', event => {
        const data = JSON.parse(event.data).data;
        if (data.s === 'BTCUSDT' || data.s === 'ETHUSDT' || data.s === 'XRPUSDT' || data.s === 'SOLUSDT') {
            const reciveData = {price_percent:parseFloat(data.P).toFixed(2),
                                close:parseFloat(data.c).toFixed(2),
                                high:parseFloat(data.h),
                                low:parseFloat(data.l),
                                ticker:data.s
            }
            onDataReceived(reciveData);
        }
    });

    socket.addEventListener('close', () => {
        console.log('WebSocket connection closed.');
    });
}