export default class aScene4 {

    static htmlString = `
        </div>
<div class="question-box">
<p>Guilty or Not Guilty?</p>
</div>
<div class="answer-boxes">
<div class="answer-box answer-a-box" id="answer-a-box"><p><span class="answer-id" id="answer-id-a">&#x2022; A</span> Guilty</p></div>
<div class="answer-box answer-b-box" id="answer-b-box"><p><span class="answer-id" id="answer-id-b">&#x2022; B</span> Not Guilty</p></div>
</div>

    `;
    static render(root, vote) {
        root.innerHTML = aScene4.htmlString;
        aScene4.setEventListeners();
    }
    static setEventListeners() {
        const btnA = document.getElementById("answer-a-box");
        const btnB = document.getElementById("answer-b-box");
        btnA.addEventListener("click", () => {
            const msg = new Message("SET_VOTE", "A");
            QuizWebSocket.get().ws.send(JSON.stringify(msg));
            btnA.style.backgroundColor = "lightBlue";
            btnA.style.color = "black";
            btnB.style.backgroundColor = "black";
            btnB.style.color = "lightBlue";
        });
        btnB.addEventListener("click", () => {
            const msg = new Message("SET_VOTE", "B");
            QuizWebSocket.get().ws.send(JSON.stringify(msg));
            btnB.style.backgroundColor = "lightBlue";
            btnB.style.color = "black";
            btnA.style.backgroundColor = "black";
            btnA.style.color = "lightBlue";
        });
    }
    static getData() {}
}