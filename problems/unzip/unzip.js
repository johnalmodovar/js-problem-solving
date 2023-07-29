
function unzip(matrix) {
  let arr = [];

  // looping through the rows and grabbing the columns and pushing it into arr
  for (let i = 0; i < matrix[0].length; i++) {
    arr.push(matrix.map(x => x[i]));
  }
  return arr;
}

/*
given a matrix of nRows and nColumns
return new array where columns are in sub arrays

what if array is empty => return empty array

ex:
[1,2]
[3,4] => [[1,3], [2,4]]

[1,2,3]
[4,5,6] => [[1,4], [2,5], [3,6]]

[a]
[b] => [ [a,b,c] ]
[c]

psuedo:
create array output
walk through matrix
  use map to grab columns and put it inside array output
return array output
*/