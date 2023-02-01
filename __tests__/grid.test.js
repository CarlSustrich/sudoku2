import Grid from './../src/grid.js'

describe ('Grid object functionality', () => {

  let newGrid;
  beforeEach(() => {
    newGrid = new Grid();
  });

  test('it should create a grid object with the properties row1-row9, each housing an empty array', () => {
    expect(newGrid.row1).toEqual([]);
    expect(newGrid.row2).toEqual([]);
    expect(newGrid.row3).toEqual([]);
    expect(newGrid.row4).toEqual([]);
    expect(newGrid.row5).toEqual([]);
    expect(newGrid.row6).toEqual([]);
    expect(newGrid.row7).toEqual([]);
    expect(newGrid.row8).toEqual([]);
    expect(newGrid.row9).toEqual([]);
  });

  test('it should, when .initialize() is called on it, be filled with sudoku values', () => {
    newGrid.initialize();
    expect(newGrid.row1).toEqual([6, 0, 0, 7, 0, 0, 0, 5, 4]);
    expect(newGrid.row2).toEqual([9, 0, 0, 0, 0, 0, 6, 0, 7]);
    expect(newGrid.row3).toEqual([4, 2, 0, 8, 6, 0, 9, 0, 3]);
    expect(newGrid.row4).toEqual([1, 3, 0, 0, 8, 0, 4, 0, 0]);
    expect(newGrid.row5).toEqual([0, 6, 0, 0, 1, 0, 0, 0, 8]);
    expect(newGrid.row6).toEqual([0, 0, 0, 0, 3, 0, 0, 6, 0]);
    expect(newGrid.row7).toEqual([0, 0, 0, 6, 0, 9, 0, 4, 0]);
    expect(newGrid.row8).toEqual([0, 0, 9, 0, 0, 0, 0, 0, 0]);
    expect(newGrid.row9).toEqual([0, 5, 0, 3, 0, 0, 8, 9, 0]);
  });

  test('it should return true if a row contains no repeats', () => {
    newGrid.row1 = [6, 2, 3, 7, 1, 8, 5, 4, 9];
    expect(newGrid.checkRow(1)).toEqual(true);
  });

  test('it should return false if a row contains any repeats', () => {
    newGrid.row1 = [8, 8, 2, 3, 4, 5, 6, 7, 8];
    expect(newGrid.checkRow(1)).toEqual(false);
  });

  test('it should return true if a column contains no repeats', () => {
    newGrid.row1 = [1];
    newGrid.row2 = [2];
    newGrid.row3 = [3];
    newGrid.row4 = [4];
    newGrid.row5 = [5];
    newGrid.row6 = [6];
    newGrid.row7 = [7];
    newGrid.row8 = [8];
    newGrid.row9 = [9];
    expect(newGrid.checkColumn(1)).toEqual(true);
  });

  test('it should return false if a column has any repeats', () => {
    newGrid.row1 = [2];
    newGrid.row2 = [2];
    newGrid.row3 = [3];
    newGrid.row4 = [4];
    newGrid.row5 = [5];
    newGrid.row6 = [6];
    newGrid.row7 = [7];
    newGrid.row8 = [8];
    newGrid.row9 = [9];
    expect(newGrid.checkColumn(1)).toEqual(false);
  });

  test('it should return true if a 3x3 square has no repeats, or false if it does', () => {
    newGrid.row1 = [6, 8, 7, 7, 0, 0, 0, 5, 4];
    newGrid.row2 = [9, 5, 3, 0, 0, 0, 6, 0, 7];
    newGrid.row3 = [4, 2, 1, 8, 6, 0, 9, 0, 3];
    newGrid.row4 = [1, 3, 0, 0, 8, 0, 4, 0, 0];
    newGrid.row5 = [0, 6, 0, 0, 1, 0, 0, 0, 8];
    newGrid.row6 = [0, 0, 0, 0, 3, 0, 0, 6, 0];
    newGrid.row7 = [0, 0, 0, 6, 0, 9, 5, 4, 7];
    newGrid.row8 = [0, 0, 9, 0, 0, 0, 6, 2, 3];
    newGrid.row9 = [0, 5, 0, 3, 0, 0, 8, 9, 1];
    expect(newGrid.checkSquare(1)).toEqual(true);
    expect(newGrid.checkSquare(2)).toEqual(false);
    expect(newGrid.checkSquare(4)).toEqual(false);
    expect(newGrid.checkSquare(9)).toEqual(true);
  });

  test('it should return true if every row, every column, and every square returns true upon being checked', () => {
    newGrid.row1 = [6, 8, 7, 7, 0, 0, 0, 5, 4];
    newGrid.row2 = [9, 5, 3, 0, 0, 0, 6, 0, 7];
    newGrid.row3 = [4, 2, 1, 8, 6, 0, 9, 0, 3];
    newGrid.row4 = [1, 3, 0, 0, 8, 0, 4, 0, 0];
    newGrid.row5 = [0, 6, 0, 0, 1, 0, 0, 0, 8];
    newGrid.row6 = [0, 0, 0, 0, 3, 0, 0, 6, 0];
    newGrid.row7 = [0, 0, 0, 6, 0, 9, 5, 4, 7];
    newGrid.row8 = [0, 0, 9, 0, 0, 0, 6, 2, 3];
    newGrid.row9 = [0, 5, 0, 3, 0, 0, 8, 9, 1];
    expect(newGrid.completeCheck()).toEqual(false);
    newGrid.row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    newGrid.row2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    newGrid.row3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    newGrid.row4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    newGrid.row5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    newGrid.row6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    newGrid.row7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    newGrid.row8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    newGrid.row9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(newGrid.completeCheck()).toEqual(false);
    newGrid.row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    newGrid.row2 = [2, 3, 4, 5, 6, 7, 8, 9, 1];
    newGrid.row3 = [3, 4, 5, 6, 7, 8, 9, 1, 2];
    newGrid.row4 = [4, 5, 6, 7, 8, 9, 1, 2, 3];
    newGrid.row5 = [5, 6, 7, 8, 9, 1, 2, 3, 4];
    newGrid.row6 = [6, 7, 8, 9, 1, 2, 3, 4, 5];
    newGrid.row7 = [7, 8, 9, 1, 2, 3, 4, 5, 6];
    newGrid.row8 = [8, 9, 1, 2, 3, 4, 5, 6, 7];
    newGrid.row9 = [9, 1, 2, 3, 4, 5, 6, 7, 8];
    expect(newGrid.completeCheck()).toEqual(false);
    newGrid.row1 = [1, 5, 2, 4, 6, 9, 3, 7, 8];
    newGrid.row2 = [7, 8, 9, 2, 1, 3, 4, 5, 6];
    newGrid.row3 = [4, 3, 6, 5, 8, 7, 2, 9, 1];
    newGrid.row4 = [6, 1, 3, 8, 7, 2, 5, 4, 9];
    newGrid.row5 = [9, 7, 4, 1, 5, 6, 8, 2, 3];
    newGrid.row6 = [8, 2, 5, 9, 3, 4, 1, 6, 7];
    newGrid.row7 = [5, 6, 7, 3, 4, 8, 9, 1, 2];
    newGrid.row8 = [2, 4, 8, 6, 9, 1, 7, 3, 5];
    newGrid.row9 = [3, 9, 1, 7, 2, 5, 6, 8, 4];
    expect(newGrid.completeCheck()).toEqual(true);
  })

});

