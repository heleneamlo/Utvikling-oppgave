document.addEventListener('DOMContentLoaded', () => {
const GRID = $(".grid");
let squares = Array.from($(".grid div"));
const SCOREDISPLAY = $("#score");
const STARTBTN = $("#start-button");
const width = 10;

const LTETRIMINO =[
  [1, width+1, width*2+1, 2],
  [width, width+1, width+2, width*2+2],
  [1, width+1, width*2+1, width*2],
  [width, width*2, width*2+1, width*2+2]
];
const ZTETRIMINO = [
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
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ];

  const TETRIMINOES = [LTETRIMINO, ZTETRIMINO, TTETRIMINO, OTETRIMINO, ITETRIMINO];

  let currentPos = 4;
  let currentTetr = TETRIMINOES[0][0];


  //tegn tetriminioes
  function draw() {
    currentTetr.forEach(e => {
      squares[ currentPos + e ].classList.add("tetromino");
    });
  };

  draw();
})