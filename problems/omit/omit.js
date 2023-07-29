function omit (obj, keys) {
  // going through keys
  for (let key of keys) {
    if (key in obj) {
      delete obj[key];
    }
  }
  return obj;
}

console.log(omit({ a:1, b:2, c:3 }, ['a', 'c']));
console.log(omit({ a:1, b:2, c:3 }, ['a','d']));
console.log(omit({ a:1, b:2, c:3 }, ['b','c']));
console.log(omit({ a:1, b:2, c:3 }, []));
console.log(omit({}, []));

/*
given an object and an array
return object where keys in array argument is removed
  if array element doesn't appear in object, simply ignore it

what if object is empty? => return empty object
what if array is empty? => return object as is

ex:
obj = { a:1, b:2, c:3 }
['a', 'c'] => { b:2 }
['a', 'd'] => { b:2, c:3 }
['b', 'c'] => { a:1 }
[] => { a:1, b:2, c:3 }
{}, [] => {}

psuedo:
go through array
  if element is in obj
    delete the key/value pairs
return object
*/