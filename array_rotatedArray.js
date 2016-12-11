/* linear Search not acceptable, think Binary Search 
==> Divide and conquer.
==> Check for the half that is sorted, and check if value is in range. If so binary search
==> Complexity: Logarithmic O(log(n))
*/

// ESTABLISH POINTERS: start, end, mid

// create subroutine with params (arr, start, end, target)
  // BASE CASE: if mid = target, return

  // 1) CHECK IF FIRST HALF IS SORTED AND TARGET IN RANGE. IF SO, BINARY SEARCH FIRST HALF
    // If start pointer < mid ==> sorted
    // AND If target is between start and mid ==> in range
    // => shift end to mid - 1
  // 2) CHECK IF SECOND HALF IS SORTED AND TARGET IN RANGE. IF SO, BINARY SEARCH SECOND HALF
    // If mid pointer < end ==> sorted
    // AND if target is between mid and end ==> in range
    // ==> shift start to mid + 1
  // IF BOTH OF THE ABOVE FAIL, YOUR TARGET IS IN THE UNSORTED PART. FIND THE UNSORTED PART
  // 3) If start pointer > mid ==> SEARCH FIRST HALF
  // 4) If mid > end pointer ==> SEARCH SECOND HALF
  // 5) If all fail, return - 1