const LinkedList = require('../linked-list/linked-list');

class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    get length() {
        return this.linkedList.length;
    }

    get isEmpty() {
        return this.linkedList.length === 0;
    }

    get values() {
        return function* (stack) {
            while (!stack.isEmpty) {
                yield stack.pop();
            }
        };
    }

    push(...values) {
        this.linkedList.prepend(values);
    }

    pop() {
        return this.linkedList.length > 0 ? this.linkedList.removeAt(0) : null;
    }

    print() {
        for (let node of this.values(this)) {
            console.log(node.value);
        }
    }
}

module.exports = Stack;

// const s = new Stack();
// s.push(1, 23, 4, 55, 6, 0, 7);
// // console.log(s.length)

// s.print();
// console.log(s.length)
