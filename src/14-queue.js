const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.node = null;
  }

  get size() {
    return this.size;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    newNode.value = element;
    newNode.next = null;
    let tail = this.node;
    if (this.node === null) {
      this.node = newNode;
    } else {
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
  }

  dequeue() {
    if (this.node && this.node.value) {
      const res = this.node.value;
      this.node = this.node.next;
      return res;
    }
    return null;
  }
}

module.exports = Queue;
