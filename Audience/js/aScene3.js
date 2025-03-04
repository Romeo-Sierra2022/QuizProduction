import QuizWebSocket from "./QuizWebSocket.js";
import Message from "./Message.js";

export default class aScene3 {
    static htmlString = `
        </div>
<div class="question-box">
<p>In Coronation Street, who is Audrey's daughter?</p>
</div>
<div class="answer-boxes">
<div class="answer-box answer-a-box" id="answer-a-box"><p><span class="answer-id" id="answer-id-a">&#x2022; A</span> Janice</p></div>
<div class="answer-box answer-b-box" id="answer-b-box"><p><span class="answer-id" id="answer-id-b">&#x2022; B</span> Gail</p></div>
<div class="answer-box answer-c-box" id="answer-c-box"><p><span class="answer-id" id="answer-id-c">&#x2022; C</span> Linda</p></div>
<div class="answer-box answer-d-box" id="answer-d-box"><p><span class="answer-id" id="answer-id-d">&#x2022; D</span> Sally</p></div>
</div>

    `;
    static render(root, vote) {
        root.innerHTML = aScene3.htmlString;
        aScene3.setEventListeners();
    }
    static setEventListeners() {
        const btnA = document.getElementById("answer-a-box");
        const btnB = document.getElementById("answer-b-box");
        const btnC = document.getElementById("answer-c-box");
        const btnD = document.getElementById("answer-d-box");
        
        btnA.addEventListener("click", () => {
            const msg = new Message("SET_VOTE", "A");
            QuizWebSocket.get().ws.send(JSON.stringify(msg));
            btnA.style.backgroundColor = "lightBlue";
            btnA.style.color = "black";
            btnB.style.backgroundColor = "black";
            btnB.style.color = "lightBlue";
            btnC.style.backgroundColor = "black";
            btnC.style.color = "lightBlue";
            btnD.style.backgroundColor = "black";
            btnD.style.color = "lightBlue";
            
        });
        btnB.addEventListener("click", () => {
            const msg = new Message("SET_VOTE", "B");
            QuizWebSocket.get().ws.send(JSON.stringify(msg));
            btnB.style.backgroundColor = "lightBlue";
            btnB.style.color = "black";
            btnA.style.backgroundColor = "black";
            btnA.style.color = "lightBlue";
            btnC.style.backgroundColor = "black";
            btnC.style.color = "lightBlue";
            btnD.style.backgroundColor = "black";
            btnD.style.color = "lightBlue";
        });
        btnC.addEventListener("click", () => {
            const msg = new Message("SET_VOTE", "C");
            QuizWebSocket.get().ws.send(JSON.stringify(msg));
            btnC.style.backgroundColor = "lightBlue";
            btnC.style.color = "black";
            btnA.style.backgroundColor = "black";
            btnA.style.color = "lightBlue";
            btnB.style.backgroundColor = "black";
            btnB.style.color = "lightBlue";
            btnD.style.backgroundColor = "black";
            btnD.style.color = "lightBlue";
        });
        btnD.addEventListener("click", () => {
            const msg = new Message("SET_VOTE", "D");
            QuizWebSocket.get().ws.send(JSON.stringify(msg));
            btnD.style.backgroundColor = "lightBlue";
            btnD.style.color = "black";
            btnA.style.backgroundColor = "black";
            btnA.style.color = "lightBlue";
            btnB.style.backgroundColor = "black";
            btnB.style.color = "lightBlue";
            btnC.style.backgroundColor = "black";
            btnC.style.color = "lightBlue";
        });

    }
    static getData() {}
}
