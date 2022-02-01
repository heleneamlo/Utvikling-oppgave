import { getInputDir } from "./input.js";

export const speed = 5;
let newSegments = 0;
const snakeBody = [{x:11, y:11}];

export function update(){
    addSegments();

    const inputDirection = getInputDir();
    for(let i = snakeBody.length-2; i >= 0; --i){
        snakeBody[i+1]= { ...snakeBody[i] }
    };

    snakeBody[0].x +=inputDirection.x;
    snakeBody[0].y +=inputDirection.y;
}

export function render(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function onSnake (pos){
    return snakeBody.some((segment =>{
        return equalPos(segment, pos)
    }))
}
function equalPos(pos1, pos2){
 return pos1.x === pos2.x && pos1.y=== pos2.y;
}

export function utvidSnake(amount){
    newSegments += amount;
}

function addSegments() {
    for(let i = 0; i < newSegments; i++) {
      snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
  
    newSegments = 0
  }