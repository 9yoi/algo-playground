/*   1 2 5  ==> 7
*/

/*Brute force V1*/
function bruteSteps (options, total) {
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

console.log(bruteSteps([1,2,3], 6));

/*Brute force V2*/
function bruteStepsB (total) {
  if (total < 0) {
    return 0;
  } else if (total === 0) {
    return 1;
  } else {    
    return bruteStepsB(total - 1) + bruteStepsB(total - 2) + bruteStepsB (total - 3);
  }
};

var memo = {};

function findSteps (total, memo) {
  if (total < 0) {
    return 0;
  } else if (total === 0) {
    return 1;
  } else if (memo[total] > -1) {
    return memo[total];
  } else {
    memo[total] = findSteps(total - 1, memo) + findSteps(total - 2, memo) + findSteps (total - 3, memo);
    return memo[total];
  }
}

console.log(findSteps(6, memo), 'approach C');
/*With memoization*/