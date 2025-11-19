// treeSolver.js

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function postorderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    traverse(node.right);
    result.push(node.val);
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
console.log("postorder Traversal:", postorderTraversal(root));

function postorderTraversalIterativeWay(root) {
  if (!root) return [];
  let s1 = [root];
  let s2 = [];

  while (s1.length) {
    let current = s1.pop();
    s2.push(current.val);
    current.left && s1.push(current.left);
    current.right && s1.push(current.right);
  }

  return s2.reverse();
}

console.log(postorderTraversalIterativeWay(root));

function postorderTraversalUsingOneStack(root) {
  let stack = [];
  let current = root;
  let ans = [];

  while (stack.length || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    let peekNode = stack[stack.length - 1];
    let lastVisitedNode = ans[ans.length - 1];
    if (peekNode.right && peekNode.right.val !== lastVisitedNode) {
      current = peekNode.right;
    } else {
      ans.push(peekNode.val);
      stack.pop();
    }
  }
  return ans;
}

console.log(postorderTraversalUsingOneStack(root));
