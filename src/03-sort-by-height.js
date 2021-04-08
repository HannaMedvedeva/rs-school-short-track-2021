/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  const indArr = [];
  array.forEach((el, i) => {
    if (el === -1) {
      indArr.push(i);
    }
  });
  const filteredArr = array.filter((elem) => elem !== -1);
  filteredArr.sort((a, b) => a - b);
  indArr.forEach((ind) => {
    filteredArr.splice(ind, 0, -1);
  });
  return filteredArr;
}

module.exports = sortByHeight;
