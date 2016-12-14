let partition = function(arr, low, high) {
  let pivot_value = arr[low];
  console.log(pivot_value);
  let i = low;
  let j = high;

  while (i < j) {

    while (arr[i] <= pivot_value && i <= high) {
      i++;
    }

    while (arr[j] > pivot_value) {
      j--;
    }

    if (i < j) {
      // swap arr[i], arr[j]
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      console.log('i', i, arr[i], 'j',  j, arr[j], '+', arr);
    } else {
      break;
    }

  }

  arr[low] = arr[j];
  arr[j] = pivot_value;

  // return the pivot index
  return j;
};

let quick_sort_rec = function(a, l, h) {
  if (h > l) {
    let pivot_index = partition(a, l, h);
    quick_sort_rec(a, l, pivot_index - 1);
    quick_sort_rec(a, pivot_index + 1, h);
  }
};

let quick_sort = function(a) {
  quick_sort_rec(a, 0, a.length - 1);
};

quick_sort([55,23,26,2,18,78,23,8,2,3]);