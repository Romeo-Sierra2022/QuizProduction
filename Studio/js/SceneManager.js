import sScene0 from "./sScene0.js";
import sScene1 from "./sScene1.js";
import sScene2 from "./sScene2.js";
import sScene3 from "./sScene3.js";
import sScene4 from "./sScene4.js";
import sScene5 from "./sScene5.js";



export default class SceneManager {
    static scenes = [sScene0, sScene1, sScene2, sScene3, sScene4, sScene5];
    static sceneMap = [0,0,1,2,3,4,5,4,1];
    constructor() {
        this.currentScene = -1;
        this.vote = {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
        };
        this.root = document.getElementById("root");
    }
    static get() {
        if (!SceneManager.instance) {
            SceneManager.instance = new SceneManager();
        }
        return SceneManager.instance;
    }
    setScene(sceneId) {
        if(sceneId === this.currentScene) return
        if (sceneId < SceneManager.sceneMap.length) {
            SceneManager.scenes[SceneManager.sceneMap[sceneId]].render(
                this.root,
                this.vote
            );
            this.currentScene = sceneId;
        } else {
            console.error(`Invalid Scene Id: ${sceneId}`);
        }
    }
    setVote(vote) {
        console.log(Object.keys(vote));
        const { A, B, C, D } = vote;
        this.vote = { A, B, C, D };
        console.log("Vote: ", this.vote);
        this.setScene(this.currentScene);
    }
}
