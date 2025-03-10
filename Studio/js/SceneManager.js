import sScene0 from "./sScene0.js";
import sScene1 from "./sScene1.js";
import sScene2 from "./sScene2.js";
import sScene3 from "./sScene3.js";
import sScene4 from "./sScene4.js";
import sScene5 from "./sScene5.js";
import sScene6 from "./sScene6.js";
import sScene7 from "./sScene7.js";
import sScene8 from "./sScene8.js";
import sScene9 from "./sScene9.js";
import sScene10 from "./sScene10.js";
import sScene11 from "./sScene11.js";
import sScene12 from "./sScene12.js";
import sScene13 from "./sScene13.js";
import sScene14 from "./sScene14.js";
import sScene15 from "./sScene15.js";
import sScene16 from "./sScene16.js";
import sScene17 from "./sScene17.js";
import sScene18 from "./sScene18.js";
import sScene19 from "./sScene19.js";
import sScene20 from "./sScene20.js";
import sScene21 from "./sScene21.js";
import sScene22 from "./sScene22.js";
import sScene23 from "./sScene23.js";

export default class SceneManager {
    static scenes = [
        sScene0,
        sScene1,
        sScene2,
        sScene3,
        sScene4,
        sScene5,
        sScene6,
        sScene7,
        sScene8,
        sScene9,
        sScene10,
        sScene11,
        sScene12,
        sScene13,
        sScene14,
        sScene15,
        sScene16,
        sScene17,
        sScene18,
        sScene19,
        sScene20,
        sScene21,
        sScene22,
        sScene23,
    ];
    static sceneMap = [
        0, 1, 2, 3, 2, 4, 2, 5, 2, 6, 
        7,2, 8, 8, 9, 2, 10, 11, 2, 12, 
        13,14, 2, 15, 16, 2, 17, 18, 19, 2, 
        20, 21, 2, 22, 2, 12, 13, 14, 2, 20, 
        21, 2, 23,
    ];
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
        if (sceneId === this.currentScene) return;
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
