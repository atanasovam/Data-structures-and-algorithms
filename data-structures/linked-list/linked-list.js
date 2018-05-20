const LinkedListNode = require('./list-node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this._count = 0;
    }

    get first() {
        return this._head ? this._head.value : null;
    }

    get last() {
        return this._tail ? this._tail.value : null;
    }

    get length() {
        return this._count;
    }

    reverse() {
        let node = this._head.next;
        let oldNext;

        this._tail = this._head;
        this._tail.next = null;

        while (node) {
            oldNext = node.next;

            node.next = this._head;
            this._head = node;

            node = oldNext;
        }
    }

    print() {
        const result = Array.from({ length: this._count });

        let node = this._head;
        let nodeCount = 0;

        while (node) {
            result[nodeCount] = node.value;
            nodeCount++;

            node = node.next;
        }

        console.log(result.join(' '));
    }

    append(valuesList) {
        if (!Array.isArray(valuesList)) {
            throw new Error(`${valuesList} isn't array!`)
        }

        valuesList.forEach((el, i) => {
            const newNode = new LinkedListNode(el);

            if (this.length === 0 && this._head === null) {
                this._head = newNode;
                this._tail = newNode;
            } else {
                this._tail.next = newNode;
                this._tail = newNode;
            }
        });

        this._count += valuesList.length;
    }

    prepend(valuesList) {
        if (!Array.isArray(valuesList)) {
            throw new Error(`${valuesList} isn't array!`)
        }

        for (let i = valuesList.length - 1; i >= 0; i--) {
            const newNode = new LinkedListNode(valuesList[i]);

            if (this._count === 0 && this._head === null) {
                this._head = newNode;
                this._tail = newNode;
            }

            newNode.next = this._head;
            this._head = newNode;
        }

        this._count += valuesList.length;
    }

    insert(index, valuesList) {
        if (!Array.isArray(valuesList)) {
            throw new Error(`${valuesList} isn't array!`)
        }

        if (typeof index !== 'number' || index < 0 || index >= this._count) {
            throw new Error(`Invalid index: ${index} when inserting in linked list!`);
        }

        let nodeToInsertAfter = this.getNodeAtIndex(index - 1);

        valuesList.forEach((el, i) => {
            const newNode = new LinkedListNode(el);

            newNode.next = nodeToInsertAfter.next;
            nodeToInsertAfter.next = newNode;

            nodeToInsertAfter = newNode;
        });

        this._count += valuesList.length;
    }

    removeAt(index) {
        if (typeof index !== 'number' || index < 0 || index >= this._count) {
            throw new Error(`Invalid index: ${index} when inserting in linked list!`);
        }

        let deletedNode;

        if (index === 0) {
            deletedNode = this._head;

            this._head = this._head.next;
        } else {
            const nodeToReconnect = this.getNodeAtIndex(index - 1);

            deletedNode = nodeToReconnect.next;
            nodeToReconnect.next = nodeToReconnect.next.next;

            if (index === this._count - 1) {
                this._tail = nodeToReconnect;
            }
        }

        this._count--;
        return deletedNode;
    }

    indexOf(nodeValue) {
        if (!nodeValue) {
            throw new Error('Invalid node value!')
        }

        let nodeToReturn = this._head;
        let nodeCounter = 0;

        while (nodeToReturn !== null) {
            if (nodeValue === nodeToReturn.value) {
                break;
            }

            nodeCounter++;
            nodeToReturn = nodeToReturn.next;
        }

        return nodeCounter;
    }

    getNodeAtIndex(index) {
        if (typeof index !== 'number' || index < 0 || index >= this._count) {
            throw new Error(`Invalid index: ${index} when inserting in linked list!`);
        }
        let nodeToReturn = null;

        for (let i = 0; i < this._count; i++) {
            nodeToReturn = (i === 0) ? this._head : nodeToReturn.next;

            if (i === index) {
                break;
            }
        }

        return nodeToReturn;
    }
}

module.exports = LinkedList;

// const list = new LinkedList();


// list.append([67, 12, 22, 1]);
// list.print();

// console.log(list._head);
// console.log(list._tail);

// console.log('-'.repeat(10));

// list.reverse();
// list.print();

// console.log(list._head.value);
// console.log(list._tail.value);