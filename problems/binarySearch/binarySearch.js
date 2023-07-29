
function binarySearch(arr, soughtValue) {
  arr = arr.sort( (a, b) => a - b);
  let min = 0;
  let max = arr.length - 1;
  let guess = 0;

  while (max >= min) {
    guess = Math.floor((min + max)/2);
    if (arr[guess] === soughtValue) {
      return guess;
    } else if (arr[guess] < soughtValue) {
      min = guess + 1;
    } else if (arr[guess] > soughtValue) {
      max = guess - 1;
    }
  }
  return -1;
}

/*
given an array and a sought value
return the index of the sought value

if sought value isnt in array => return -1
if array is empty => return -1

ex:
[1,2,3,4], 1 => 0
[1,2,3,4], 2 => 1
[1,2,3,4], 5 => -1
[] => -1

psuedo:
sort array to ascending order
set min to beginning of array
set max to end of array
create guess var
start loop => while max is greater than min
compute guess with averages of min and max, round down
  if guess is the target value
    return guess
  if guess is lower than target value
    increase guess by 1 and set it to min
  if guess is higher than target value
    decrease guess by 1 and set it to max
if loop doesnt mind sought value
  return -1
*/