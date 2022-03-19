const ws = require('ws');

const wss = new ws.Server({
    port: 3500,
}, () => console.log(`Server started on 3500`));


wss.on('connection', function connection(ws) {
    ws.on('message', function (message) {
        message = JSON.parse(message)
        // eslint-disable-next-line default-case
        switch (message.event) {
            case 'message':
                broadcastMessage(message)
                break;
            case 'connection':
                broadcastMessage(message)
                break;
            default: console.log('Server error')
        }
    })
})

function broadcastMessage(message, id) {
    wss.clients.forEach(client => {
        client.send(JSON.stringify(message));
    });
}