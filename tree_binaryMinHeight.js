/*
Given a sorted array, write an algo to create a binary search tree with minimal height
*/

function Node (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}


//helper function to take middle of array as root and allocate left/right
//get middle
  // while array > 0
    // take median or if even, take 1 to the right
      // allocate root node to median
      // recurse for all to the left 
      // recurse for all to the right
    // if 2 or less, just allocate one

function createMinBT(array, start, end) {

  if (end < start) {
    return null;
  }

  if (end - start > 2) {
    var midIndex = Math.ceil((end - start)/ 2) + start;
    var node =  new Node (array[midIndex]);
    node.left = createMinBT(array, start, midIndex - 1);
    node.right = createMinBT(array, midIndex + 1, end);
    console.log(node);
    return node;
  }
  if ((end - start) === 2) {
    var node = new Node (array[start + 1]);
    node.left = new Node (array[start]);
    node.right = new Node (array[end]);
    return node;
  }
  if ((end - start) === 1) {
    var node = new Node (array[start]);
    node.left = null;
    node.right = new Node (array[end]);
    return node;
  }

}

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(createMinBT (arr, 0, arr.length - 1)); 
