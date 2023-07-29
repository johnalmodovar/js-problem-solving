function flatten (arr) {
  return arr.flat();
}

console.log(flatten([ 1, 2, [3, 4] ]));
console.log(flatten([ [1], [2] ]));
console.log(flatten([ 1, [2, [3 , [4]], 5] ]));
/*
given an array
remove the first inner layer on nested array inside array

what if array is empty? return empty array
what if there's multiple nested arrays inside? => remove first inner layer
what if there's empty nested array inside nested array => return empty array

ex:
[ 1, 2, [3, 4] ] => [ 1, 2, 3, 4 ]
[ [ 1 ],[ 2 ] ] => [ 1, 2 ]
[ 1, [ 2, [ 3, [ 4 ] ] ,5 ] ] => [ 1, 2, [ 3, [ 4 ] ] ,5 ]
[] => []
*/