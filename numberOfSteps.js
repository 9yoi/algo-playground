// start with graphical model
// define skeleton of recursion in pseudocode
// what is the smaller problem you are trying to solve?
// what parameters do you need to pass along each time?

// outer function
function countSteps (stairs) {
	debugger;
	// define variables
	var count = 0;
	var steps = [1,2,3];
	var results = [];
	// inner function (recursion)
	function stepsPossible (stairsLeft, subresults) {
		// base case
		if (stairsLeft === 0) {
			count++;
			results.push(subresults);
			return;
		}
		if (stairsLeft <= 0) {
			return;
		}
		// call recursion again with smaller step number. 
		// each time you recurse, you have to pass it every option of 1, 2 or 3
		steps.forEach(function(step) {
			// create a new copy of subresults using concat. otherwise you will be mutating the main copy
			subresults = subresults.concat(step);
			stairsLeft = stairsLeft - step; 
			stepsPossible(stairsLeft, subresults);
		});
	}

// return global variables
  stepsPossible(stairs,[]);
  console.log(count, results);
  return;
}


console.log(countSteps(6));