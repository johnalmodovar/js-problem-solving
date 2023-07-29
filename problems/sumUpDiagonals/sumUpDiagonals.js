function sumUpDiagonals (matrix) {
  let sum = 0;

  // loop through dimensional array
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i] + matrix[i][matrix.length - 1 - i];
  }
  return sum;
}

let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.log(sumUpDiagonals(matrix));


/*
given a nxn dimensional array
return the sum of both main diagonals of the array
  upper left to lower right, upper right to lower left

what if array is empty? => return 0
since nxn => assume they'll always be square

ex:
[1,2]  => 5 + 5 = 10
[3,4]

[1, 2, 3]
[4, 5, 6] => (1+5+9) + (3+5+7) = 30
[7, 8, 9]

[1,2,3,4]
[5,6,7,8]
[9,1,2,3] => (1+6+2+7) + (4+7+1+4) =
[4,5,6,7]

[1,2,3,4,5]
[6,7,8,9,1]
[2,3,4,5,6] => (1+7+4+1+7) + (5+9+4+8+3) =
[7,8,9,1,2]
[3,4,5,6,7]

psuedo:
create sum var
walk through dimensional array
  start from first array
    grab first and last numbers => add to sum var
  go to second array
    grab second and second to last number => add to sum var

*/