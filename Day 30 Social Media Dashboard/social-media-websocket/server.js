const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const clients = new Map();

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        const parsedMessage = JSON.parse(message);

        if (parsedMessage.type === 'register') {
            clients.set(parsedMessage.username, ws);
        } else if (parsedMessage.type === 'notification') {
            const { recipient, notification } = parsedMessage;
            const recipientSocket = clients.get(recipient);
            if (recipientSocket) {
                recipientSocket.send(JSON.stringify({
                    type: 'notification',
                    notification
                }));
            }
        }
    });

    ws.on('close', () => {
        for (const [username, client] of clients.entries()) {
            if (client === ws) {
                clients.delete(username);
                break;
            }
        }
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
