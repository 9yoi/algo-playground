//You have a function rand7() that generates a random integer from 1 to 7. 
// Use it to write a function rand5() that generates a random integer from 1 to 5

function rand7 () {
  const part = 1/7;
  const map = [1/7, 2/7, 3/7, 4/7, 5/7, 6/7, 1];
  let rand = Math.random();
  for (var i = 0; i < map.length; i++) {
    if (rand < map[i]) {
      return i + 1;
    }
  }
}

function rand5 () {
  const map = [1/5, 2/5, 3/5, 4/5, 5/5]
  let initial = rand7();
  if (initial <= 5) {
    return initial;
  } else {
      for (var i = 0; i < map.length; i++) {
        if (Math.random()< map[i]) {
          return i + 1;
        }
      }
  }
}

console.log(rand5())