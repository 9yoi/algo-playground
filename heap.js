/*

Structure of heap: array 
Parent and Child location:
parent = Math.floor((index - 1)/2)
child = [index * 2 + 1, index * 2 + 2]

2 key operations

Insert: 
- Put node at last position
- Bubble up

Extract-min:
- Remove root and replace with node at last position
- Check node against parent and swap

*/

function BinaryHeap () {
  this._heap = [];
  // min Heap
  this._compare = function (a, b) {
    return a < b;
  }
}

BinaryHeap.prototype.insert = function (val) {
  this._heap.push(val);
  this.bubbleUp(this._heap.length - 1)
}

BinaryHeap.prototype.bubbleUp = function (index) {
  
  var child = this._heap[index];
  var parent = this._heap[Math.floor((index - 1)/2)];

  while (index > 0 && this._compare(child, parent)) {
    this.swap(index, Math.floor((index - 1)/2));
    index = Math.floor((index - 1)/2);
    parent = this._heap[Math.floor((index - 1)/2)]
    child = this._heap[index];
  };
  
}

BinaryHeap.prototype.swap = function (childIndex, parentIndex) {
  var child = this._heap[childIndex];
  this._heap[childIndex] = this._heap[parentIndex];
  this._heap[parentIndex] = child;
}

var heap = new BinaryHeap ();
heap.insert(4);
heap.insert(1);
heap.insert(2);
heap.insert(1);
heap.insert(0);
console.log(heap._heap);

