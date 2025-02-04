import ws, { WebSocketServer } from "ws";
const PORT = 8080;
let connections = [];
const wss = new WebSocketServer({ port: PORT }, console.log(`WebsocketServer listening on port: ${PORT}`))
// instigate heartbeat
wss.on("connection", (ws) => {
    console.log("New Connection", ws._protocol);

    ws.id = connections.length;
    connections.push(ws);
    ws.ping();
    console.log(ws.id, ws.readyState);
    ws.on("open", (e) => {
        console.log("Open Event", e);
    });
    ws.on("message", (e) => {
        console.log("Message Event", e);
        let msg;
        try {
            msg = JSON.parse(e.data)
        } catch(err) {
            console.error("JSON Parsing Error")
            console.log(err)
            return;
        }
        switch(ws._protocol) {
            case "AUDIENCE": {
                console.log("Audience sent msg:", msg)
            }
            break;
            case "STUDIO": {
                console.log("Studio sent msg:", msg)
            }
            break;
            case "CONTROLLER": {
                console.log("Controller sent msg:", msg)
            }
            break;
            default: {
                console.log(ws._protocol, "Unknown Protocol")
            }
            
        }
    });
    ws.on("close", (e) => {
        console.log("Close Event", e);
        console.log(ws.id);
        console.log(ws.readyState);
    });
    ws.on("error", (e) => {
        console.log("Error Event", e);
    });
    ws.on("pong", (e) => {
        console.log("Pong Event", e);
    });
});
wss.on("close", (e) => {
    console.log(e);
});
wss.on("error", (e) => {
    console.log(e);
});
wss.on("wsClientError", (e) => {
    console.log(e);
});
