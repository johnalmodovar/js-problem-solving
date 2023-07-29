function createMatrix (numCols, numRows) {
  let output = [];

  for (let i = 0; i < numRows; i++) {
    output.push(Array(numCols).fill(0));
  }
  return output;
}

console.log(createMatrix(0,0));
console.log(createMatrix(1,2));
console.log(createMatrix(2,1));
console.log(createMatrix(2,3));
console.log(createMatrix(0));

/*
given two whole numbers (numCol, numRow)
create two dimensional array with that many given rows and columns
  all values inside should be 0
  columns === number of arrays
  rows === number of zeros in the array

what if values are empty? => return empty array => undefined

(0,0) => [] => 0 columns, 0 rows
(1, 2) =>
[
  [0]
  [0]   => 1 column, 2 rows
]
(2, 1) =>
[
  [0, 0] => 2 columns, 1 row
]
(2, 3) =>
[
  [0, 0, 0],
  [0, 0, 0]  => 2 columns, 3 rows
]

psuedo:
create output var
go through a loop num amount of columns
  push array with num amount of rows in output
return output
*/