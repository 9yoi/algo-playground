/*
SUBROUTINE
- set pivot
- initialize pointers (low, high)
- while low pointer < high
  - low pointer: check if elem < pivot. if so increment to next
  - high pointer: check if elem > pivot. if so decrement to next
  - swap items at low and high pointer
- move pivot to location of high pointer
- return index

Call subroutine on left and right of pivot

*/

function partition (arr, low, high) {
  let pivot = arr[low];
  let i =  low;
  let j = high;

  while (i < j) {

    while (arr[i] <= pivot) {
      i ++;
    }

    while (arr[j] > pivot) {
      j --;
    }

    //!
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    } else {
      break;
    }

  }

  arr[low] = arr[j];
  arr[j] = pivot;

  return j;
}

function quickSort (arr, low, high) {
  if (low < high) {
     var pivotIndex = partition(arr, low, high);
     quickSort(arr, low, pivotIndex - 1);
     quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

var arr = [55,23,26,2,18,78,23,8,2,3]

console.log(quickSort(arr, 0, arr.length - 1));