const LinkedListNode = require('./node');

class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    get _first() {
        const first = this.first ? this.first.value : 'undefined';
        return first;
    }

    get _last() {
        const last = this.last ? this.last.value : 'undefined';
        return last;
    }

    get _length() {
        return this.length;
    }

    append(arr) {
        arr.forEach((el, i) => {
            const newNode = new LinkedListNode(el);

            if (this.length === 0 && this.first === null) {
                this.first = newNode;
                this.last = newNode;
            } else {
                this.last.next = newNode;
                this.last = newNode;
            }
        });

        this.length += arr.length;
    }

    prepend(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            const newNode = new LinkedListNode(arr[i]);

            if (this._length === 0 && this.first === null) {
                this.first = newNode;
                this.last = newNode;
            }

            newNode.next = this.first;
            this.first = newNode;
        }

        this.length += arr.length;
    }

    insert(values) {
        const [indx, arr] = Object.values(values);

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
            deletedNode = this.first;

            this.first = this.first.next;
        } else {
            const nodeToReconnect = this.nodeAtIndex(indx - 1);

            console.log(nodeToReconnect);
            deletedNode = nodeToReconnect.next;
            nodeToReconnect.next = nodeToReconnect.next.next;

            if (indx === this.length - 1) {
                this.last = nodeToReconnect;
            }
        }

        this.length--;
        return deletedNode;
    }

    indexOf(node) {
        let nodeToReturn = this.first;
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
            nodeToReturn = (i === 0) ? this.first : nodeToReturn.next;

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
        let node = this.first;

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
