function linearSearch (items, sought) {
  // edge case
  if (items.length === 0 || typeof sought === 'undefined') return -1;

  for (let i = 0; i < items.length; i++) {
    if (items[i] === sought) {
      return i;
    }
  }
  // if sought isn't found within array
  return -1;
}

console.log(linearSearch([1,2,3], 1));
console.log(linearSearch([1,2,3], 3));
console.log(linearSearch([1,2,3], 6));
console.log(linearSearch([], 2));
console.log(linearSearch([1,2,3]));

/*
given an array (items) and a value (sought for)
return index where that value exists in array
  if value is not in items, return -1

what if array is empty? => return -1
what is sought value is empty? return -1

ex:
[1,2,3], 1 => 0
[1,2,3], 3 => 2
[1,2,3], 6 => -1
[], 2 => -1
[1,2,3] => -1

psuedo:
if array is empty
  return -1
if sought is empty
  return -1
walk through array
  if current element is sought
    return its index
return -1 => index isn't found
*/