import QuizWebSocket from "./QuizWebSocket.js";
import Message from "./Message.js";

export default class aScene4 {
    static htmlString = `
                <h1 id="off-air">OFF AIR</h1>
        <h1 id="audience-instruction">OOOHS</h1>

    `;
    static render(root, vote) {
        root.innerHTML = aScene4.htmlString;

    }
    static setEventListeners() {

    }
    static getData() {}
}
