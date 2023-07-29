
function hasNoDuplicates(arr) {
  return !arr.some( (x, i) => arr.indexOf(x) !== i);
}

/*
given an array of nums
return true if there are no duplicates
*/
