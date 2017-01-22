/* [1,2,3,4]

Remaining: 4. 
- 1-1, call fn (3, 1)
- 2-1, fn (2, 1)
- 3-1, fn (1, 1)

*/

function makeChange (total, index, coins) {
  let ways = 0;
  let map = {};
  //base case
  if (total < 0) {
    return 0;
  }
  if (total === 0) {
    return 1;
  }
  if (index === coins.length) {
    return 0;
  }
  if (map[String(total, index)]) {
    return map[String(total, index)];
  }

  let coin = coins[index];
  // for each, count up to remaining amount and recurse
  for (let i = 0; i * coin <= total; i++) {
    let sum = coin * i;
    let amountLeft = total - sum;
    ways += makeChange(amountLeft, index + 1, coins);
  }

  map[String(total,index)] = ways;
  return ways;
}

console.log(makeChange(100,0,[1,3,5]));
