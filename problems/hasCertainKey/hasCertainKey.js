
function hasCertainKey(objs, keyName) {
  return objs.every( obj => obj[keyName] );
}

/*
given an array of objects and a key name
return true if ALL objects have the key name
*/