function nth (arr, idx) {
  // edge case
  if (arr.length === 0) return [];

  // grabbing index normally if positive
  if (idx >= 0) {
    return arr[idx];
  } else {
    // adding index to array length because idx is negative
    return arr[arr.length+(idx)];
  }
}

console.log(nth([1,2,3,4], 2));
console.log(nth(["a", "b", "c", "d"], -2));
console.log(nth([1,2,3,4], 0));
console.log(nth(["a", "b", "c", "d"], -4));
console.log(nth([], 0));

/*
given an array and an index
return the element at that index
  if idx is negative, nth element from end is returned instead

assume that idx will always be between negative value of arr length
and array length minus 1

if array is empty => return empty array

ex:
[1,2,3,4], 2 => 3
[1,2,3,4], -2 => 3
[1,2,3,4], 0 => 1
[1,2,3,4], -4 => 1

psuedo:
if array is empty
  return empty array
if index is positive
  do normal way
if index is negative
  grab starting from end => array.length-1
*/