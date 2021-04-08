/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = [...names];
  for (let i = 0; i < arr.length; i += 1) {
    const arrOfDubbing = [];
    for (let j = 0; j < arr.length; j += 1) {
      const dubbingInd = arr.indexOf(arr[i], j);
      if (dubbingInd !== -1 && !arrOfDubbing.includes(dubbingInd)) {
        arrOfDubbing.push(dubbingInd);
      }
    }
    arrOfDubbing.forEach((el, index) => {
      if (index > 0) {
        arr[el] = `${arr[el]}(${index})`;
      }
    });
  }
  return arr;
}

module.exports = renameFiles;
