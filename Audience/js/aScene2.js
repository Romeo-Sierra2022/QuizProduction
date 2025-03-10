import QuizWebSocket from "./QuizWebSocket.js";
import Message from "./Message.js";

export default class aScene2 {
    static htmlString = `
        <img id="millionaire-logo" src="./res/millionaireLogoTrans.png"></img>

    `;
    static render(root, vote) {
        root.innerHTML = aScene2.htmlString;

    }
    static setEventListeners() {

    }
    static getData() {}
}
