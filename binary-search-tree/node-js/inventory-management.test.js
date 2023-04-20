const assert = require('assert');
const {Product, BinarySearchTree, inorderTraversal} = require('./inventory-management');

describe('BinarySearchTree', function() {
  describe('#buildTree()', function() {
    const products = [
      new Product({ id: 10, inventoryCount: 5 }), // index: 0 => sort order: 4
      new Product({ id: 6, inventoryCount: 2 }), // index: 1 => sort order: 2
      new Product({ id: 14, inventoryCount: 7 }), // index: 2 => sort order: 5
      new Product({ id: 3, inventoryCount: 1 }), // index: 3 => sort order: 1
      new Product({ id: 9, inventoryCount: 6 }), // index: 4 => sort order: 3
      new Product({ id: 15, inventoryCount: 4 }), // index: 5 => sort order: 6
    ];

    it('should build a binary search tree sorted by product ID', function() {
      const bst = new BinarySearchTree();
      bst.buildTree(products);

      const nodes = inorderTraversal(bst.root);
      const expectedNodes = [
        products[3], products[1], products[4], products[0], products[2], products[5]
      ];

      assert.deepStrictEqual(nodes, expectedNodes);
    });
  });

  describe('#updateInventory()', function() {
    const productSix = new Product({ id: 14, inventoryCount: 7 });

    const products = [
      new Product({ id: 10, inventoryCount: 5 }),
      productSix,
      new Product({ id: 14, inventoryCount: 7 }),
      new Product({ id: 3, inventoryCount: 1 }),
      new Product({ id: 9, inventoryCount: 6 }),
      new Product({ id: 15, inventoryCount: 4 }),
    ];

    const bst = new BinarySearchTree();
    bst.buildTree(products);

    it('should update the inventory count for the product with the given ID', function() {
      bst.updateInventory(6, 8);
      assert.strictEqual(productSix.inventoryCount, 8);
    });
  });

  describe('#search()', function() {
    const productSix = new Product({ id: 6, inventoryCount: 2 });
    const productNine = new Product({ id: 9, inventoryCount: 6 });

    const products = [
      new Product({ id: 10, inventoryCount: 5 }),
      productSix,
      new Product({ id: 14, inventoryCount: 7 }),
      new Product({ id: 3, inventoryCount: 1 }),
      productNine,
      new Product({ id: 15, inventoryCount: 4 }),
    ];

    const bst = new BinarySearchTree();
    bst.buildTree(products);

    it('should return the product with the given valid ID', function() {
      assert.strictEqual(bst.search(6), productSix);
      assert.strictEqual(bst.search(9), productNine);
    });

    it('should return null if the product with the given ID does not exist in the tree', function() {
      assert.strictEqual(bst.search(20), null);
    });
  });
});
