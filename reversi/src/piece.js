/**
 * Initializes the Piece with its color.
 */

function Piece (color) {
    this.color = color;
}

// class Piece {
//     constructor(color){
//       this.color = color;
//     }
// }
  
//   new Piece("white");

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
    if(this.color === "black"){
        return "white";
    } else {
        return "black";
    }
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
    this.color = this.oppColor();
};

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function () {
    return (this.color === "black") ? "B" : "W"
};

// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
    module.exports = Piece;
}
// DON'T TOUCH THIS CODE