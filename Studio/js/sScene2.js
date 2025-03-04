import QuizWebSocket from "./QuizWebSocket.js";
import Message from "./Message.js";

export default class aScene2 {
    static htmlString = `
        <h1 id="off-air">OFF AIR</h1>
        <h1 id="audience-instruction">APPLAUSE</h1>


    `;
    static render(root, vote) {
        root.innerHTML = aScene2.htmlString;
        aScene2.setEventListeners();
    }
    static setEventListeners() {

    }
    static getData() {}
}
