/* Given a binary tree, create linked list of nodes at each depth */

//linkedlist class
  // add function
function LinkedList () {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.add = function (val) {
  var node = {
    val : val,
    next : null
  }

  if (!this.head) {
    this.head = node;
  }

  if (this.tail) {
    this.tail.next = node;
  }

  this.tail = node;
}


// traverse binary tree
var arr = [];

function traverseTree (tree, level) {
  if (!tree) {
    return;
  }
  
  if (!arr[level]) {
    arr[level] = new LinkedList ();
  }
  arr[level].add(tree.val);

  traverseTree(tree.left, level + 1)
  traverseTree(tree.right, level + 1)
};

/*  */

var tree  = {
  val: 4,
  left:  {
     val: 2,
     left: { val: 1, left: null, right: null },
     right: { val: 3, left: null, right: null } },
  right: {
     val: 6,
     left: { val: 5, left: null, right: null },
     right: { val: 7, left: null, right: null } } 
}

traverseTree(tree, 0);

console.log(arr);
