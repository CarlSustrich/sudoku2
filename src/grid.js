export default function Grid () {
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

Grid.prototype.initialize = function() {
  this.row1 = [6, 0, 0, 7, 0, 0, 0, 5, 4];
  this.row2 = [9, 0, 0, 0, 0, 0, 6, 0, 7];
  this.row3 = [4, 2, 0, 8, 6, 0, 9, 0, 3];
  this.row4 = [1, 3, 0, 0, 8, 0, 4, 0, 0];
  this.row5 = [0, 6, 0, 0, 1, 0, 0, 0, 8];
  this.row6 = [0, 0, 0, 0, 3, 0, 0, 6, 0];
  this.row7 = [0, 0, 0, 6, 0, 9, 0, 4, 0];
  this.row8 = [0, 0, 9, 0, 0, 0, 0, 0, 0];
  this.row9 = [0, 5, 0, 3, 0, 0, 8, 9, 0];
}

Grid.prototype.checkRow = function(rowNumber) {
  let numbersInArray = this[`row${rowNumber}`];
  const rowSet = new Set(numbersInArray);
  return numbersInArray.length === rowSet.size;
}