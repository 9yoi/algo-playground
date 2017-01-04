/* with new array created */
function mergeSort (arr) {
  if (arr.length < 2) {
    return arr;
  }
  var mid = Math.floor(arr.length/ 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid)
  return merge (mergeSort(left), mergeSort(right))
}


function merge (left, right) {
  console.log('merging left and right', left, right);
  var temp = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      temp.push(left.shift())
    } else {
      temp.push(right.shift());
    }
  }
  while (left.length) {
    temp.push(left.shift());
  }
  while (right.length) {
    temp.push(right.shift());
  }
  return temp;
}

var myArr = [34, 203, 3, 746, 200, 984, 198, 764, 9];
console.log(mergeSort(myArr));


/* in place */