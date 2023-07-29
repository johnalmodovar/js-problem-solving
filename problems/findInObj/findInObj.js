
function findInObj(objs, key, value) {
  for (let obj of objs) {
    if (key in obj) {
      if (obj[key] === value) {
        return obj;
      }
    }
  }
  return undefined;
}

/*
given an array of objects, a key, and a value
return first found value in the array

if no matches => return undefined

psuedo:
walk through array of objects
  if key is in object
    check if that key has the value given
      return the current object if it has the value
return undefined if loop doesn't find key or value in obj of arrays
*/
