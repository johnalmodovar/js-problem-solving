
function keyCount(objs) {
  let objCount = {};

  for (let obj of objs) {
    for (let keys in obj) {
      if (keys in objCount) {
        objCount[keys]++;
      } else {
        objCount[keys] = 1;
      }
    }
  }
  return objCount;
}

/*
given array of objs
return obj with count of how many times key appears in objs

psuedo:
create obj output
walk through objs
  if key is in obj output
    increase count by 1
  if it isnt
    create that key and set key to 1
return obj output
*/
