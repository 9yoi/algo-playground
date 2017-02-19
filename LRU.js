/*Leetcode question 146
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
*/

/*WORK IN PROGRESS*/

// init cache
function lru (limit = 2) {
  this.size = 0;
  this.limit = limit;
  this.map = {};
  this.head = null;
  this.tail = null;
}

//LRU node
lru.prototype.node = function (val) {
  this.value = val;
  this.prev = null;
  this.next = null;
}

// put into cache
lru.prototype.put = function (key, val) {
  let node = new this.node(key, val);
  //add into map
  this.map[key] = node;
  //check if limit reached
  if(this.size + 1 > this.limit){
    //if yes => call remove fn with last used
    console.log(this.head, 'head before')
    this.remove();
  }
  this.addRecent(key, val);
}

//add to end of linked list  [1, 2] + 3
lru.prototype.addRecent = function (key, value) {
  let node = new this.node(key, value);
  // attach head
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    // link previous to new node
    this.tail.next = node;
    // link new node to previous
    node.prev = this.tail;
    // update tail
    let temp = this.tail;
    this.tail = node;
    this.tail.prev = temp;
  }
  // add to map
  this.map[key] = node;
  // inc size
  this.size ++;
}

// get from cache
lru.prototype.get = function (key) {

  // move item from anywhere it is to back of line => linked list structure
    //dismantle
    this.remove(key);
    //add
    this.addRecent(key);

  // checks if available in map
  if (this.map[key]) {
    return key;
  } else {
    return -1;
  }


}

lru.prototype.remove = function (key) {
  let node = null;
  let removedNode = null;

  // remove least recently used
  if(!key) {
    // update head to new value
    removedNode = this.head.value;
    this.head = this.head.next;
    console.log(this.head, 'cache after removing least recently used')
    this.head.prev = null;

  }

  // remove node at chosen point
  if (key) {
    node = this.map[key];
    // if there is prev, connect prev with the one after. vice versa.
    if (node.prev) {
      removedNode = node.prev.value;
      node.prev.next = node.next;
      node.next.prev = node.prev;
    //update head
    } else {
      removedNode = this.head.value;
      this.head = this.head.next;
      this.head.prev = null;
    }
    // update tail
    this.tail = node;
  }
  // remove from map
  delete this.map[key]
  // reduce size
  this.size --;
  return removedNode;
}

let cache = new lru (2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.head, 'cache after putting 1 and 2')
cache.get(1);       // returns 1
console.log(cache.head, 'cache after getting 1');
cache.put(3, 3);    // evicts key 2
console.log(cache.head, 'cache after putting 3');
// console.log(cache.get(2));       // returns -1 (not found)
// console.log(cache.put(4, 4));    // evicts key 1
// console.log(cache.get(1));       // returns -1 (not found)
// console.log(cache.get(3));       // returns 3
// console.log(cache.get(4));       // returns 4
