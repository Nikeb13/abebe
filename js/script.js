const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

// console.log(ctx);

const scale = 20;
const row = canvas.height / scale;
const column = canvas.width / scale;

let snake = [];

snake[0] = {
    x: Math.floor(Math.random() * column) * scale,
    y: Math.floor(Math.random() * row) * scale,
};

let food = {
    x: Math.floor(Math.random() * column) * scale,
    y: Math.floor(Math.random() * row) * scale,
}

// console.log(snake);

let playGame = setInterval(draw, 100);

let d = " ";

document.onkeydown = DIR;