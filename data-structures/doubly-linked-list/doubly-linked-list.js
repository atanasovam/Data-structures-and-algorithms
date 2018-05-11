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
        let node = this.head;

        while (node) {
            console.log(node.value);

            node = node.next;
        }
    }
}

const list = new DoublyLinkedList();

list.append([+'1', +'6', +'3', +'8', +'4', +'67', +'20']);
list.prepend([+'12', +'22']);
list.insert(0, [+'67']);

// console.log(list.indexOf(67));

list.print;
