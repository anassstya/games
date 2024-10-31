document.addEventListener('DOMContentLoaded', () => {
    const widget = new createBoard(4);
    const game = new Game('../img/goblin.png');
    const play = new Play();
    const reset = new Reset();
    window.widget = widget;
})
