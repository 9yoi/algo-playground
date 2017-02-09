// Reverse a string
  // Method 1: Split into array and swap
  // Method 2: Split, reverse, join
  // Method 3: Create new string, loop backwards and add into new string
function reverse(s) {
  n = s.split('')
  for (var i = 0; i < (s.length - 1)/2; i++) {
    let temp = n[i];
    n[i] = n[s.length - 1 - i];
    n[s.length - 1 - i] = temp;
  }
  return n.join('');
}

// Nth fibonacci: Top down recursive. Until bottom number returns, keep making the subset smaller
// Pros: ?
// Cons: O(n) memory space, O(n) time
function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// with memoization

var Fibber = function () {
  this.memo = {}
}

Fibber.prototype.fibonacci = function (n) {
  if (n === 0 || n === 1) {
    return n;
  } else if (this.memo[n]){
    console.log('grabbing')
    return this.memo[n];
  } else {
    results = this.fibonacci (n - 1) + this.fibonacci (n - 2);
    this.memo[n] = results;
    return results;
  }
}

// Bottom up
// Pros: O(1) memory space, O(n) time
// Cons: ?
// 1 1 2 3 5

function fibonacciB (n) {
  let prev = 0;
  let prevPrev = 1
  for (var i = 1; i <= n; i++) {
    let temp = prev;
    prev = prev + prevPrev; 
    prevPrev = temp;
  }
  return prev;
}

/* 1 2 3 4 ..
  2 4 6 8
*/
// Print multiplication table
function printTable (n) {
  for (var i = 1; i <= n; i++) {
    let string = '';  
    for (var j = 1; j <= n; j++ ) {
      string += ' ' + i * j;
    }
    console.log(string.trim());
  }
}

// Print odd numbers from 1 to 99
function printOdd (n) {
  for (var i = 1; i <= n; i += 2) {
    console.log(i);
  }
}

// Largest int value in an array
function findLargest (a) {
  let max = 0;
  a.forEach((num) => {
    if (num > max) {
      max = num;
    }
  })
  return max;
}

console.log(reverse('cat'));
console.log(fibonacci(8));
console.log(fibonacciB(8));
var fibber = new Fibber();
console.log(fibber.fibonacci(8));
console.log(printTable(12))
console.log(printOdd(5))
console.log(findLargest([1,3,7,2]))