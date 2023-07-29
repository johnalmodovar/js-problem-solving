
function twoArrayObject(keys, values) {
  let obj = {};

  for (let i = 0; i < keys.length; i++) {
    // checking if current index is surpassing values array size
    if (i >= values.length) {
      obj[keys[i]] = null;
    } else {
      obj[keys[i]] = values[i];

    }
  }
  return obj;
}

/*
given two arrays of keys and values (can be different lengths)
create an object with key/value pairs from the arrays

if keys length > values length => keys value will be null
if values > keys => ignore

ex:
[a, b, c], [1, 2] => {a:1, b:2, c:null}
psuedo:
create object output
walk through keys array
  push all keys into object with value pairs in object output
  if keys length is bigger than values length and is running out of values
    push null in place
return object output
*/
