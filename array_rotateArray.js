/*

Given an array of integers, rotate array by n elements
1) Helper function to reverse array in place
2) Reverse whole function
2b) Normalize n if n is negative
3) Reverse parts before n
4) Reverse parts after n
*/
var myArr = [1,2,3,4,5]

function reverse (arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start ++;
    end --;
  }
}


function reverseArray (arr, n) {
  n = n % arr.length;

  if (n < 0 ) {
    n = n + arr.length;
  }

  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, n - 1);
  reverse(arr, n, arr.length - 1)
  return arr;

}

console.log(reverseArray(myArr, 2));

