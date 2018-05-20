class Stack {
    constructor(...values) {
        this.stack = values || [];
    }

    get length() {
        return this.stack.length;
    }

    get isEmpty() {
        return this.stack.length === 0;
    }

    get values() {
        return function* (stack) {
            while (!stack.isEmpty) {
                yield stack.pop();
            }
        };
    }

    push(...values) {
        this.stack.push(...values);
    }

    pop() {
        return this.stack.length > 0 ? this.stack.pop() : null;
    }

    print() {
        for (let node of this.values(this)) {
            console.log(node);
        }
    }
}

module.exports = Stack;

// const s = new Stack(1, 23, 4, 55, 6, 0, 7);
// s.push(1, 23, 4, 55, 6, 0, 7);
// console.log(s.length)
// s.pop();
// console.log(s.length)

// s.print();
// // console.log(s.length)
