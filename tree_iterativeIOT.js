function BST (val) {
  this.value = val;
  this.left = null;
  this.right = null;
}


/*
Check val against this.valu to decide whether to move left or right
If left/right === null, insert new node
Else move left/right and call function again
*/

BST.prototype.push = function (val) {

  if (val < this.value) {
    if (this.left === null) {
      this.left = new BST (val);
    } else {
      this.left.push(val)
    }
  } else if (val >= this.value) {
    if (this.right === null) {     
      this.right = new BST (val);
    } else {
      this.right.push(val)
    }
  }
}

var bst = new BST (1);
bst.push(5);
bst.push(1);
bst.push(6);
bst.push(5);
console.log(JSON.stringify(bst));

/*
- Check node, and decide whether to go left or right
  - As long as there is a node
    - Add item to stack
    - Keep going left
    - No: Pop last item off stack and go right, then recurse
*/

function IOT (node) {
  let stack = [];

  while (node || stack.length !== 0) {
    if (node) {
      stack.push(node);
      node = node.left;
      continue;
    }
    console.log(stack[stack.length - 1].value)
    node = stack[stack.length - 1].right;
    stack.pop();
  }
}

IOT(bst);
