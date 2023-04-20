# Exercise: Inventory Management with Binary Search Trees

You are working on a warehouse management system for a company that stores a variety of products with unique IDs in their warehouse. You need to create a system that allows you to quickly search for a product by its ID and update its inventory count.

You decide to use a binary search tree to store the product information, with the product IDs as the keys and the product information as the values. Each node in the tree represents a product with a unique ID and its inventory count.


## Instructions

We have:

1. Defined the `Product` class with `id` and `inventory_count` attributes.

2. Defined the `TreeNode` class with `val` (which in this case will be an instance of the `Product` class), `left` and `right` attributes.

3. Defined the `BinarySearchTree` class with the `root` attribute and thed methods `build_tree`, `search` and `update_inventory` to be implemented by you.

4. Created a test suite that validates the behavior of the code.

Below are the tasks you need to complete:

- [ ] Write a method `build_tree` that takes a list of Product objects and builds a binary search tree where the nodes are sorted in ascending order by their IDs. Note that for any given dataset there can be more than 1 valid binary search trees.
    **Instructions:**

    The `build_tree` method takes a list of Product objects as its argument. The method should iterate through the list and add each product to the binary search tree using storing each product as the `val` attribute of the TreeNode class.

    Your task is to complete the `build_tree` method to create a binary search tree that is sorted in ascending order by the `id` attribute of each product.
    NOTE: We have provided an example implementation of the `build_tree` method called `example_build_tree`, it might be helpful to get you moving.

- [ ] Write a method search that takes a product ID and returns the corresponding node in the binary search tree.

    **Instructions:**

    The search method takes a product ID as its argument. The method should traverse the binary search tree starting from the root node and compare the product ID with the ID of the current node. If the ID matches, the method should return the node. If the product ID is less than the ID of the current node, the method should continue searching in the left subtree of the current node. If the product ID is greater than the ID of the current node, the method should continue searching in the right subtree of the current node. If the search reaches a leaf node without finding a match, the method should return nil.

    Your task is to implement the search method using recursion. The method should return the corresponding node if found, or nil if the product ID is not present in the binary search tree.

- [ ] Write a method `update_inventory` that takes a product ID and updates the inventory count for that product in the binary search tree.

    **Instructions:**

    The `update_inventory` method takes a product ID as its argument. The method should find the node with the corresponding `id` attribute in the binary search tree and update the `inventory_count` attribute of the Product object stored in the `val` attribute of that node.

    Your task is to implement the `update_inventory` method.


## Validation

Validate your code changes by running `./test` in the working directory for your language of choice. Without any changes to the source code the tests will fail. Your task is to make all the unit tests pass. Good luck!
