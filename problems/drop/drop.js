function drop (items, numDrop) {
  let newArr = [...items];

  // // if array is empty or numDrop is greater than array length
  if (items.length === 0 || numDrop > items.length) return [];

  // if numDrop is empty
  if (typeof numDrop === 'undefined') {
    newArr.shift();
    return newArr;
  }

  // removing elements at the beginning of array numDrop amount of times
  for (let i = 0; i < numDrop; i++) {
    newArr.shift();
  }
  return newArr;
}

console.log(drop([1,2,3,4,5]));
console.log(drop([1,2,3,4,5], 2));
console.log(drop([1,2,3,4,5], 10));
console.log(drop([1,2,3], 0));
console.log(drop([], 5));

/*
given an array (items) and optional num (numDrop)
return array where numDrop elements removed from the start of original array
  if numDrop is greater than array length
    return empty array
  if numDrop is not provided
    return array without first element

what if items is empty? => return empty array

ex:
[1,2,3,4,5] => [2,3,4,5]
[1,2,3,4,5], 2 => [3,4,5]
[1,2,3,4,5], 10 => []
[1,2,3,4,5], 0 => [1,2,3,4,5]
[], 5 => []

psuedo:
if items is empty
  return empty array
if numDrop is not inputted
  return array without its first element
start loop => loop stops once it hits numDrop
  remove first item of array
return array
*/
