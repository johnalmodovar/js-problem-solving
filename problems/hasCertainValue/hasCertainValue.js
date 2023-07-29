
function hasCertainValue(objs, keyName, value) {
  return objs.every( obj => obj[keyName] === value );
}

/*
given an array of objects, a key, and a value
return true if every object in objs contain that value in the key name
*/