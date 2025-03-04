import QuizWebSocket from "./QuizWebSocket.js";
import Message from "./Message.js";

export default class aScene3 {
    static htmlString = `
                <h1 id="off-air">OFF AIR</h1>
        <h1 id="audience-instruction">LAUGH</h1>

    `;
    static render(root, vote) {
        root.innerHTML = aScene3.htmlString;
        aScene3.setEventListeners();
    }
    static setEventListeners() {
        // const btnA = document.getElementById("answer-a-box");
        // const btnB = document.getElementById("answer-b-box");
        // const btnC = document.getElementById("answer-c-box");
        // const btnD = document.getElementById("answer-d-box");
        
        // btnA.addEventListener("click", () => {
        //     const msg = new Message("SET_VOTE", "A");
        //     QuizWebSocket.get().ws.send(JSON.stringify(msg));
        //     btnA.style.backgroundColor = "lightBlue";
        //     btnA.style.color = "black";
        //     btnB.style.backgroundColor = "black";
        //     btnB.style.color = "lightBlue";
        //     btnC.style.backgroundColor = "black";
        //     btnC.style.color = "lightBlue";
        //     btnD.style.backgroundColor = "black";
        //     btnD.style.color = "lightBlue";
            
        // });
        // btnB.addEventListener("click", () => {
        //     const msg = new Message("SET_VOTE", "B");
        //     QuizWebSocket.get().ws.send(JSON.stringify(msg));
        //     btnB.style.backgroundColor = "lightBlue";
        //     btnB.style.color = "black";
        //     btnA.style.backgroundColor = "black";
        //     btnA.style.color = "lightBlue";
        //     btnC.style.backgroundColor = "black";
        //     btnC.style.color = "lightBlue";
        //     btnD.style.backgroundColor = "black";
        //     btnD.style.color = "lightBlue";
        // });
        // btnC.addEventListener("click", () => {
        //     const msg = new Message("SET_VOTE", "C");
        //     QuizWebSocket.get().ws.send(JSON.stringify(msg));
        //     btnC.style.backgroundColor = "lightBlue";
        //     btnC.style.color = "black";
        //     btnA.style.backgroundColor = "black";
        //     btnA.style.color = "lightBlue";
        //     btnB.style.backgroundColor = "black";
        //     btnB.style.color = "lightBlue";
        //     btnD.style.backgroundColor = "black";
        //     btnD.style.color = "lightBlue";
        // });
        // btnD.addEventListener("click", () => {
        //     const msg = new Message("SET_VOTE", "D");
        //     QuizWebSocket.get().ws.send(JSON.stringify(msg));
        //     btnD.style.backgroundColor = "lightBlue";
        //     btnD.style.color = "black";
        //     btnA.style.backgroundColor = "black";
        //     btnA.style.color = "lightBlue";
        //     btnB.style.backgroundColor = "black";
        //     btnB.style.color = "lightBlue";
        //     btnC.style.backgroundColor = "black";
        //     btnC.style.color = "lightBlue";
        // });

    }
    static getData() {}
}
