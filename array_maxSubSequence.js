function maxSeq (arr) {
  var tracker = [];
  arr.forEach(function(num, index){
    tracker[index] = tracker[index - 2] + num || num;
  });
  return Math.max(tracker[tracker.length - 1], tracker[tracker.length - 2]);
}

console.log(maxSeq([1,-1,6,-4,2,2]));

  // [1,6]