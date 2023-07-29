
function addKeyAndValue(objs, key, value) {
  for (let obj of objs) {
    obj[key] = value;
  }
  return objs;
}

/*
given an array of objects, a key, and a value
return the array of objects where key and value is inserted into the objects

if array is empty => return empty array

ex:
[{x:1}, {y:2}], 'a', 3 => [{x:1, a:3}, {y:2, a:3}]

psuedo:
walk through array of objects
  insert the key and values into object
return array of objects
*/