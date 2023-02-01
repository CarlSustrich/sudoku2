import Grid from './../src/grid.js'

describe ('Grid', () => {

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

  test('it should return true if a row contains the numbers 1-9 and no repeats ', () => {
    newGrid.row1 = [6, 2, 3, 7, 1, 8, 5, 4, 9];
    expect(newGrid.checkRow(1)).toEqual(true);
  });

})

