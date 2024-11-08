
document.addEventListener('DOMContentLoaded', () => {
    import {Game} from "./hammers.js";
    import {CreateBoard} from "./hammers.js";
    import {Play} from "./hammers.js";
    import {Reset} from "./hammers.js";

    import '../css/main.css';  // Или путь к вашему файлу CSS
    import '../css/hammers.css';  // Или путь к вашему файлу CSS
    import '../css/ticTacToe.css';

    import goblinImage from '../img/goblin.png';
    const widget = new CreateBoard(4);
    const game = new Game('../img/goblin.png');
    const play = new Play();
    const reset = new Reset();
    window.widget = widget;
})
