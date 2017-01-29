// check that binary tree is correct

/* recursive */

function dfs (node, lowerBound, upperBound) {
  if (node !== null) {
    dfs(node.left, lowerBound, node.value);
    visit(node, node.value, upperBound);
    dfs(node.right);
  }
  return true;
}

function visit (node, lowerBound, upperBound) {
  if (node.value < lowerBound || node.value > upperBound) {
    return false;
  }
}

/*iterative*/
function search(root) {
  let stack = [{node: root.value, lowerBound: -Infinity, upperBound: Infinity}];
  while (stack.length > 0) {
    var node = stack.pop();
    // visit and return false if not within bounds
    if (node.value > node.upperBound || node.value < node.lowerBound) {
      return false;
    }
    if(node.left) {
      stack.push({node: node.left, lowerBound: node.lowerBound, upperBound: node.value})
    }
    if(node.right){
      stack.push({node: node.right, lowerBound: node.value, upperBound: node.upperBound})
    }
  };
  return true;
}



// ________________
// HELPER


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
console.log(search(tree.root));
console.log(dfs(tree.root, -Infinity, Infinity));
