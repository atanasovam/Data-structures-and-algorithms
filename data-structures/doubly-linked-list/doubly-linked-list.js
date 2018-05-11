const LinkedListNode = require('./node');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    get _first() {
        return this.head;
    }

    get _last() {
        return this.tail;
    }

    get _length() {
        return this.length;
    }

    append(arr) {
        arr.forEach((el) => {
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

        this.length += arr.length;
    }

    prepend(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            const newNode = new LinkedListNode(arr[i]);

            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;

                this.head.prev = newNode;
                this.head = newNode;
            }
        }

        this.length += arr.length;
    }

    insert(indx, arr) {
        if (!this.validateIndex(indx)) {
            throw new Error('Invalid index!');
        }

        if (this.head === null || indx === this.length - 1) {
            return this.append(arr);
        } else if (indx === 0) {
            return this.prepend(arr);
        }

        const nodeToInsertAfter = this.nodeAtIndex(indx - 1);

        arr.forEach((el) => {
            const newNode = new LinkedListNode(el);

            newNode.prev = nodeToInsertAfter;
            newNode.next = nodeToInsertAfter.next;

            nodeToInsertAfter.next.prev = newNode;
            nodeToInsertAfter.next = newNode;
        });

        this.length += arr.length;
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

            if (node === null) {
                this.tail = pastPrev;
                return;
            }

            pastPrev = node.prev;
            pastNext = node.next;
        }
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

    nodeAtIndex(indx) {
        if (!this.validateIndex(indx)) {
            throw new Error('Invalid index!');
        }

        let nodeToReturn = null;

        for (let i = 0; i < this.length; i++) {
            nodeToReturn = (i === 0) ? this.head : nodeToReturn.next;

            if (i === indx) {
                break;
            }
        }

        return nodeToReturn;
    }

    validateIndex(indx) {
        if (indx < 0 || indx >= this.length) {
            return false;
        }

        return true;
    }

    get print() {
        const result = Array.from({ length: this.length });

        let node = this.head;
        let nodeCount = 0;

        while (node) {
            result[nodeCount] = node.value;
            nodeCount++;

            node = node.next;
        }

        console.log(result.join(' '));
    }
}

const list = new DoublyLinkedList();

list.append([67, 12, 22, 1]);
list.print;

console.log('-'.repeat(10));

list.reverse;
list.print;
