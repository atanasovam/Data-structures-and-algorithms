const LinkedList = require('../linked-list/linked-list');

class Queue {
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
        return function* (queue) {
            while (!queue.isEmpty) {
                yield queue.dequeue();
            }
        };
    }

    enqueue(...value) {
        this.linkedList.append(value);
    }

    dequeue() {
        return this.linkedList.length ? this.linkedList.removeAt(0) : null;
    }

    print() {
        for (let node of this.values(this)) {
            console.log(node.value);
        }
    }
}

// const q = new Queue();

// q.enqueue(1, 2, 3, 4, 5, 8);

// q.print();
