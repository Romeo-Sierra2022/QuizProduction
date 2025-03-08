import QuizWebSocket from "./QuizWebSocket.js";
import Message from "./Message.js";

export default class aScene2 {
    static htmlString = `
        <div id="blank"></div>


    `;
    static render(root, vote) {
        root.innerHTML = aScene2.htmlString;
        aScene2.setEventListeners();
    }
    static setEventListeners() {

    }
    static getData() {}
}
