import cScene0 from "./cScene0.js";



export default class SceneManager {
    static scenes = [cScene0];
    static sceneMap = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    constructor() {
        this.currentScene = 0;
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
