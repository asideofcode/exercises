class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Product {
    constructor({id, inventoryCount}) {
        this.id = id;
        this.inventoryCount = inventoryCount;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    search(id) {
        console.error("you must implement search");
    }

    updateInventory(id, inventoryCount) {
        console.error("you must implement updateInventory");
    }

    buildTree(products) {
        console.error("you must implement buildTree");
    }

    // An example implementation of how you might approach building the binary search tree from a list of products
    exampleBuildTree(products) {
        // Reset the root
        this.root = null;

        if (products.length === 0) {
            return;
        }

        // For each product in the list
        for (const product of products) {
            // If the root is null, make the new node the root
            if (this.root === null) {
                this.root = new TreeNode(product);
            } else {
                // Insert the node into the tree
                this.insertNode(this.root, new TreeNode(product));
            }
        }
    }

    // Recursive function to insert a new node into the tree
    insertNode(node, newNode) {
        // If the new node's ID is less than the current node's ID,
        // check if the left child is empty
        if (newNode.val.id < node.val.id) {
            if (node.left === null) {
                // If it is, make the new node the left child
                node.left = newNode;
            } else {
                // If it is not, continue searching down the left subtree
                this.insertNode(node.left, newNode);
            }
        } else {
            // If the new node's ID is greater than or equal to the current node's ID,
            // check if the right child is empty
            if (node.right === null) {
                // If it is, make the new node the right child
                node.right = newNode;
            } else {
                // If it is not, continue searching down the right subtree
                this.insertNode(node.right, newNode);
            }
        }
    }
}

function inorderTraversal(root) {
    // Base case: an empty tree has no values to return
    if (root === null) {
        return [];
    }

    // Recursively traverse the left subtree, visit the current node, and then recursively traverse the right subtree
    return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right));
}


module.exports = {
    BinarySearchTree,
    TreeNode,
    Product,
    inorderTraversal
};
