/*********** Level order is done using queue */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(8);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

function levelOrder(root) {
  if (!root) return [];
  let q = [root];
  let ans = [];

  while (q.length) {
    let levelArr = [];
    let levelSize = q.length;

    for (let i = 0; i < levelSize; i++) {
      let current = q.shift();
      current.left && q.push(current.left);
      current.right && q.push(current.right);
      levelArr.push(current.val);
    }
    ans.push(levelArr);
  }
  return ans;
}

console.log(levelOrder(root));

function levelOrderUsingRecursion(root) {
  let ans = [];

  function traverse(node, level) {
    if (!ans[level]) {
      ans[level] = [];
    }

    ans[level].push(node.val);
    node.left && traverse(node.left, level + 1);
    node.right && traverse(node.right, level + 1);
  }

  traverse(root, 0);

  return ans;
}

console.log(levelOrderUsingRecursion(root));
