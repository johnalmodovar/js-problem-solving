
function swap(arr, idx1, idx2) {
  let idxHolder = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = idxHolder;

  return arr;
}

/*
given an array and two indices
mutate the array where the two indices swap

assume both indices will both be present in the array

[1,2,3,4], 0, 2 => [3,2,1,4]

psuedo:
create a variable holder for one of the indices
swap them
*/