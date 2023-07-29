function pick (obj, keys) {
  let output = {};

  // edge case
  if (keys.length === 0 || Object.keys(obj) === 0) return {};

  for (let key of keys) {
    if (key in obj) {
      output[key] = obj[key];
    }
  }
  return output;
}

console.log(pick({ a:1, b:2, c:3 }, ['a', 'c']));
console.log(pick({ CA: 'Palmdale', MA: 'Boston' }, ['CA', 'FL']));
console.log(pick({ a:1, b:2, c:3 }, ['d', 'f']));
console.log(pick({}, ['a', 'b',]));
console.log(pick({ a:1, b:2, c:3 }, []));

/*
given an object and an array
return an object with the keys being the ones listed from argument

what if keys aren't in the object? => ignore them
if object is empty? => return empty object
what if keys is empty? => return empty object

ex:
{ a:1, b:2, c:3 }, ['a', 'c'] => { a:1, c:3 }
{ CA: Palmdale, MA: Boston }, ['CA', 'FL' ] => { CA: Palmdale }
{ a:1, b:2, c:3 }, ['d', 'f' ] => {}
{}, [1, 2, 3] => {}
{ a:1, b:2, c:3 }, [] => {}

psuedo:
create output var to house keys
walk through keys
  if element is in obj
    put it in output var
return output var
*/