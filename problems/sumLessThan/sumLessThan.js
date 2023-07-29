
function sumLessThan(arr, max) {
  let sum = 0;

  for (let nums of arr) {
    if (nums < max) {
      sum += nums;
    }
  }
  return sum;
}

/*
given an array of nums and a max num
return all nums less than max
*/