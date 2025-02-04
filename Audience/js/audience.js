import QuizWebSocket from "./QuizWebSocket.js";
import SceneManager from "./SceneManager.js";

const url = "ws://16.171.173.219:8080";

QuizWebSocket.get(url);
SceneManager.get();
