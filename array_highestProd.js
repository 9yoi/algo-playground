// find highest product of 3 integers in an array
// [1,2,3,4,5]
//[4, 5, 3]

function findHighest (arr) {
  if (arr.length < 3) {
    throw new Error ('less than 3 items');
  }
  var highest2 = arr[0] * arr[1];
  var highest = Math.max(arr[0], arr[1]);
  var lowest2 = arr[0] * arr[1];
  var lowest = Math.min(arr[0], arr[1]);
  var highestProd = arr[0]*arr[1]*arr[2];

  for (var i = 2; i < arr.length; i++) {
    //update highestProd?
    highestProd = Math.max(highest2 * arr[i], lowest2 * arr[i], highestProd);
    //update set?
    highest2 = Math.max(highest2, highest * arr[i], lowest * arr[i])
    lowest2 = Math.max(lowest2, lowest * arr[i], highest * arr[i]);
    //update high/low?
    highest = Math.max(arr[i], highest)
    lowest = Math.min(arr[i], lowest)
  }
    
  return highestProd;
}

console.log(findHighest([0,1,3,5,2,4]))
