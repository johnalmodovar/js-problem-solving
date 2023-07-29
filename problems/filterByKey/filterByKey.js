
function filterByKey(arr, keyName) {
  return arr.filter( x => keyName in x);
}

/*
given an array of objects and key
return new array with all objects that contain the key
*/