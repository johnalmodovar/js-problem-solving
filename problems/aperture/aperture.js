
function aperture (num, arr) {
  let output = [];

  // edge case
  if (typeof num === 'undefined' || num < 1 || isNaN(num)) return [];

  // edge case 2
  if (arr.length === 0 || num > arr.length) return [];

  for (let i = 0; i < arr.length; i++) {
    // if num is equal to array length
    if (num === arr.length) {
      output.push(arr.slice());
      break;
    // if space between current index and array length smaller than num
    } else if (arr.length - i >= num) {
      output.push(arr.slice(i, i + num));
    }
  }
  return output;
}

console.log(aperture(0, [1,2,3,4]));
console.log(aperture(1, [1,2,3,4]));
console.log(aperture(2, [1,2,3,4]));
console.log(aperture(3, [1,2,3,4]));
console.log(aperture(4, [1,2,3,4]));
console.log(aperture(5, [1,2,3,4]));
console.log(aperture([1,2,3,4]));
console.log(aperture(2, []));

/*
given a num and an array
return a array with subarrays the size of num with consecutive elements

if num is bigger than array length => return empty array
if num is smaller than 1? => return empty array
if array is empty? => return empty array
if num is empty? => return empty array

ex:
0, [1,2,3,4] => []
1, [1,2,3,4] => [[1], [2], [3], [4]]
2, [1,2,3,4] => [[1,2], [2,3], [3,4]]
3, [1,2,3,4] => [[1,2,3], [2,3,4]]
4, [1,2,3,4] => [[1,2,3,4]]
5, [1,2,3,4] => []
[1,2,3,4] => []
0, [] => []

psuedo:
create output var
walk through the list
  if the space from index to end is smaller than num
    push the current index to next index until it reaches num to output as arr
  else
    break the loop
return output
*/
