function take (arr, count) {
  // if count is empty
  if (typeof count === 'undefined') return [arr[0]];

  // if count is bigger than array length
  if (count > arr.length) return arr;

  // if count is zero or if array is empty
  if (count === 0 || arr.length === 0) return [];

  // if edge cases are passed
  return arr.slice(0, count);
}

console.log(take([1,2,3,4,5], 3));
console.log(take([1,2,3,4,5]));
console.log(take([1,2,3,4,5], 6));
console.log(take([1,2,3,4,5], 0));

/*
given an array and an optional count
return copy of array with elements up to the count

if array is empty? => return empty array
if there's no count? => return array with first element
If count is greater than array length? => return entire array
if count is 0? => return empty array

ex:
[1,2,3,4,5], 3 => [1,2,3]
[1,2,3,4,5] => [1]
[1,2,3,4,5], 6 => [1,2,3,4,5]
[1,2,3,4,5], 0 => []

psuedo:
if no count is inputted
  return first element of the array param
if count is bigger than array length
  return array param
if count is zero
  return empty array
if all edge cases pass
  return slice of array starting from beginning and ending in count amount
*/