
function vowelCount(str) {
  str = str.toLowerCase();
  let obj = {};
  let vowels = 'aeiou';

  for (let letters of str) {
    if (letters in obj) {
      obj[letters]++;
    } else {
      if (vowels.includes(letters)) {
        obj[letters] = 1;
      }
    }
  }
  return obj;
}

/*
given a string
return object where keys = vowels, value = num of times it appears

if vowel is capitalized? => turn all letters lower cased

psuedo:
create object output
create vowel checker
walk through string
  if letter is a vowel
    check to see if its in the object
      if it is
        increase count by 1
      if not
        create the key value pair
return object
*/