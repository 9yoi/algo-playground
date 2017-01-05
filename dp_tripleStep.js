/*   1 2 5  ==> 7
*/

/*Brute force*/
function bruteCoins (options, total) {
  var count = 0; // init global var

  function recurse (options, remainder) {
    options.forEach(function (num) {
      if ((remainder - num < 0)) {
        return; // base case: return
      }
      if ((remainder - num) === 0) {
        count ++; //base case: found
      } 
      if (remainder - num) {
        recurse (options, remainder - num) //continue recursion 
      }
    })
  }

  recurse(options, total);

  return count;
}

console.log(bruteCoins([1,2,3], 6));
/*With memoization*/