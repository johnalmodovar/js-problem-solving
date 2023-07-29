function twoArrayDifference (arr1, arr2) {
  // let notInArr2 = [];

  // for (let nums of arr1) {
  //   if (!arr2.includes(nums)) {
  //     notInArr2.push(nums);
  //   }
  // }
  // return notInArr2;

  return arr1.filter( x => !arr2.includes(x));
}

console.log(twoArrayDifference([1,2,1], [2]));
console.log(twoArrayDifference([1,2,3,4], [1,3,5,6]));
console.log(twoArrayDifference([1,2,3,4], [5,6,7,8]));
console.log(twoArrayDifference([], []));


/*
given 2 arrays (arr1, arr2)
return array of all nums in arr1 that ARE NOT in arr2
  order should be preserved

what if one of the arrays is empty? => return empty array

ex:
[1,2,1], [2] => [1, 1];
[1,2,3,4], [1,3,5,6] => [2,4]
[1,2,3,4], [5,6,7,8] => [1,2,3,4]
[], [] => []

psuedo:
create var to store values not in arr2
walk through arr1
  if current number is not in arr2
    put it in var
return var
*/