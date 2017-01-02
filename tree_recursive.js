
function Node (val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function inOT (node) {
  if (node !== null) {
    inOT (node.left);
    visit(node);
    inOT (node.right);
  }
}

function preOT (node) {
  if (node !== null) {
    visit(node);
    preOT(node.left);
    preOT(node.right);
  }
}

function postOT (node) {
  if (node !== null) {
    postOT(node.left);
    postOT(node.right);
    visit(node);
  }
}

