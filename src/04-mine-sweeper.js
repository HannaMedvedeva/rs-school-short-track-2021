/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  for (let r = 0; r < matrix.length; r += 1) {
    const row = [];
    for (let c = 0; c < matrix[0].length; c += 1) {
      let numOfMines = 0;
      if (r - 1 >= 0 && c - 1 >= 0 && matrix[r - 1][c - 1]) numOfMines += 1;
      if (r - 1 >= 0 && matrix[r - 1][c]) numOfMines += 1;
      if (r - 1 >= 0 && c + 1 < matrix[0].length && matrix[r - 1][c + 1]) numOfMines += 1;
      if (c - 1 >= 0 && matrix[r][c - 1]) numOfMines += 1;
      if (c + 1 < matrix[0].length && matrix[r][c + 1]) numOfMines += 1;
      if (r + 1 < matrix.length && c - 1 >= 0 && matrix[r + 1][c - 1]) numOfMines += 1;
      if (r + 1 < matrix.length && matrix[r + 1][c]) numOfMines += 1;
      if (r + 1 < matrix.length
        && c + 1 < matrix[0].length
        && matrix[r + 1][c + 1]) numOfMines += 1;
      row.push(numOfMines);
    }
    result.push(row);
  }
  return result;
}

module.exports = minesweeper;
