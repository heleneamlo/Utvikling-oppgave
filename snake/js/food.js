import {onSnake, utvidSnake} from './snake.js';
function randomFood(){
    let x = Math.ceil(Math.random() * 21);
    let y  = Math.ceil(Math.random() * 21);
    return [x, y];
}
let foodPos = randomFood()
let food = {x: foodPos[0], y: foodPos[1]};
const utvidelsesHastighet = 1;

export function update(){
    if(onSnake(food)){
        utvidSnake(utvidelsesHastighet);
        let foodPos = randomFood()
        if(onSnake(foodPos)){}else{
            food = {x: foodPos[0], y: foodPos[1]};
        }

    }
}

export function render(gameBoard){
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
}



