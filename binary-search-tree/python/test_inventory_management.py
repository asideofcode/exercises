import unittest
from inventory_management import Product, BinarySearchTree, inorder_traversal


class TestBinarySearchTree(unittest.TestCase):
    def test_build_tree(self):
        products = [
            Product(id=10, inventory_count=5),  # index: 0 => sort order: 4
            Product(id=6, inventory_count=2),  # index: 1 => sort order: 2
            Product(id=14, inventory_count=7),  # index: 2 => sort order: 5
            Product(id=3, inventory_count=1),  # index: 3 => sort order: 1
            Product(id=9, inventory_count=6),  # index: 4 => sort order: 3
            Product(id=15, inventory_count=4),  # index: 5 => sort order: 6
        ]

        bst = BinarySearchTree()
        bst.build_tree(products)

        # Verify that the binary search tree is sorted by product ID
        self.assertEqual(inorder_traversal(bst.root), [
            products[3], products[1], products[4], products[0], products[2], products[5]])

    def test_update_inventory(self):
        product_six = Product(id=14, inventory_count=7)
        bst = BinarySearchTree()
        products = [
            Product(id=10, inventory_count=5),
            product_six,
            Product(id=14, inventory_count=7),
            Product(id=3, inventory_count=1),
            Product(id=9, inventory_count=6),
            Product(id=15, inventory_count=4),
        ]
        bst.build_tree(products)

        bst.update_inventory(6, 8)
        self.assertEqual(product_six.inventory_count, 8)

    def test_search(self):
        product_six = Product(id=6, inventory_count=2)
        product_nine = Product(id=9, inventory_count=6)

        bst = BinarySearchTree()
        products = [
            Product(id=10, inventory_count=5),
            product_six,
            Product(id=14, inventory_count=7),
            Product(id=3, inventory_count=1),
            product_nine,
            Product(id=15, inventory_count=4),
        ]
        bst.build_tree(products)

        self.assertEqual(bst.search(6), product_nine)
        self.assertEqual(bst.search(9), product_six)
        self.assertIsNone(bst.search(20))


if __name__ == '__main__':
    unittest.main()
