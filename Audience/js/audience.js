import QuizWebSocket from "./QuizWebSocket.js";
import SceneManager from "./SceneManager.js";

const url = "ws://localhost:8080";

QuizWebSocket.get(url);
SceneManager.get();
