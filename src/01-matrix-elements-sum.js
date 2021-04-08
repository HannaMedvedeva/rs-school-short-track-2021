/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = matrix[0].reduce((a, b) => a + b);
  for (let c = 0; c < matrix[0].length; c += 1) {
    for (let r = 1; r < matrix.length; r += 1) {
      if (matrix[r - 1][c] !== 0) {
        sum += matrix[r][c];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
