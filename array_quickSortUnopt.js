/* subroutine
for every array, set arr[0] as pivot. 
every element that is less goes to left of pivot
vice versa
for each subarray, call quickSort again
*/

function subroutine (arr) {
  var pivot = arr[0];
  var left = [];
  var right = []
  if (arr.length < 2) {
    return arr;
  }

  for (var i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return subroutine(left).concat(pivot, subroutine(right));
} 

var arr = [55,23,26,2,18,78,23,8,2,3];

console.log(subroutine(arr));