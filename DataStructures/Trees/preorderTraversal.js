class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);
root.left.right.right = new TreeNode(7);
root.right.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);

function preorderTraversal(root) {
  const res = [];

  function traverse(curr) {
    if (!curr) return;

    res.push(curr.val);
    traverse(curr.left);
    traverse(curr.right);
  }

  traverse(root);
  return res;
}

console.log("Preorder traversal: ", preorderTraversal(root));

const root2 = new TreeNode("A");
root2.left = new TreeNode("B");
root2.left.left = new TreeNode("D");
root2.right = new TreeNode("C");
root2.right.left = new TreeNode("E");
root2.right.right = new TreeNode("F");
root2.right.left.right = new TreeNode("G");

function preorderTraversalIterativeWay(rootNode) {
  if (!rootNode) return [];

  let ans = [];
  let stack = [rootNode];

  while (stack.length) {
    let current = stack.pop();
    ans.push(current.val);
    current.right && stack.push(current.right);
    current.left && stack.push(current.left);
  }
  return ans;
}

console.log(preorderTraversalIterativeWay(root2));
