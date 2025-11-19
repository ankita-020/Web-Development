/************
 * Trees are non-linear
 * They are hierarchical
 * Each node has
 *  - 0 or more children
 *  - single parent (except root with no parent)
 *  - cannot have cycle
 *  - exactly one path between two nodes
 *  - No 2 parents can have same child
 * Examples : File system, HTML DOM elements, Databases, Hierarchical data
 * General tree - Any no of children
 * Binary tree - Max two children per node
 *  - Preorder traversal - root - > left -> right
 *  - Inorder traversal - left -> root -> right
 *  - Post order traversal - left -> right -> root
 *  - Level order traversal - traverse all elements at same level starting from left side
 * Binary Search Tree - left < root < right
 * Complete Binary Tree - all the values are filled except last level
 * Full Binary tree - Either 0 or 2 children per node
 * Perfect Binary tree - Full Binary Tree + all leaves at same level
 * Balanced Binary tree - height of tree is log(n)
 * Leaf - node which does not have children
 * root.val; root.left; root.right
 * Depth First Search - uses stack
 * Breadth First Search - uses queue
 */
