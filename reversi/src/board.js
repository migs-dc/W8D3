// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var Piece = require("./piece");
}
// DON'T TOUCH THIS CODE

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
    var board = new Array(8);

    for (var i = 0; i < board.length; i++) {
      board[i] = new Array(8);
    }

    board[3][4] = new Piece("black");
    board[4][3] = new Piece("black");
    board[3][3] = new Piece("white");
    board[4][4] = new Piece("white");
    
    return board;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  [x, y] = pos;
  return (x < 0 || y < 0 || x > 7 || y > 7) ? false : true;
  
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if(this.isValidPos(pos) === false){
    throw new Error("Not valid pos!");
  }
  [x, y] = pos;
  if (this.grid[x][y] !== undefined){
    return this.grid[x][y];
  }
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  [x, y] = pos;
  if (this.grid[x][y] && this.grid[x][y].color === color){
    return true;
  }
  return false;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  [x, y] = pos;
  //!!this.grid[x][y]
  if (this.grid[x][y]){
    return true;
  }
  return false;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){
  [x, y] = pos;
  [dx, dy] = dir;
  piecesToFlip = [];

  if(this.grid[x+dx][y+dy].oppColor() === color){
    piecesToFlip.push(grid[x+dx][y+dy]);
  }

  //base cases
    // if grid[x+dx][y+dy] is empty
    // if grid[x+dx][y+dy] is out of bounds
    // if (!this.grid[x+dx][y+dy] || !isValidPos([x+dx, y+dy]))
    //   return [];
    // } 
    // else if (this.grid[x+dx][y+dy].color === color){ 
    //   // if grid[x+dx][y+dy] is same color
    //   return piecesToFlip;
    // }

  // return Board._positionsToFlip([x+dx, y+dy],color,dir,piecesToFlip);
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};


// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  module.exports = Board;
}
// DON'T TOUCH THIS CODE