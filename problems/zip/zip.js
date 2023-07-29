
function zip(...arr) {
  let groupedEle = [];
  let collection = [];
  let longestArr = [];

  // grabbing all arrays in parameter and turning them into a nested array
  for(let i = 0; i < arr.length; i++) {
    collection.push(arr[i]);
    // grabbing longest array in parameter
    if (arr[i].length > longestArr.length) {
      longestArr = arr[i];
    }
  }

  // grabbing all elements by indices
  for (let i = 0; i < longestArr.length; i++) {
    groupedEle.push(collection.map(x => x[i]));
  }
  return groupedEle;
}

/*
given a random amount of arrays with different lengths
create nested array where sub arrays are grouped by indices

what if arrays are different lengths? => element will be undefined
if array is empty => return empty array

ex:
[1,2], [3,4] => [[1,3], [2,4]]
['a','b'], [1,2,3] => [['a',1], ['b',2], [undefined, 3]]
[1,2,3,4] => [[1], [2], [3], [4]]

psuedo:
create array output
turn all arr parameters into a nested array
find the longest array in parameters
walk through longest array
  map elements by indices through nested array
return array output
*/