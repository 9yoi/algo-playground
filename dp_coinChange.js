/*
Coin Sums : 1, 5, 25 ==> 100
*/

function makeChange (total, options, index) {
  if (index > options.length - 1 ) {
    return 1;
  } 
  var denomination = options[index];
  var ways = 0;
  for (var i = 0; i * denomination <= total; i++) {
    var remaining = total - i * denomination;
    ways = ways + makeChange(remaining, options, index + 1);
  }
  return ways;
}

console.log(makeChange(100, [25,5,1], 0))