
function extractValue(objs, keyName) {
  let values = [];

  for (let obj of objs) {
    if (keyName in obj) {
      values.push(obj[keyName]);
    }
  }
  return values;
}

/*
given an array of objects and a key name
return array with all values of that keyname

psuedo:
create array output
go through the objects in array
  if key name is in that object
    put value in array output
return array output
*/