const BinaryTreeNode = require('../../data-structures/trees/nodes/binary-tree-node');

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
 
class DFS {
    constructor() { }

    /**
     * Root, Left, Right
     */
    static get preOrder() {
        const order = function* (node) {
            if (node === null) {
                return;
            }

            yield node.value;

            yield* order(node.leftChild);
            yield* order(node.rightChild);
        };

        return order;
    }

    /**
     * Left, Root, Right
     */
    static get inOrder() {
        const order = function* (node) {
            if (node === null) {
                return;
            }

            yield* order(node.leftChild);

            yield node.value;

            yield* order(node.rightChild);
        };

        return order;
    }

    /**
     * Left, Right, Root
     */
    static get postOrder() {
        const order = function* (node) {
            if (node === null) {
                return;
            }

            yield* order(node.leftChild);
            yield* order(node.rightChild);

            yield node.value;
        };

        return order;
    }

    static print(generator) {
        const result = [];
        let generatedNodeValue = generator.next();

        while (generatedNodeValue.value) {
            result.push(generatedNodeValue.value);

            generatedNodeValue = generator.next();
        }

        console.log('Orderd nodes-> ' + result.join(' '))
    }
}

const preOrderedNodesGenerator = DFS.preOrder(binaryTree);
const inOrderedNodesGenerator = DFS.inOrder(binaryTree);
const postOrderedNodesGenerator = DFS.postOrder(binaryTree);

DFS.print(preOrderedNodesGenerator);
DFS.print(inOrderedNodesGenerator);
DFS.print(postOrderedNodesGenerator);
