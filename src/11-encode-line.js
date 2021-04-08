/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  const arr = [...str];
  const temp = [];
  while (arr.length > 0) {
    const curEl = arr[0];
    if (temp.length === 0 || temp[0] === curEl) {
      temp.push(arr.shift());
    } else {
      if (temp.length === 1) {
        result += temp[0];
      } else {
        result += `${temp.length}${temp[0]}`;
      }
      temp.length = 0;
      temp.push(arr.shift());
    }
  }
  if (temp.length > 1) result += `${temp.length}${temp[0]}`;
  if (temp.length === 1) result += temp[0];
  return result;
}

module.exports = encodeLine;
