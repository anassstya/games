class createBoard {
    constructor(size) {
        const grid = document.querySelector('.grid');
        this.size = size;
        for (let i = 0; i < this.size * this.size; i++){
            const cell = document.createElement('div');
            cell.classList.add('grid__elem');
            grid.appendChild(cell);
        }
    }
}

class Game{
    constructor(link) {
        this.link = link;
        const img = document.createElement('img');
        img.src = this.link;
        const cells = document.querySelectorAll('.grid__elem');


        setInterval(() => {
            let randomIndex = Math.floor(Math.random() * cells.length);
            cells[randomIndex].appendChild(img);
            img.classList.add('grid__img');
        }, 700)
    }
}

class Play{
    constructor() {
        const point = document.querySelector('.scores-amount');
        const cells = document.querySelectorAll('.grid__elem');
        for(let i of cells){
            i.addEventListener('click', () => {
               if(i.children.length > 0){
                   point.textContent = parseInt(point.textContent) + 1;
                }
            })
        }

    }
}

class Reset{
    constructor() {
        const btn = document.querySelector('.btn');
        const point = document.querySelector('.scores-amount');
        btn.addEventListener('click', () => {
            point.textContent = 0
        })
    }
}
