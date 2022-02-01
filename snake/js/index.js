import {update as updateSnake, render as renderSnake, speed} from './snake.js';
import {update as updateFood, render as renderFood} from './food.js'
let lastRender = 0;
const gameBoard = document.getElementById("game-board")



function Main(currentTime){
    window.requestAnimationFrame(Main);
    const secondsSinceRender = (currentTime - lastRender) /1000;
    if(secondsSinceRender < 1 / speed){
        return;
    } else{
        update()
        render()
    }
    lastRender = currentTime;
}
function update(){
    updateFood();
    updateSnake();
}
function render(){
    gameBoard.innerHTML = '';
    renderSnake(gameBoard);
    renderFood(gameBoard)
}
window.requestAnimationFrame(Main);
