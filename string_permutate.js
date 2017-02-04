var arr = [];

function permutate (subs, curr) {
  if (subs.length < 1) {
    arr.push(curr);
    return;
  } else {
    for (var i = 0; i < subs.length; i++) {
      var char = subs[i];
      permutate(subs.slice(0, i) + subs.slice(i + 1), curr + char)
    };
  }
  return arr;
}

console.log(permutate('cats', ''))