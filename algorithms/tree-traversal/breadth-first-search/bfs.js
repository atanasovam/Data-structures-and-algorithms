const BinaryTreeNode = require('../../../data-structures/trees/nodes/binary-tree-node');
const Queue = require('../../../data-structures/queue/queue');

const binaryTree = new BinaryTreeNode(
    5,
    new BinaryTreeNode(
        20,
        new BinaryTreeNode(1, new BinaryTreeNode(23)),
        new BinaryTreeNode(5),
    ),
    new BinaryTreeNode(
        2,
        new BinaryTreeNode(7),
        new BinaryTreeNode(38),
    ),
);

class BFS {
    constructor() { }

    static bfs(root) {
        const queue = new Queue();
        queue.enqueue(root);

        while (!queue.isEmpty) {
            const node = queue.dequeue().value;
            console.log(node.value);

            if (node.leftChild) {
                queue.enqueue(node.leftChild);
            }

            if (node.rightChild) {
                queue.enqueue(node.rightChild);
            }
        }
    }
}

const firstNode = binaryTree;
const secondNode = binaryTree.leftChild;

const checkTreesIdentity = (firstNode, secondNode) => {
    const firstQueue = new Queue();
    firstQueue.enqueue(firstNode);

    const secondQueue = new Queue();
    secondQueue.enqueue(secondNode);


    while (!(firstQueue.isEmpty || secondQueue.isEmpty)) {
        const currentFirstNode = firstQueue.dequeue.value;
        const currentSecondNode = secondQueue.dequeue.value;

        if (currentFirstNode.value !== currentSecondNode.value) {
            return false;
        }

        // First node
        if (currentFirstNode.leftChild) {
            firstQueue.enqueue(currentFirstNode.leftChild);
        }

        if (currentFirstNode.rightChild) {
            firstQueue.enqueue(currentFirstNode.rightChild);
        }

        // Second node        
        if (currentSecondNode.leftChild) {
            secondQueue.enqueue(currentSecondNode.leftChild);
        }

        if (secondntSecondNode.rightChild) {
            secondQueue.enqueue(currentSecondNode.rightChild);
        }
    }
};

const areTheSame = checkTreesIdentity(firstNode, secondNode);

const areTreesIdentical = (rootA, rootB) => {

    // equal bottom -> the same
    if (!rootA && !rootB) {
        return true;
    }

    if (rootA && rootB) {
        return areTreesIdentical(rootA.left, rootB.left) && areTreesIdentical(rootA.right, rootB.right)
    }

    // not equal tree bottom -> not the same
    return false;
}