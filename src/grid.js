export default class Grid {

  constructor(){
    this.row1 = [];
    this.row2 = [];
    this.row3 = [];
    this.row4 = [];
    this.row5 = [];
    this.row6 = [];
    this.row7 = [];
    this.row8 = [];
    this.row9 = [];
  }

  initialize = function() {
    this.row1 = [6, 0, 0, 7, 0, 0, 0, 5, 4];
    this.row2 = [9, 0, 0, 0, 0, 0, 6, 0, 7];
    this.row3 = [4, 2, 0, 8, 6, 0, 9, 0, 3];
    this.row4 = [1, 3, 0, 0, 8, 0, 4, 0, 0];
    this.row5 = [0, 6, 0, 0, 1, 0, 0, 0, 8];
    this.row6 = [0, 0, 0, 0, 3, 0, 0, 6, 0];
    this.row7 = [0, 0, 0, 6, 0, 9, 0, 4, 0];
    this.row8 = [0, 0, 9, 0, 0, 0, 0, 0, 0];
    this.row9 = [0, 5, 0, 3, 0, 0, 8, 9, 0];
  };

  checkRow = function(rowNumber) {
    let numbersInArray = this[`row${rowNumber}`];
    const numbersInSet = new Set(numbersInArray);
    return (numbersInArray.length === numbersInSet.size);
  };

  checkColumn = function(columnNumber) {
    let numbersInArray = [];
    for(let i = 0; i < 9; i+=1) {
      numbersInArray.push(this[`row${i+1}`][columnNumber-1]);
    }
    const numbersInSet = new Set(numbersInArray);
    return (numbersInArray.length === numbersInSet.size);
  };

  checkSquare = function(squareNumber) {
    let numbersInArray = [];
    for(let i = 0; i < 3; i+=1) {
      for(let j = 0; j < 3; j+=1) {
        let rowOffset = Math.floor( (squareNumber-1)/3 ) ;    
        let rowNumber = i + 1 + rowOffset;
        let indexInRow = (((squareNumber-1)%3)*3) + j;
        numbersInArray.push(this[`row${rowNumber}`][indexInRow]);
      }
    }
    const numbersInSet = new Set(numbersInArray);
    return (numbersInArray.length === numbersInSet.size);
  };

  completeCheck = function() {
    for(let i = 0; i < 9; i++) {
      if(!this.checkRow(i+1)) {
        return false;
      }
    }
    for(let i = 0; i < 9; i++) {
      if(!this.checkColumn(i+1)) {
        return false;
      }
    }
    for(let i = 0; i < 9; i++) {
      if(!this.checkSquare(i+1)) {
        return false;
      }
    }
    return true;
  }
}