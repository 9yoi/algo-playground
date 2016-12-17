var Linkedlist = function () {
  this.head = null;
  this.tail = null;
}

var Node = function (val) {
  this.value = val;
  this.next = null;
}

Linkedlist.prototype.remove = function () {
  // initialize obj
  // loop through list. while node.next exists. 
    // Check if node.next.next is in obj. ==> node.next = node.next.next
    // Move node to node.next

  var obj = {};
  var node = this.head;

  while (node.next) {
    if (obj[node.next.value]) {
      node.next = node.next.next;
    } else {
      obj[node.next.value] = true;
      node = node.next;
    }
  }

  return this.head;
}

Linkedlist.prototype.push = function (val) {
  var newNode = new Node (val);

  if (!this.head) {
    this.head = newNode;
  } else {
    var node = this.head;

    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
    this.tail = newNode;
  }
}

var list = new Linkedlist ();
list.push(1);
console.log(list, 'after 1');
list.push(2);
console.log(list, 'after 2');
list.push(2);

console.log(JSON.stringify(list.remove()));