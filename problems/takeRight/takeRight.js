function takeRight (arr, n) {
  // reversing array so we can loop from beginning of arr
  arr = arr.reverse();
  let output = [];

  // edge case
  if (arr.length === 0 || n < 0) return [];

  // n is not inputted
  if (typeof n === 'undefined') {
    return [arr[0]];
    // n is bigger than array length
  } else if (n > arr.length) {
    return arr.reverse();
  } else {
    for (let i = 0; i < n; i++) {
      output.unshift(arr[i]);
    }
  }
  return output;
}

console.log(takeRight([1,2,3]));
console.log(takeRight([1,2,3,4,5,6,7,8,9,10], 8));
console.log(takeRight([1,2,3], 5));
console.log(takeRight([], 2));
console.log(takeRight([1,2,3], -2));

/*
given an array and an optional number (n)
return copy of array starting from end of array up to num value
  if n is not passed => return array with last element only
  if n is greater than array length => return full array

what if array is empty? => return empty array
what if n is negative? => return empty array

ex:
[1,2,3] => [3]
[1,2,3,4,5,6,7,8,9,10], 8 => [2, 3]
[1,2,3], 5 => [1,2,3]
[], 2 => []
[1,2,3], -2 => []

psuedo:
reverse array so we can loop normally instead of backwards
if array is empty and n is negative
  return empty array
if n is not inputted
  return first element of array => since it's reversed
if n is greater than array length
  return entire array as is (not reversed)
else
  start loop from beginning of array up until n
    grab all elements up to n and put in output var
return output var
*/