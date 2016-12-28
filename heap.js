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

BinaryHeap.prototype.bubbleDown = function () {
  var indexParent = 0;
  var parent = this._heap[0];
  var child = [indexParent * 2 + 1, indexParent * 2 + 2]
  var indexMin = null;
  this._heap[child[0]] < this._heap[child[1]] ? indexMin = child[0] : indexMin = child[1];
  
  // get min child
  // while parent is > than min child
    // swap
    // update parent and child

  while (indexMin < this._heap.length - 1 && !this._compare(this._heap[0], this._heap[indexMin])) {
    this.swap(indexMin, indexParent);
    indexParent = indexMin;
    var child = [indexParent * 2 + 1, indexParent * 2 + 2];
    this._heap[child[0]] < this._heap[child[1]] ? indexMin = child[0] : indexMin = child[1];
  }
}

BinaryHeap.prototype.remove = function () {
  var min = this._heap[0];
  this._heap[0] = this._heap[this._heap.length - 1];
  this._heap.splice(this._heap.length - 1);
  this.bubbleDown();
  return min;
}

var heap = new BinaryHeap ();
heap.insert(4);
heap.insert(1);
heap.insert(2);
heap.insert(1);
heap.insert(0);
console.log(heap._heap);
console.log(heap.remove());
console.log(heap.remove());
console.log(heap._heap);

