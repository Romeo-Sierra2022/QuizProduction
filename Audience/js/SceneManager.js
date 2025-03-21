import aScene0 from "./aScene0.js";
import aScene1 from "./aScene1.js";
import aScene2 from "./aScene2.js"
import aScene3 from "./aScene3.js"
import aScene4 from "./aScene4.js";
import aScene5 from "./aScene5.js";
import aScene6 from "./aScene6.js";



export default class SceneManager {
    static scenes = [aScene0, aScene1, aScene2, aScene3, aScene4, aScene5, aScene6];
    static sceneMap = [0,1,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,2,2,5,2,2,2,2,2,4,2,2,6];
    constructor() {
        this.currentScene = 0;
        this.vote = {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
        };
        this.root = document.getElementById('root')
    }
    static get() {
        if (!SceneManager.instance) {
            SceneManager.instance = new SceneManager();
        }
        return SceneManager.instance;
    }
    setScene(sceneId) {
        console.log(sceneId)
        if(sceneId < SceneManager.sceneMap.length) {
            SceneManager.scenes[SceneManager.sceneMap[sceneId]].render(this.root, this.vote)
            this.currentScene = sceneId;
        } else {
            console.error(`Invalid Scene Id: ${sceneId}`)
        }
    }
    setVote(vote) {
        console.log(Object.keys(vote))
        const {A, B, C, D} = vote;
        this.vote = {A, B, C, D}
        console.log("Vote: ", this.vote)
        this.setScene(this.currentScene)
    }
}
