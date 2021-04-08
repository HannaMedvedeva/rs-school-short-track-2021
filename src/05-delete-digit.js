/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const arr = [...n.toString()];
  const numArr = arr.map((item) => +item);
  for (let i = 0; i < arr.length; i += 1) {
    const num = numArr.reduce((acc, el, ind) => {
      if (numArr.indexOf(el, ind) !== i) return acc * 10 + el;
      return acc;
    }, 0);
    max = num > max ? +num : max;
  }
  return max;
}

module.exports = deleteDigit;
