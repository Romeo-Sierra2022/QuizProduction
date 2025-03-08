import QuizWebSocket from "./QuizWebSocket.js";
import SceneManager from "./SceneManager.js";

// const url = "ws://16.171.173.219:8080";
const url = "ws://13.60.191.19:8080/websocket";


QuizWebSocket.get(url);
SceneManager.get();
// document.addEventListener('keyup', (e)=> {
//     switch (e.key) {
//         case '.': {
//             console.log("Next Scene")
//             QuizWebSocket.get().ws.send(JSON.stringify({command: "SET_SCENE", data: 2}))
//         }
//         break;
//         case 'r': {
//             console.log("Get Results")
//             QuizWebSocket.get().ws.send(JSON.stringify({command: "GET_VOTE", data: 1}))
//         }
//         break;
//     }
// })