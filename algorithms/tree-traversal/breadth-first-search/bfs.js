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

BFS.bfs(binaryTree);