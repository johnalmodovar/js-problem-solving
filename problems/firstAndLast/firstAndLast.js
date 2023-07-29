
function firstAndLast(arr) {
  let answer = [];

  for (let words of arr) {
    answer.push(words[0] + words[words.length - 1]);
  }

  return answer;
}

/*
given an array of words
return new array with first and last letters of word

if array is empty => return empty array
if word only has one letter => double the letter

ex:
['hi', 'goodbye', 'x'] => ['hi', 'ge', 'xx']

psuedo:
create array output
walk through array of words
  push first and last letters in array output
return array output
*/