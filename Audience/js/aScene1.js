export default class aScene1 {
    static htmlString = `
                            <div class="content-container">
                <section class="title-section">
                    <h1>Quiz</h1>
                    <h2>by James Graham</h2>
                    <p>presented by TheatreM21</p>
                </section>
                <section class="text-section">
                    <p>
                        Welcome to our performance of Quiz. During the show, you
                        will be asked to vote. Please check your phone and vote.
                    </p>
                </section>
            </div>
    `
    static render(root, vote) {
        root.innerHTML = aScene1.htmlString
    }
    static setEventListeners() {

    }
    static getData() {

    }
}