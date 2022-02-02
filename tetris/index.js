// document.addEventListener('DOMContentLoaded', () => {
const GRID = $(".grid");
let squares = Array.from($(".grid div"));
const SCOREDISPLAY = $("#score");
const STARTBTN = document.querySelector("#start-button");
const width = 10;
let nextRandom = 0;
let timerId;

const JTETRIMINO =[
  [1, width+1, width*2+1, 2],
  [width, width+1, width+2, width*2+2],
  [1, width+1, width*2+1, width*2],
  [width, width*2, width*2+1, width*2+2]
];
const STETRIMINO = [
  [0,width,width+1,width*2+1],
  [width+1, width+2,width*2,width*2+1],
  [0,width,width+1,width*2+1],
  [width+1, width+2,width*2,width*2+1]
];

  const TTETRIMINO = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ];

  const OTETRIMINO = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ];

  const ITETRIMINO = [
    [0,+1,+2,+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1]

  ];

  const ZTETRIMINO = [
    [1,width,width+1,width*2+0],
    [width+1, width*2+2,width*1,width*2+1],
    [1,width,width+1,width*2],
    [width+1, width*2+2,width*1,width*2+1]
  ];
  const LTETRIMINO =[
    [0, width+1, width*2+1, 1],
    [width, width+1, width+2, width*0+2],
    [1, width+1, width*2+1, width*2+2],
    [width*3, width*2, width*2+1, width*2+2]
  ];



  const TETRIMINOES = [JTETRIMINO, STETRIMINO, TTETRIMINO, OTETRIMINO, ITETRIMINO,ZTETRIMINO,LTETRIMINO];

  let currentPos = 4;
  let currentRot = 0



//randomly select a Tetromino and its first rotation
let random = Math.floor(Math.random()*TETRIMINOES.length)
  //tegn tetriminioes
  function draw() {
    currentTetr.forEach(e => {
      squares[ currentPos + e ].classList.add("tetromino");
    });
  };

  let currentTetr = TETRIMINOES[random][currentRot];

  //fjern tetriminioes
  function undraw() {
    currentTetr.forEach(e => {
      squares[ currentPos + e ].classList.remove("tetromino");
    });
  };



//fjern, flytt ned en rad og tegn igjen
function moveDown() {
  undraw();
  currentPos += width
  draw();
  freeze();
}

//spill cycle
// timerId = setInterval(moveDown,700)


//knapper -> funksjoner
function control(e) {
  if(e.keyCode === 37) {
    moveLeft()
  } else if (e.keyCode === 38) {
  rotate()
  } else if (e.keyCode === 39) {
    moveRight()
  } else if (e.keyCode === 40) {
    moveDown()
  }
}
document.addEventListener("keydown",control)

function freeze() {
  //sjekker om den toucher noe med taken, enten bunnen eller andre blokker
  if(currentTetr.some(e => squares[currentPos + e + width].classList.contains("taken"))){
    currentTetr.forEach(e => squares[currentPos + e].classList.add("taken"))
    //neste begynner å falle
    random = nextRandom
    nextRandom = Math.floor(Math.random()*TETRIMINOES.length)
    currentTetr = TETRIMINOES[random][currentRot]
    currentPos = 4;
    draw();
    displayShape();
  }
}

function moveLeft() {
  undraw()
  const isAtLeftEdge = currentTetr.some(e => (currentPos + e)% width === 0)


    if (!isAtLeftEdge) currentPos -=1

    if (currentTetr.some(e => squares[currentPos + e].classList.contains("taken"))) {
      currentPos +=1
    }
    draw()
  };
  function moveRight() {
    undraw()
    const isAtRightEdge = currentTetr.some(e => (currentPos + e)% width === width-1)


      if (!isAtRightEdge) currentPos +=1

      if (currentTetr.some(e => squares[currentPos + e].classList.contains("taken"))) {
        currentPos -=1
      }
      draw()
    };
// });

//roter
function rotate() {
  undraw();
  currentRot++
  if (currentRot === currentTetr.length) { // gå til 0 etter 4
    currentRot = 0
  }
  currentTetr = TETRIMINOES[random][currentRot]
  draw()
};

// displaying av hva som kommer neste
const displaySquares= document.querySelectorAll(".mini-grid div")
const displayWidth = 4;
let displayIndex = 0;


const UPNEXTTETRIMINOES = [
  [1, displayWidth+1, displayWidth*2+1, 2], // J
  [0,displayWidth,displayWidth+1,displayWidth*2+1], // S
  [1,displayWidth,displayWidth+1,displayWidth+2], // T
  [0,1,displayWidth,displayWidth+1], // O
  [0,1,2,3], // I
  [1,displayWidth,displayWidth+1,displayWidth*2+0], // Z
  [0, displayWidth+1, displayWidth*2+1, 1] // L
]

// function displayShape() {
//   //fjerning av forrigje
//   displaySquares.forEach(square => {
//     square.classList.remove('tetromino')
//   })
//    UPNEXTTETRIMINOES[nextRandom].forEach( e => {
//       displaySquares[displayIndex + e].classList.add('tetromino')
//   })
// }
function displayShape() {
  //remove any trace of a tetromino form the entire grid
  displaySquares.forEach(square => {
    square.classList.remove('tetromino')
  })
  UPNEXTTETRIMINOES[nextRandom].forEach( index => {
    displaySquares[displayIndex + index].classList.add('tetromino')
  })
}

//Få startknapp til å funke
STARTBTN.addEventListener("click", ()=> {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  } else {
    draw()
    timerId = setInterval(moveDown,700)
    nextRandom = Math.floor(Math.random()*TETRIMINOES.length)
    displayShape
  }
})