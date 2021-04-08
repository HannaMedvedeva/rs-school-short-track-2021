/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) return {};
  const counter = {};
  const longest = domains.sort((a, b) => {
    const first = a.split('.');
    const second = b.split('.');
    return second.length - first.length;
  })[0].split('.').reverse();
  const reverseArr = domains.map((dom) => {
    const temp = `.${dom.split('.').reverse().join('.')}`;
    return temp;
  });
  reverseArr.forEach((elem) => {
    if (counter[elem]) {
      counter[elem] += 1;
    } else {
      counter[elem] = 1;
    }
  });

  while (longest.length > 0) {
    longest.pop();
    const substr = `.${longest.join('.')}`;
    reverseArr.forEach((el) => {
      if (el.includes(`${substr}.`)) {
        if (counter[substr]) {
          counter[substr] += 1;
        } else {
          counter[substr] = 1;
        }
      }
    });
  }
  return counter;
}

module.exports = getDNSStats;
