import QuizWebSocket from "./QuizWebSocket.js"
import SceneManager from "./SceneManager.js"

export default class sScene0 {
    static htmlString = `
                <div class="buttons" id = "buttons">
                    <button id="btn-next">Next</button>
                    <button id="btn-prev">Previous</button>
                    <button id="btn-restart">Restart</button>
                    
                </div>
    `
    static render(root, vote) {
        
        root.innerHTML = sScene0.htmlString

        sScene0.setEventListeners(root)
    }
    static setEventListeners(root) {
        document.getElementById("btn-next").addEventListener('click', () => {
            let data = SceneManager.get().currentScene + 1;
            let msg = JSON.stringify({command: "SET_SCENE", data})
            QuizWebSocket.get().ws.send(msg)
        })
        document.getElementById("btn-prev").addEventListener('click', () => {
            let data = SceneManager.get().currentScene - 1;
            let msg = JSON.stringify({command: "SET_SCENE", data})
            QuizWebSocket.get().ws.send(msg)
        })
        document.getElementById("btn-restart").addEventListener('click', () => {
            let data = 0;
            let msg = JSON.stringify({command: "SET_SCENE", data})
            QuizWebSocket.get().ws.send(msg)
        })
        
    }
    static getData() {

    }
}