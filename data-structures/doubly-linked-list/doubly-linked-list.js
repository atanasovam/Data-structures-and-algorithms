const LinkedListNode = require('./list-node');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    get first() {
        return this.head ? this.head.value : 'undefined';
    }

    get last() {
        return this.tail ? this.tail.value : 'undefined';
    }

    get length() {
        return this.count;
    }

    get reverse() {
        let node = this.tail;
        this.head = node;

        let pastPrev = node.prev;
        let pastNext = node.next;

        while (node) {
            node.prev = pastNext;
            node.next = pastPrev;

            node = pastPrev;

            if (node.prev === null) {
                this.tail = pastPrev;
                pastPrev.next = null;

                return;
            }

            pastPrev = node.prev;
            pastNext = node.next;
        }
    }

    get print() {
        const result = Array.from({ length: this.count });

        let node = this.head;
        let nodeCount = 0;

        while (node) {
            result[nodeCount] = node.value;
            nodeCount++;

            node = node.next;
        }

        console.log(result.join(' '));
    }

    append(valuesList) {
        if (!valuesList.forEach) {
            throw new Error(`${valuesList} isn't array!`)
        }

        valuesList.forEach((el) => {
            const newNode = new LinkedListNode(el);

            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.prev = this.tail;

                this.tail.next = newNode;
                this.tail = newNode;
            }
        });

        this.count += valuesList.length;
    }

    prepend(valuesList) {
        if (!valuesList.forEach) {
            throw new Error(`${valuesList} isn't array!`)
        }

        for (let i = valuesList.length - 1; i >= 0; i--) {
            const newNode = new LinkedListNode(valuesList[i]);

            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;

                this.head.prev = newNode;
                this.head = newNode;
            }
        }

        this.count += valuesList.length;
    }

    insert(index, valuesList) {
        if (typeof index !== 'number') {
            throw new Error(`The index parameter for the insert method must be number!`);
        } else if (index < 0 || index >= this.count) {
            throw new Error(`Invalid index: ${index} when inserting in doubly linked list!`);
        }

        if (!valuesList.forEach) {
            throw new Error(`${valuesList} isn't array!`)
        }

        if (this.head === null || index === this.count - 1) {
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

        this.count += valuesList.length;
    }

    indexOf(node) {
        let nodeToReturn = this.head;
        let nodeCounter = 0;

        while (nodeToReturn !== null) {
            if (node === nodeToReturn.value) {
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
        } else if (index < 0 || index >= this.count) {
            throw new Error(`Invalid index: ${index} when inserting in doubly linked list!`);
        }

        let nodeToReturn = null;

        for (let i = 0; i < this.count; i++) {
            nodeToReturn = (i === 0) ? this.head : nodeToReturn.next;

            if (i === indx) {
                break;
            }
        }

        return nodeToReturn;
    }
}

const list = new DoublyLinkedList();

list.append([67, 12, 22, 1]);
list.print;

console.log('-'.repeat(10));

list.reverse;
list.print;
