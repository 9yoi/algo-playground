/*
- storage: object where key = node value and values = edges
*/

// Instantiate a new graph
var Graph = function() {
  this._nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this._nodes[node] = this._nodes[node] || { edges: {} };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this._nodes[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    // Removes edges between node to be deleted and all other connected nodes.
    for (var targetNode in this._nodes[node].edges) {
      this.removeEdge(node, targetNode);
    }
    delete this._nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode)) {
    return false;
  }
  return !!this._nodes[fromNode].edges[toNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }

  // Add an edge to each node pointing to the other
  this._nodes[fromNode].edges[toNode] = toNode;
  this._nodes[toNode].edges[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }

  // Remove edges from each node's edge list
  delete this._nodes[fromNode].edges[toNode];
  delete this._nodes[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this._nodes) {
    cb(node);
  }
};



//////////////////////////////////////////////////////////////////
// Implementation #2:
// Use an Adjacency Matrix to describe relationships
//
// If we know that our data is going to be numeric, then we can
// use arrays to acheive the same constant time benefit oberved
// in the above solution by making use of an adjacency matrix.
// See: https://en.wikipedia.org/wiki/Adjacency_matrix
// This implementation is less space inefficent than the object
// solution.
//////////////////////////////////////////////////////////////////

var GraphAM = function() {
  this._nodes = [];
};

GraphAM.prototype.addNode = function(node) {
  this._nodes[node] = this._nodes[node] || [];
};

GraphAM.prototype.contains = function(node) {
  return !!this._nodes[node];
};

GraphAM.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    // iterate over array like an object, to skip over undefined values
    for (var i in this._nodes[node]) {
      this.removeEdge(node, i);
    }
    this._nodes[node] = undefined;
  }
};

GraphAM.prototype.hasEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode)) {
    return false;
  }
  return !!this._nodes[fromNode][toNode];
};

GraphAM.prototype.addEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
  this._nodes[fromNode][toNode] = true;
  this._nodes[toNode][fromNode] = true;
};

GraphAM.prototype.removeEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
  this._nodes[fromNode][toNode] = undefined;
  this._nodes[toNode][fromNode] = undefined;
};

GraphAM.prototype.forEachNode = function(cb) {
  for (var node in this._nodes) {
    cb(node);
  }
};

//////////////////////////////////////////////////////////////////
// uncomment this line to use the AM version of Graph
// Graph = GraphAM;


var graph = new Graph ();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
console.log(graph._nodes);