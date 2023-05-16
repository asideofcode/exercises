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
            return this.searchRecursive(id, this.root);
        }
    
    searchRecursive(id, currentNode) {
        if (currentNode === null) {
            return null ;
        }
        else if (currentNode === undefined) {
            return;
        }
        else if(currentNode.val.id === id ) {
            return currentNode.val;
        }
        else if (id > currentNode.val.id) {
            return this.searchRecursive(id, currentNode.right);
        }
        else if (id < currentNode.val.id) {
            return this.searchRecursive(id, currentNode.left);
        }
        else {
            return;
        }
    };
    
    updateInventory(id, inventoryCount) {
        const currentNode = this.searchRecursive(id, this.root);
        if (currentNode === null) {
            return;
        }
        currentNode.inventoryCount = inventoryCount;
    }

    buildTree(products) {
        return this.exampleBuildTree(products)
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
