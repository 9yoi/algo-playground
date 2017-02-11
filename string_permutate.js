// Approach 1: remove 1 char at a time. add all remaining
var arr = [];
function permutate (subs, curr) {
  if (subs.length < 1) {
    arr.push(curr);
    return;
  } else {
    for (var i = 0; i < subs.length; i++) {
      var char = subs[i];
      permutate(subs.slice(0, i) + subs.slice(i + 1), curr + char)
    };
  }
  return arr;
}

//console.log(permutate('cats', ''))

//Approach 2: slot character in to all possible positions.
var arr2 = [];
function permutate2 (string, curr) {
  if (string.length < 1) {
    arr2.push(curr);
    return;
  }
  let char = string[0];
  let remaining = string.slice(1);
  for (var i = 0; i <= curr.length; i++) {
    let newSubStr = curr.slice(0, i) + char + curr.slice(i)
    permutate2(remaining, newSubStr);
  }
  return arr2;
}

console.log(permutate2('cats', ''));
