class Product
  attr_accessor :id, :inventory_count

  def initialize(id:, inventory_count:)
    @id = id
    @inventory_count = inventory_count
  end
end

class TreeNode
  attr_accessor :val, :left, :right

  def initialize(val, left = nil, right = nil)
    @val = val
    @left = nil
    @right = nil
  end
end

def inorder_traversal(root)
  # Base case: an empty tree has no values to return
  return [] if root.nil?

  # Recursively traverse the left subtree, visit the current node, and then recursively traverse the right subtree
  inorder_traversal(root.left) + [root.val] + inorder_traversal(root.right)
end

class BinarySearchTree
  attr_accessor :root

  def initialize
    @root = nil
  end

  def search(id)
    # Comment out the line below and make changes here
    # raise "you must implement search"
    node = @root
    
    return nil if node == 0
    return node.vale if node.val.id == id
    return node = node.left if  id < node.val.id
    return node = node.right if id > node.val.id

  end


  def update_inventory(id, inventory_count)
    # Comment out the line below and make changes here
    # raise "you must implement update_inventory"
    node = search(id)

    if node
      node.inventory_count = inventory_count
    end
  end

  def build_tree(products)
    # Comment out the line below and make changes here
    # raise "you must implement build_tree"
    example_build_tree(products)
  end

  private

  # An example implementation of how you might approach building the binary seach tree from a list of products
  def example_build_tree(products)
    # Reset the root
    @root = nil

    if products.size == 0
      return
    end

    # For each product in the list
    products.each do |product|
      # If the root is nil, make the new node the root
      if @root.nil?
        @root = TreeNode.new(product)
      else
        # Insert the node into the tree
        insert_node(@root, TreeNode.new(product))
      end
    end
  end

  # Recursive function to insert a new node into the tree
  def insert_node(node, new_node)
    # If the new node's ID is less than the current node's ID,
    # check if the left child is empty
    if new_node.val.id < node.val.id
      if node.left.nil?
        # If it is, make the new node the left child
        node.left = new_node
      else
        # If it is not, continue searching down the left subtree
        insert_node(node.left, new_node)
      end
    else
      # If the new node's ID is greater than or equal to the current node's ID,
      # check if the right child is empty
      if node.right.nil?
        # If it is, make the new node the right child
        node.right = new_node
      else
        # If it is not, continue searching down the right subtree
        insert_node(node.right, new_node)
      end
    end
  end
end
