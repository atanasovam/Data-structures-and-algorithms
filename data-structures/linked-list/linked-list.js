const LinkedListNode = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get _first() {
        return this.head ? this.head.value : 'undefined';
    }

    get _last() {
        return this.tail ? this.tail.value : 'undefined';
    }

    get _length() {
        return this.length;
    }

    append(arr) {
        arr.forEach((el, i) => {
            const newNode = new LinkedListNode(el);

            if (this.length === 0 && this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        });

        this.length += arr.length;
    }

    prepend(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            const newNode = new LinkedListNode(arr[i]);

            if (this._length === 0 && this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            }

            newNode.next = this.head;
            this.head = newNode;
        }

        this.length += arr.length;
    }

    insert(indx, arr) {
        if (!this.validateIndex(indx)) {
            throw new Error('Invalid index!');
        }

        let nodeToInsertAfter = this.nodeAtIndex(indx - 1);

        arr.forEach((el, i) => {
            const newNode = new LinkedListNode(el);

            newNode.next = nodeToInsertAfter.next;
            nodeToInsertAfter.next = newNode;

            nodeToInsertAfter = newNode;
        });

        this.length += arr.length;
    }

    removeAt(indx) {
        console.log(this.validateIndex(indx));
        if (!this.validateIndex(indx)) {
            throw new Error('Invalid index!');
        }

        let deletedNode;

        if (indx === 0) {
            deletedNode = this.head;

            this.head = this.head.next;
        } else {
            const nodeToReconnect = this.nodeAtIndex(indx - 1);

            console.log(nodeToReconnect);
            deletedNode = nodeToReconnect.next;
            nodeToReconnect.next = nodeToReconnect.next.next;

            if (indx === this.length - 1) {
                this.tail = nodeToReconnect;
            }
        }

        this.length--;
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

// const list = new LinkedList();

// list.append([+'1', +'6', +'3', +'8', +'4', +'67', +'20']);
// list.insert([+'2', [+'67']]);

// console.log(list.indexOf(67));

// list.print;
