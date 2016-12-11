/* clone a directed graph*/
class Node_clone = {
  this.data = d;
  this.neighbours = [];
}

// recursive function to create node (node, hash)
function createNode(node, hash) {

  if (!node) {
    return null;
  }
  // create node
  // add to hash
  var newNode = new Node_clone(node, hash);
  collection[node.data] = newNode;

  // loop through all neighbours
  for (var neighbour in node.neighbours) {
    // check if node is in hash. If YES, it means node has already been created
      // push into neighbours arr
    if (collection[node.neighbour.data]) {
      node.neighbours.push(collection[node.neighbour.data])
    } else {
  // IF NO, create node and then push into neighbours
      node.neighbours.push(createNode(node, collection));
    }
    
  }

  return node;
}

// initialize the cloning as a function
let clone = function (root) {
  let collection = {};
  return createNode (root, collection);
}
