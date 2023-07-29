
function zipObject(keys, values) {
  let obj = {};

  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }
  return obj;
}

/*
accepts two array (keys and values)
return an object with the key and value pairs

if key is longer than values => value in object is undefined
if values is longer than keys => ignore additional values
if both arrays are empty => return empty object

ex:
['a', 'b'], [1, 2] => { a:1, b:2 }
['a', 'b', 'c'], [1, 2] => { a:1, b:2, c:undefined }
['a', 'b'], [1, 2, 3] => { a:1, b:2 }

psuedo:
create object var for output
walk through key array (so we can use its length for the base)
  push all key value pairs into object
return object
*/