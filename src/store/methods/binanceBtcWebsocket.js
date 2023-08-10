export function initWebSocket(socket, onDataReceived) {
    socket.addEventListener('message', event => {
        const data = JSON.parse(event.data);
        if (data.s === 'BTCUSDT') {
            const reciveData = {open:parseFloat(data.o).toFixed(2),
                                close:parseFloat(data.c).toFixed(2),
            
            }
            onDataReceived(reciveData);
        }
    });

    socket.addEventListener('close', () => {
        console.log('WebSocket connection closed.');
    });
}