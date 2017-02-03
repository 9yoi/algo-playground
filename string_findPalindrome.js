/*
Write an efficient function that 
checks whether any permutation of an input string is a palindrome.
*/

function palindrome(s) {
  var map = {};
  for(var i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      delete map[s[i]];
    } else {
      map[s[i]] = true;
    }
  }
  if (Object.keys(map).length > 1) {
    return false;
  }
  return true;
}

console.log(palindrome('civil'));
console.log(palindrome('civic'));
