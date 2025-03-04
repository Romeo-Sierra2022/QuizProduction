import QuizWebSocket from "./QuizWebSocket.js";
import Message from "./Message.js";
import aScene1 from "./sScene1.js";
import SceneManager from "./SceneManager.js";

export default class sScene5 {
    static htmlString = `
                <h1 id="countdown"></h1>

    `;
    static render(root, vote) {
        root.innerHTML = sScene5.htmlString;
        sScene5.counter = 10;
        setTimeout(sScene5.countdown, 1000);
    }
    static setEventListeners() {}
    static getData() {}
    static countdown() {
        if (sScene5.counter > 0) {
            const countElement = document.getElementById("countdown");
            console.log(countElement)
            countElement.innerText = sScene5.counter--;
            setTimeout(sScene5.countdown, 1000);
        } else {
            let msg = JSON.stringify({ command: "SET_SCENE", data: 1 });
            QuizWebSocket.get().ws.send(msg);
        }
    }
}
