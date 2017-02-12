// shuffle in a uniform manner in place

function shuffle (a) {
  for (var i = 0; i < a.length ; i++) {
    let indexSelected = randIndex(0, a.length - 1);
    swap(a, i, indexSelected);
  }
  return a;
}

function swap (arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function randIndex (start, end) {
  return start + Math.floor(Math.random() * (end - start + 1)) 
}

console.log(shuffle([1,2,3,4,5]))