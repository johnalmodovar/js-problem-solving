
function union(...arr) {
  let collection = [...arr].join(',');

  return [...new Set(collection)].filter( x => !isNaN(x)).map( x => Number(x));
}

/*
given x amount of arrays
return new array with all unique values in all arrays

if array is empty? => return empty array

ex:
[2], [1,2] => [2,1]
[2], [1,2], [3] => [2,1,3]

psuedo:
make an array filled with all of the arrays
grab all the unique numbers from the array and return it
*/
