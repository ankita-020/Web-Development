// treeSolver.js

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  traverse(root);

  return result;
}

// Create a sample tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);
root.left.right.right = new TreeNode(7);
root.right.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);

// Run the inorder traversal and print the result
console.log("Inorder Traversal:", inorderTraversal(root));

function inorderTraversalIterativeWay(root) {
  let stack = [];
  let ans = [];
  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    ans.push(current.val);
    current = current.right;
  }
  return ans;
}

console.log(inorderTraversalIterativeWay(root));
