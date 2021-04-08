/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let list = l;
  let tail = list;
  let size = 0;
  let index = 0;
  const getSize = () => {
    let el = list;
    while (el.next) {
      size += 1;
      el = el.next;
    }
  };
  getSize();

  const getNodeAtInd = (ind) => {
    let node = list;
    let counter = 0;
    while (node.next) {
      if (ind === counter) return node;
      node = node.next;
      counter += 1;
    }
    return null;
  };

  while (tail) {
    if (tail.value === k) {
      if (index === 0) {
        list = list.next;
        index -= 1;
        size -= 1;
      }
      if (index === size) {
        const elem = getNodeAtInd(index - 1);
        elem.next = null;
        size -= 1;
      }
      if (index > 0 && index < size) {
        const elem = getNodeAtInd(index - 1);
        elem.next = tail.next;
        size -= 1;
        index -= 1;
      }
    }
    index += 1;
    tail = tail.next;
  }
  return list;
}

module.exports = removeKFromList;
