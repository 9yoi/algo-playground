/*
0.5, 0.5

1/6 1/6 1/6 1/6 1/6 1/6

0.75 0.25

0.1 0.3 0.2 0.4

for each die, there is a list of probs "p"
where p_i is the prob we land on index i

input: p , array p
output: callable object that will generate index i with prob p_i
*/

function roll(arr) {
  // generate incremental ranges based on prob units
  const ranges = generateRanges(arr);
  // look up random against range
  let num = Math.random();
  
  for (var i = 1; i < ranges.length; i++) {
    if (num < ranges[i]) {
      return i - 1;
    }
  }
  return ranges.length - 1;
}

function generateRanges (arr) {
  var myArr = [];
  var tracker = 0;
  
  arr.forEach(function(prob) {
    myArr.push(tracker);
    tracker += prob;
  });
  
  return myArr;
}

var test0 = [0.1, 0.3, 0.2, 0.4];

function rollDie (arr, n, fn) {
  var results = [0, 0, 0, 0];
  while (n > 0) {
    results[fn(arr)]++;
    n--;
  }
  return results;
}

console.log(rollDie(test0, 10000, roll));