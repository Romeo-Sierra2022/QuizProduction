import SceneMananger from "./SceneManager.js"

export default class QuizWebSocket {
    constructor(url) {
        this.protocol = "CONTROLLER";
        this.connectionAttempts = 0;
        this.ws = new WebSocket(url, this.protocol);
        document.getElementById('root').innerText = "Connecting"
        this.setEventListeners()
    }
    static get(url) {
        if (!QuizWebSocket.instance) {
            QuizWebSocket.instance = new QuizWebSocket(url);
        }
        return QuizWebSocket.instance;
    }
    setEventListeners() {
        this.ws.addEventListener('open', (e) => {
                    document.getElementById('root').innerText = "Open"
            console.log('Websocket Open')
            console.log(e)
            console.log(this.ws)
            SceneMananger.get().setScene(0);
        })
        this.ws.addEventListener('message', (e) => {
            console.log('Websocket message')
            console.log(e)
            console.log(this.ws)
            let msg;
            try {
                msg = JSON.parse(e.data)
            } catch (err) {
                console.log(err)
            }
            switch(msg.command) {
                case "SET_SCENE": {
                    SceneMananger.get().setScene(msg.data)
                }
                break;
                case "SET_VOTE": {
                    console.log(msg)
                    SceneMananger.get().setVote(msg)
                }
                break
            }
        })
        this.ws.addEventListener('close', (e) => {
            console.log('Websocket Closed')
            console.log(e)
            console.log(this.ws)
        })
        this.ws.addEventListener('error', (e) => {
            document.getElementById('root').innerText = JSON.stringify(e)
            console.log('Websocket Error')
            console.log(e)
            console.log(this.ws)
        })
    }

}
