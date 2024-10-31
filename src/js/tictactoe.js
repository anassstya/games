const boardElement = document.querySelector('.board');
const line = document.createElement('div');
const btn = document.querySelector('.button__play');
const xScores = document.getElementById('x-scores');
const oScores = document.getElementById('o-scores');
const reset = document.querySelector('.button__again');
const winner = document.querySelector('.main__winner');
const cells = document.querySelectorAll('.cell');

let currentPlayer = 'X';
let gameOver = false;
let resultX = [];
let resultO = [];
let xScoreCount = 0;
let oScoreCount = 0;

const result = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach(cell => {
    const cellsArr = [...cells];

    cell.addEventListener('click', () => {
        if (currentPlayer === 'X' && cell.textContent === '' && !gameOver) {
            cell.innerHTML = 'X';
            cell.classList.add('cell__text');
            currentPlayer = 'O';
            resultX.push(cellsArr.indexOf(cell));
            checkResult(resultX, 'X');
        } else if (currentPlayer === 'O' && cell.textContent === '' && !gameOver) {
            cell.innerHTML = 'O';
            cell.classList.add('cell__text');
            currentPlayer = 'X';
            resultO.push(cellsArr.indexOf(cell));
            checkResult(resultO, 'O');
        }
    });
});

function checkResult(playerArr, player) {
    for (let res of result) {
        if (res.every(index => playerArr.includes(index))) {
            gameOver = true;
            drawLine(res);
            if (player === 'X') {
                xScoreCount++;
                xScores.innerHTML = xScoreCount;
                winner.innerHTML = `X is winner!`;
                winner.classList.remove('hidden');
            } else if (player === 'O') {
                oScoreCount++;
                oScores.innerHTML = oScoreCount;
                winner.innerHTML = `O is winner!`;
                winner.classList.remove('hidden');
            }
            return;
        }
    }
}

function drawLine(res) {
    line.classList.add('win-line');

    if (res[0] === 0 && res[2] === 2) {
        line.classList.add('horizontal', 'row-1');
    } else if (res[0] === 3 && res[2] === 5) {
        line.classList.add('horizontal', 'row-2');
    } else if (res[0] === 6 && res[2] === 8) {
        line.classList.add('horizontal', 'row-3');
    } else if (res[0] === 0 && res[2] === 6) {
        line.classList.add('vertical', 'col-1');
    } else if (res[0] === 1 && res[2] === 7) {
        line.classList.add('vertical', 'col-2');
    } else if (res[0] === 2 && res[2] === 8) {
        line.classList.add('vertical', 'col-3');
    } else if (res[0] === 0 && res[2] === 8) {
        line.classList.add('diagonal', 'diag-1');
    } else if (res[0] === 2 && res[2] === 6) {
        line.classList.add('diagonal', 'diag-2');
    }
    boardElement.appendChild(line);
}

function resetBoard() {
    cells.forEach(cell => {
        cell.innerHTML = '';
    });

    if (line.parentNode) {
        boardElement.removeChild(line);
    }

    line.classList.remove('win-line', 'horizontal', 'vertical', 'diagonal', 'row-1', 'row-2', 'row-3', 'col-1', 'col-2', 'col-3', 'diag-1', 'diag-2');
    gameOver = false;
    resultX = [];
    resultO = [];
    winner.classList.add('hidden');
}

btn.addEventListener('click', resetBoard);

reset.addEventListener('click', () => {
    xScores.innerHTML = 0;
    oScores.innerHTML = 0;
    xScoreCount = 0;
    oScoreCount = 0;
    resetBoard();
});


