/*
- iterate through 
 - for first:
    - initialize linkedlist for reversed
    - create node
    - set head and tail
- for next:
    - create node
    - node.next = reversed linked list
    - update head
*/

var Linkedlist = function () {
  this.head = null;
  this.tail = null;
}

var Node = function (val) {
  this.value = val;
  this.next = null;
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

function reverse (list) {
  var reversedList = new Linkedlist ();
  var node = list.head;
  
  while(node) {
    var newNode = new Node(node.value);
    reversedList.head = newNode;
    reversedList.head.next = reversedList;
    node = node.next;
  } 

  return reversedList;
}

var list = new Linkedlist ();
list.push(1);
console.log(list, 'after 1');
list.push(2);
console.log(list, 'after 2');
list.push(3);

console.log(reverse(list));

