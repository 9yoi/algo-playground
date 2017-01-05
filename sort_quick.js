function quickSort (arr, low, high) {
  if (low < high) {//!impt
    var index = partition (arr, low, high);
    quickSort(arr, low, index - 1);
    quickSort(arr, index + 1, high)
  }
  return arr;
}

function partition (arr, low, high) {
  var i = low;
  var j = high;
  var pivot = arr[low];

  while (i < j) {
    while (arr[i] <= pivot) {
      i++;
    }
    while (arr[j] >= pivot) {
      j--;
    }

    if (i < j) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  arr[low] = arr[j];
  arr[j] = pivot;
  return j;
}

var arr = [55,23,26,2,18,78]

console.log(quickSort(arr, 0, arr.length - 1));