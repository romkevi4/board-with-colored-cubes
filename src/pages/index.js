import { board, colors, MIN, MAX } from '../utils/constants.js';


let squaresNumber;

do {
    squaresNumber = Number((Math.random() * (MAX - MIN) + MIN).toFixed(0));
} while (!(squaresNumber % 30 === 0));

for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

function setColor(elem) {
    const color = getRandomColor();
    elem.style.background = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem) {
    elem.style.background = '#1d1d1d';
    elem.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}