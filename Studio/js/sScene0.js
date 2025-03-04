import Livefeed from "./Livefeed.js"

export default class sScene0 {
    static htmlString = `
                <video id="livestream"></video>
    `
    static render(root, vote) {
        root.requestFullscreen()
        root.innerHTML = sScene0.htmlString
        const livestream = document.getElementById("livestream")
        livestream.width = window.innerWidth
        livestream.srcObject = Livefeed.get().stream;
        livestream.oncanplay = () => {
            console.log("Play")
            livestream.play()
        }
    }
    static setEventListeners(root) {
        
    }
    static getData() {

    }
}