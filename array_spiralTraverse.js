var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function traverse (arr, i, j) { 
// base case: outofbounds
  if (i < 0|| i > arr[0].length - 1 || !arr[i][j]) {
    return;
  }
  if (j < 0|| j > arr.length - 1 ) {
    return;
  }
  console.log(arr[i][j]);
  arr[i][j] = null;

// move right ==> j++
  traverse (arr, i, j + 1);
// move down ==> i++
  traverse (arr, i + 1, j);
// move left ==> j--
  traverse (arr, i, j - 1);
// move up ==> i--
  traverse (arr, i - 1, j);
}

traverse(arr, 0, 0)