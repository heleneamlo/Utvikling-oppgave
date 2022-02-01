document.addEventListener('DOMContentLoaded', () => {
const GRID = $(".grid");
let squares = Array.from($(".grid div"));
const SCOREDISPLAY = $("#score");
const STARTBTN = $("#start-button");
const width = 10;

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
  let currentTetr = TETRIMINOES[Math.floor(Math.random()*TETRIMINOES.length)][currentRot];
  


  //tegn tetriminioes
  function draw() {
    currentTetr.forEach(e => {
      squares[ currentPos + e ].classList.add("tetromino");
    });
  };

  //fjern tetriminioes
  function undraw() {
    currentTetr.forEach(e => {
      squares[ currentPos + e ].classList.remove("tetromino");
    });
  };

 


function moveDown() {
  undraw()
  currentPos += width
  draw();
}

timerId = setInterval(moveDown,500)


function freeze() {
  if(currentTetr.some(e => squares[currentPos + e + width].classList.contains("taken"))){
    currentTetr.forEach(e => squares[currentPos + e].classList.add("taken"))
  }
}


})
