const LinkedListNode = require('./list-node');

class DoublyLinkedList {
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
        let node = this._tail;
        this._head = node;

        let pastPrev = node.prev;
        let pastNext = node.next;

        while (node) {
            node.prev = pastNext;
            node.next = pastPrev;

            node = pastPrev;

            if (node.prev === null) {
                this._tail = pastPrev;
                pastPrev.next = null;

                return;
            }

            pastPrev = node.prev;
            pastNext = node.next;
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

        valuesList.forEach((el) => {
            const newNode = new LinkedListNode(el);

            if (this._head === null) {
                this._head = newNode;
                this._tail = newNode;
            } else {
                newNode.prev = this._tail;

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

            if (this._head === null) {
                this._head = newNode;
                this._tail = newNode;
            } else {
                newNode.next = this._head;

                this._head.prev = newNode;
                this._head = newNode;
            }
        }

        this._count += valuesList.length;
    }

    insert(index, valuesList) {
        if (!Array.isArray(valuesList)) {
            throw new Error(`${valuesList} isn't array!`)
        }

        if (typeof index !== 'number' || index < 0 || index >= this._count) {
            throw new Error(`Invalid index: ${index} when inserting in doubly linked list!`);
        }

        if (this._head === null || index === this._count - 1) {
            return this.append(valuesList);
        } else if (index === 0) {
            return this.prepend(valuesList);
        }

        const nodeToInsertAfter = this.getNodeAtIndex(index - 1);

        valuesList.forEach((el) => {
            const newNode = new LinkedListNode(el);

            newNode.prev = nodeToInsertAfter;
            newNode.next = nodeToInsertAfter.next;

            nodeToInsertAfter.next.prev = newNode;
            nodeToInsertAfter.next = newNode;
        });

        this._count += valuesList.length;
    }

    indexOf(nodeVal) {
        if (!nodeVal) {
            throw new Error('Invalid node value!')
        }

        let nodeToReturn = this._head;
        let nodeCounter = 0;

        while (nodeToReturn !== null) {
            if (nodeVal === nodeToReturn.value) {
                break;
            }

            nodeCounter++;
            nodeToReturn = nodeToReturn.next;
        }

        return nodeCounter;
    }

    getNodeAtIndex(indx) {
        if (typeof index !== 'number') {
            throw new Error(`The index parameter for the insert method must be number!`);
        } else if (index < 0 || index >= this._count) {
            throw new Error(`Invalid index: ${index} when inserting in doubly linked list!`);
        }

        let nodeToReturn = null;

        for (let i = 0; i < this._count; i++) {
            nodeToReturn = (i === 0) ? this._head : nodeToReturn.next;

            if (i === indx) {
                break;
            }
        }

        return nodeToReturn;
    }
}

const list = new DoublyLinkedList();

list.append([67, 12, 22, 1]);
list.print();

console.log('-'.repeat(10));

list.reverse();
list.print();
