// RETURN ARRAY OF SORTED SCORES IN O(N) time given highest possible score

function sortScores (a, highScore) {
  // Create an array of Size K
  let counts = Array(highScore + 1).fill(0);
  let output = [];
  // Fill the array with score as index
  a.forEach(function(score){
    counts[score] ++;
  })
  // Iterate through array and push into output
  counts.forEach((count, index) => {
    if (count) {
      while(count > 0) {
        output.push(index);
        count --;
      }
    }
  });
  return output;
}
let unsorted = [3,7,9,1,2,9,1,10]



console.log(sortScores(unsorted, 10));