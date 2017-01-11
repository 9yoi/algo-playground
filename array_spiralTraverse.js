/*
recursive approach failed to traverse spirally, 
==> will always attemp to move right if possible.
!! use iterative approach
*/

var arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

//recursive approach
function traverseR (arr, i, j) { 
// base case: outofbounds
  if (i < 0|| i > arr.length - 1 || arr[i][j] == null) {
    return;
  }
  if (j < 0|| j > arr[0].length - 1 ) {
    return;
  }
  if (arr[i][j] != null) {
    console.log(arr[i][j]);
    arr[i][j] = null;
  }


// move right ==> j++
  traverseR (arr, i, j + 1);
// move down ==> i++
  traverseR (arr, i + 1, j);
// move left ==> j--
  traverseR (arr, i, j - 1);
// move up ==> i--
  traverseR (arr, i - 1, j);
}

traverseR(arr, 0, 0)

var arrB = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
//iterative approach
function traverseI (arr, i, j) { 

  //trackers for bounds
  var startRow = 0;
  var endRow = arr[0].length - 1;
  var startCol = 0;
  var endCol = arr.length - 1;

  while ( j <= endRow && i <= endCol) {

    // move right
    while (j <= endCol) {
      console.log(arr[i][j]);
      j++;
    }
    j--;
    i++;
    startRow ++;

    // move down
    while (i <= endRow) {
      console.log(arr[i][j]);
      i++;
    }
    i--;
    j--;
    endCol --;

    // move left
    while (j >= startCol ) {
      console.log(arr[i][j]);
      j--;
    }
    j++;
    i--;
    endRow --;

    // move up
    while (i >= startRow ) {
      console.log(arr[i][j]);
      i--;
    }
    i++;
    j++;
    startCol ++;
  }
}

//traverseI(arrB, 0, 0)



