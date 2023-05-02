require "./inventory_management"

RSpec.describe BinarySearchTree do
  describe "#build_tree" do
    # Define an array of Product objects
    let(:products) {
      [
        Product.new(id: 10, inventory_count: 5), # index: 0 => sort order: 4
        Product.new(id: 6, inventory_count: 2), # index: 1 => sort order: 2
        Product.new(id: 14, inventory_count: 7), # index: 2 => sort order: 5
        Product.new(id: 3, inventory_count: 1), # index: 3 => sort order: 1
        Product.new(id: 9, inventory_count: 6), # index: 4 => sort order: 3
        Product.new(id: 15, inventory_count: 4), # index: 5 => sort order: 6
      ]
    }

    # Validate that the build_tree method builds a binary search tree sorted by product ID
    it "builds a binary search tree sorted by product ID" do
      # Create a new instance of BinarySearchTree
      bst = BinarySearchTree.new

      # Call the build_tree method on the bst object and pass in the array of Product objects
      bst.build_tree(products)

      # Call the inorder_traversal method to get an array of the nodes in the binary search tree in ascending order
      # Compare the array of nodes to an expected array of nodes in ascending order
      expect(inorder_traversal(bst.root)).to eq [products[3], products[1], products[4], products[0], products[2], products[5]]
    end
  end

  describe "#update_inventory" do
    # Seperately create the product whose inventory count we intend to update so that we can use it in our test assertions
    let (:product_six) do
      Product.new(id: 14, inventory_count: 7)
    end

    # Create a new binary search tree and populate it with products
    let(:bst) do
      bst = BinarySearchTree.new
      products = [
        Product.new(id: 10, inventory_count: 5),
        product_six,
        Product.new(id: 14, inventory_count: 7),
        Product.new(id: 3, inventory_count: 1),
        Product.new(id: 9, inventory_count: 6),
        Product.new(id: 15, inventory_count: 4),
      ]
      bst.build_tree(products)
      bst
    end

    it "updates the inventory count for the product with the given ID" do
      # Update the inventory count for the product with ID 6 to 8
      bst.update_inventory(6, 8)
      # Check that the inventory count for the product with ID 6 is now 8
      expect(product_six.inventory_count).to eq 8
    end
  end

  describe "#search" do
    # Seperately create the products we intend to search for by id so that we can use them in our test assertions
    let (:product_six) do
      Product.new(id: 6, inventory_count: 2)
    end
    let (:product_nine) do
      Product.new(id: 9, inventory_count: 6)
    end

    # Create a new binary search tree and populate it with products
    let(:bst) do
      bst = BinarySearchTree.new
      products = [
        Product.new(id: 10, inventory_count: 5),
        product_six,
        Product.new(id: 14, inventory_count: 7),
        Product.new(id: 3, inventory_count: 1),
        product_nine,
        Product.new(id: 15, inventory_count: 4),
      ]
      bst.build_tree(products)
      bst
    end

    it "returns the product with the given valid ID" do
      # Test that the search method returns the expected product when given a valid ID
      expect(bst.search(6)).to eq product_nine
      expect(bst.search(9)).to eq product_six
    end

    it "returns nil if the product with the given ID does not exist in the tree" do
      # Test that the search method returns nil when given an ID that does not exist in the tree
      expect(bst.search(20)).to be_nil
    end
  end
end
