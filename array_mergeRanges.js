const mergeRanges = function (a) {
  a.sort((a,b) => a.startTime - b.startTime);

  let sorted = [];
  
  a.forEach(time => {
    let start = time.startTime;
    let end = time.endTime;
    let last = sorted[sorted.length - 1];

    if (sorted.length === 0) {
      sorted.push(time);
    } else {
      if (start > last.endTime) {
        sorted.push(time);
      } else {
        last.endTime = Math.max(end, last.endTime)
      }
    }
  })

  return sorted;

}


var unsorted = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10} ]

console.log(mergeRanges(unsorted));