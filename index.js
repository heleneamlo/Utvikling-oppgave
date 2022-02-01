const GRID = $(".grid")
console.log(GRID);
const lTetromino =[
    [1, width+1, width2+1, 2],
    [width, width+1, wdth+2, wdth2+2],
    [1, width+1, width2+1, width2],
    [width, width2, width2+1, width2+2]
];
const zTetromino = [
    [0,width,width+1,width2+1],
    [width+1, width+2,width2,width2+1],
    [0,width,width+1,width2+1],
    [width+1, width+2,width2,width2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width2+1],
    [width,width+1,width+2,width2+1],
    [1,width,width+1,width2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width2+1,width3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width2+1,width3+1],
    [width,width+1,width+2,width+3]
  ]

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];