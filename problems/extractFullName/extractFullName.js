
function extractFullName(people) {
  let fullNames = [];

  // grabbing all names and putting it in fullNames array
  for (let names of people) {
    fullNames.push(Object.values(names));
  }

  // taking out the middle name and joining the names together
  for (let i = 0; i < fullNames.length; i++) {
   fullNames[i].splice(1,1);
   fullNames[i] = fullNames[i].join(' ');
  }
  return fullNames;
}

/*
given array of person objects
return full name of each person barring the middle name

if array is empty => return empty array

ex:
[{first: 'john', last: 'almodovar'}] => ['john almodovar']

psuedo:
create array output
walk through array of objects
  grab all values and put it inside of array output
walk through array output
  take out middle name and turn into string
return array output
*/