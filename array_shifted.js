/*
1. Find a given number num in a sorted array arr:
arr = [2, 4, 5, 9, 12, 17] 

2. If the sorted array arr is shifted left by an unknown offset and you don't have a pre-shifted copy of it, how would you modify your method to find a number in the shifted array?
shiftArr = [9, 12, 17, 2, 4, 5]

Explain and code an efficient solution and analyze its runtime complexity
if num doesn't exist in the array, return -1
*/


// get split point
  // get midpoint
  // if midpoint < midpoint - 1 ==> split point found
// either binary search front portion or back depending on whether target > arr [0]
  // if target < arr[0] => binary search second half
  // else binary search first half
// binary search helper

// get split point
function findMidPoint (arr, num, start, end) {
  // get midpoint
  var midPoint = Math.floor((end + start)/2);
  if (start > end) {
    return -1;
  // if midpoint < midpoint - 1 ==> split point found
  } else if (arr[midPoint] < arr[midPoint - 1]) {
    return midPoint;
  } else if (arr[midPoint] > arr[0]) {
    return findMidPoint(arr, num, midPoint + 1, end);
  } else {
    return findMidPoint(arr, num, start, midPoint - 1);
  }
}

// either binary search front portion or back depending on whether target > arr [0]
function findNum (arr, num) {
  var midPoint = findMidPoint(arr, num, 0, arr.length - 1);
  // else binary search first half
  if (num > arr[0]) {
    return binarySearch(arr, num, 0, midPoint - 1 );
  } else {
  // if target < arr[0] => binary search second half
    return binarySearch(arr, num, midPoint, arr.length - 1);
  }
}

function binarySearch (arr, num, start, end) {
  if (start > end) {
    return - 1;
  } 
  var midPoint = Math.floor((start + end) / 2);
  if (num === arr[midPoint]) {
    return midPoint;
  }
  if (num > arr[midPoint]) {
    return binarySearch(arr, num, midPoint + 1, end)
  } else {
    return binarySearch(arr, num, start, midPoint - 1)
  }
}

var myArr = [9, 12, 17, 2, 4, 5];
console.log(findNum(myArr, 2));

