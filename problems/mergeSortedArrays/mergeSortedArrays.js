
function mergeSortedArrays(arr1, arr2) {
  return arr1.concat(arr2).sort( (a,b) => a - b);
}

/*
given two arrays of nums
return array where both arrays are merged but in sorted order
*/