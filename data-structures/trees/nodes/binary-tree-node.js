class BinaryTreeNode {
    constructor(value, left, right) {
        this.value = value;
        this.leftChild = left || null;
        this.rightChild = right || null;
    }
}

module.exports = BinaryTreeNode;

// static get postOrder() {
//     // console.log(root.value);

//     const order = (node) => {
//         if (node === null) {
//             return;
//         }

//         order(node.leftChild);
//         order(node.rightChild);
//         console.log(node.value);
//     };

//     return order;
// }