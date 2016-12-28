
function Node (val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function inOT (node) {
  if (node !== null) {
    iot(node.left);
    visit(node);
    iot (node.right);
  }
}

function preOT (node) {
  if (node !== null) {
    visit(node);
    iot(node.left);
    iot (node.right);
  }
}

function postOT (node) {
  if (node !== null) {
    iot(node.left);
    iot (node.right);
    visit(node);
  }
}