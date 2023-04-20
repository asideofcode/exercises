class Product:
    def __init__(self, id, inventory_count):
        self.id = id
        self.inventory_count = inventory_count


class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def inorder_traversal(root):
    # Base case: an empty tree has no values to return
    if not root:
        return []

    # Recursively traverse the left subtree, visit the current node, and then recursively traverse the right subtree
    return inorder_traversal(root.left) + [root.val] + inorder_traversal(root.right)


class BinarySearchTree:
    def __init__(self):
        self.root = None

    def build_tree(self, products):

        raise NotImplementedError

    def search(self, id):
        raise NotImplementedError

    def update_inventory(self, id, inventory_count):
        raise NotImplementedError

    def example_build_tree(self, products):
        # Reset the root
        self.root = None

        if len(products) == 0:
            return

        # For each product in the list
        for product in products:
            # If the root is None, make the new node the root
            if self.root is None:
                self.root = TreeNode(product)
            else:
                # Insert the node into the tree
                self.insert_node(self.root, TreeNode(product))

    # Recursive function to insert a new node into the tree
    def insert_node(self, node, new_node):
        # If the new node's ID is less than the current node's ID,
        # check if the left child is empty
        if new_node.val.id < node.val.id:
            if node.left is None:
                # If it is, make the new node the left child
                node.left = new_node
            else:
                # If it is not, continue searching down the left subtree
                self.insert_node(node.left, new_node)
        else:
            # If the new node's ID is greater than or equal to the current node's ID,
            # check if the right child is empty
            if node.right is None:
                # If it is, make the new node the right child
                node.right = new_node
            else:
                # If it is not, continue searching down the right subtree
                self.insert_node(node.right, new_node)
