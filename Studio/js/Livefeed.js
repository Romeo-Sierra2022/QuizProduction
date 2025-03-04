import SceneManager from "./SceneManager.js"

export default class Livefeed {
    constructor() {
        this.camera = navigator.mediaDevices.getUserMedia({video: {width: {ideal: 3264}, height: {ideal:2448}}})
        .then (stream => {
            let settings = stream.getVideoTracks()[0] 
            this.stream = stream
            SceneManager.get().setScene(SceneManager.get().currentScene)
        })
    }
    static get() {
        if(!Livefeed.instance) {
            Livefeed.instance = new Livefeed()
        }
        return Livefeed.instance;
    }
}