function fill (arr, val) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = val;
  }
  return arr;
}

console.log(fill([1,2,3], 'y'));
console.log(fill([1,2,3], 2));
console.log(fill([], 2));

/*
given an array and a value
return array where the elements are replaced with value

what if array is empty? => return empty array

[1,2,3]
'y' => ['y', 'y', 'y']
2 => [2, 2, 2]
*/