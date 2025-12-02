// Maximum depth of tree

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(8);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
root.right.right.right = new TreeNode(7);
root.right.right.right.right = new TreeNode(9);
root.right.right.right.right.right = new TreeNode(9);

function maxDepthOfTree(root) {
  if (!root) return 0;
  let maxLevel = 0;

  function traverse(node, level) {
    if (!node) return;

    maxLevel = Math.max(maxLevel, level);
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }
  traverse(root, 1);

  return maxLevel;
}

//console.log(maxDepthOfTree(root));

function maxDepthOfTreeUsingBottomUp(root) {
  function traverse(node) {
    if (!node) return 0;

    return Math.max(traverse(node.left), traverse(node.right)) + 1;
  }

  const res = traverse(root);
  return res;
}

// console.log(maxDepthOfTreeUsingBottomUp(root));

function findPathSum(root, target) {
  let ans = false;
  function traverse(node, currentSum) {
    let newSum = currentSum + node.val;
    if (!node.left && !node.right) {
      if (newSum === target) {
        ans = ans || true;
      }
    }

    node.left && traverse(node.left, newSum);
    node.right && traverse(node.right, currentSum);
  }
  traverse(root, 0);
  return ans;
}

console.log(findPathSum(root, 17));

function hasPathSumUsingBottomUp(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  let leftSubTreeHasPathSum = hasPathSumUsingBottomUp(
    root.left,
    targetSum - root.val
  );
  let rightSubTreeHasPathSum = hasPathSumUsingBottomUp(
    root.right,
    targetSum - root.val
  );

  return leftSubTreeHasPathSum || rightSubTreeHasPathSum;
}

console.log(hasPathSumUsingBottomUp(root, 17));
