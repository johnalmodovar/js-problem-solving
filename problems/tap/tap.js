function tap (arr, cb) {
  cb(arr);
  return arr;
}

console.log(tap([1, 2, 3], function (arr) { arr.pop(); }).reverse());
console.log(tap([1,2,3], function (arr) {
  arr[0] = 10;
  arr[1] = -10;
  return 'cool';
}));
console.log(tap([1,2,3], function (arr) {
  return ['a', 'b', 'c'];
}));


/*
given an array and a callback function
callback function should be invoked in the original function
  but does not return what it wants to return
    should return array of the original function after manipulation
      from both original function and callback function

what if array is empty? => return empty array

ex:
[1, 2, 3], function (arr) {
  items.pop();
}.reverse();               => [2, 1] => pops in callback function then reverse

[1, 2, 3], function (arr) {
  items[0] = 10;
  items[1] = -10;
  return 'cool';
}                          => [10, -10, 3] => manipulates arr & returns it only

[1, 2, 3], function (arr) {
  return 'no you';
}                          => [1,2,3] => callback doesn't return anything
*/