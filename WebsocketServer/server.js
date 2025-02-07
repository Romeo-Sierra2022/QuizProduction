import ws, { WebSocketServer } from "ws";
import Message from "./Message.js";
const PORT = 8080;
const wss = new WebSocketServer({ port: PORT }, console.log(`WebsocketServer listening on port: ${PORT}`))
heartbeat();
let currentScene = 0;
wss.on("connection", (ws) => {
    console.log("New Connection", ws._protocol);
    ws.isAlive = true
    let voteOptions = ["A", "B", "C", "D"]
    ws.vote = voteOptions[Math.floor(Math.random() * 4)];
    const msg = new Message("SET_SCENE", currentScene);
    ws.send(JSON.stringify(msg))
    ws.on("open", (e) => {
        console.log("Open Event");
    });
    ws.on("message", (e) => {
        let msg;
        try {
            msg = JSON.parse(e.toString())
        } catch(err) {
            console.error("JSON Parsing Error")
            console.log(err)
            return;
        }
        switch(ws._protocol) {
            case "AUDIENCE": {
                console.log("Audience sent msg:", msg)
                if(msg.command === "SET_VOTE") {
                    ws.vote = msg.data
                }

            }
            break;
            case "STUDIO": {

                console.log("Studio sent msg:", msg)
                if(msg.command === "GET_VOTE") {
                    let voteObject = getVoteObject()
                    let msg = new Message("SET_VOTE", -1, voteObject.A, voteObject.B, voteObject.C, voteObject.D)
                    console.log(msg)
                    ws.send(JSON.stringify(msg))
                }
            }
            break;
            case "CONTROLLER": {
                console.log("Controller sent msg:", msg)
                if(msg.command === "SET_SCENE") {
                    currentScene = msg.data;
                    const ogMsg = new Message("SET_SCENE", currentScene);
                    ws.send(JSON.stringify(ogMsg))
                }
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
        ws.isAlive = true;
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
function heartbeat() {
    setInterval(()=> {
        wss.clients.forEach(client => {
            if(client.isAlive && client.readyState === 1) {
                client.ping()
            } else {
                console.log("Client lost connection")
            }
        })
    },10000)
}
function getVoteObject() {
    let voteObject = {A:0, B:0, C:0, D:0}
    let count = 0
    wss.clients.forEach(client => {
        console.log("Count: ", ++count)
        if(client.isAlive) {
            switch(client.vote) {
                case "A": {
                    voteObject.A++
                }
                break;
                case "B": {
                    voteObject.B++
                }
                break;
                case "C": {
                    voteObject.C++
                }
                break;
                case "D": {
                    voteObject.D++
                }
                break;
                default : {

                }
            }
        }
    })
    return voteObject
}