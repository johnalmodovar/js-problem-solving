function rangeInArray(arr, start, end) {
  let sum = 0;

  // edge cases
  if (start >= arr.length || start < 0 || arr.length === 0) return 0;

  // if start isn't given
  if (typeof start === 'undefined') {
    sum = arr.reduce( (a, b) => a + b, 0);
    return sum;
  }

  // looping from starting index in argument
  for (let i = start; i < arr.length; i++) {
    if (typeof end === 'undefined') {
      sum += arr[i];
    } else {
      if (i <= end) {
        sum += arr[i];
        // checking to see if current index is the last element in the array
        if (arr[i] === arr[arr.length - 1]) {
          break;
        }
      }
    }
  }
  return sum;
}



console.log(rangeInArray([1,2,3,4,5], 2, 4));
console.log(rangeInArray([1, 2, 3, 4], 1));
console.log(rangeInArray([1, 2, 3, 4]));

/*
given an array, a start index, end index
return sum of all numbers between (and including) the start
and end index in parameter

what if empty array? => default to 0
what if start is empty? => default to 0
what if starting index is not in array? => default to 0
what if starting index is less than 0? => default to 0
what if ending index is not in array? => stop at last index

ex:
[1,2,3,4,5], 2, 4 => 12
[1,2,3,4,5], 3, 5 => 9 => stops at 5
[1,2,3,4,5], 5, 8 => 0 => defaults to 0

psuedo:
create sum var
check if starting index is in the array
  if not, return 0
walk through array
  if the current index is less than or equal to the end index
    add current index to sum value
    if current index is the last index in array
      add current index to sum value
      break the loop
return sum var
*/