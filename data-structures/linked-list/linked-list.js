const LinkedListNode = require('./list-node');

class LinkedList {
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
        let node = this.head.next;
        let oldNext;

        this.tail = this.head;
        this.tail.next = null;

        while (node) {
            oldNext = node.next;

            node.next = this.head;
            this.head = node;

            node = oldNext;
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

        valuesList.forEach((el, i) => {
            const newNode = new LinkedListNode(el);

            if (this.length === 0 && this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
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

            if (this.count === 0 && this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            }

            newNode.next = this.head;
            this.head = newNode;
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


        let nodeToInsertAfter = this.getNodeAtIndex(index - 1);

        valuesList.forEach((el, i) => {
            const newNode = new LinkedListNode(el);

            newNode.next = nodeToInsertAfter.next;
            nodeToInsertAfter.next = newNode;

            nodeToInsertAfter = newNode;
        });

        this.count += valuesList.length;
    }

    removeAt(index) {
        if (typeof index !== 'number') {
            throw new Error(`The index parameter for the insert method must be number!`);
        } else if (index < 0 || index >= this.count) {
            throw new Error(`Invalid index: ${index} when inserting in doubly linked list!`);
        }

        let deletedNode;

        if (index === 0) {
            deletedNode = this.head;

            this.head = this.head.next;
        } else {
            const nodeToReconnect = this.getNodeAtIndex(index - 1);

            deletedNode = nodeToReconnect.next;
            nodeToReconnect.next = nodeToReconnect.next.next;

            if (index === this.count - 1) {
                this.tail = nodeToReconnect;
            }
        }

        this.count--;
        return deletedNode;
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

const list = new LinkedList();


list.append([67, 12, 22, 1]);
list.print;

console.log(list.head);
console.log(list.tail);

console.log('-'.repeat(10));

list.reverse;
list.print;

console.log(list.head.value);
console.log(list.tail.value);