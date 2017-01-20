/* find product of all elements except yourself
** [1,2,3,4,5]
** ==> product before you and product after you
** ==> [1, results[i-1]*a[i-1]]
*/

function findProduct (arr) {
  var results = [];
  // find product of everything before you
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      results[i] = 1;
    } else {
      results[i] = results[i-1] * arr[i-1];
    }
  }
  // find product of everything after you
  // ==> [120, 60, 20, 5, 1]
  var temp = 0;
  for (var i = arr.length - 1; i>= 0; i--) {
    console.log(i);
    if (i === arr.length - 1) {
      temp = 1;
    } else {
      temp = temp * arr[i+1];
    }
    // change element at that index
    results[i] = results[i] * temp;
  }
  return results;
}

console.log(findProduct([1,2,3,4,5]));


