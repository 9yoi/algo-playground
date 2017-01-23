function isBalanced (root) {

 let depths = []; 
 
 // create stack 
 let stack = [];
 stack.push([root, 0]);

  // while loop
 while (stack.length > 0) {
  // visit node
  let item = stack.pop();
  let node = item[0];
  let depth = item[1];

  // if it's a leaf node
  if (!node.right && !node.left) {
    if (depths.indexOf(depth) === -1) {
      depths.push(depth);
      // check and short-circuit process if unbalanced
      if (depths.length > 2 || Math.abs(depths[0] - depths[1]) > 1) {
        return false;
      }
    }
  }

  // push children
  if (node.right) {
   stack.push([node.right, depth + 1]);
  }
  if (node.left) {
    stack.push([node.left, depth + 1]);
  }

 }
 console.log(depths);
 return true;
}


function Node (val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinaryTree (val) {
  this.root = new Node (val);
}

BinaryTree.prototype.insert = function(val) {
  var node = this.root;

  while (node) { 
    if (val > node.value) {
      console.log('right', val)
      if (!node.right) {
        node.right = new Node (val);
        break;
      }
      node = node.right;
    } else {
      console.log('left', val)
      if (!node.left) {
        node.left = new Node (val);
        break;
      }
      node = node.left;
    }
  }
}; 

var tree = new BinaryTree(4);
tree.insert(3);
tree.insert(2);
tree.insert(1);
tree.insert(5);

console.log(isBalanced(tree.root));
