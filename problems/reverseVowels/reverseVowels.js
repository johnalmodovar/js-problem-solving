
function reverseVowels(str) {
  str = str.split('');
  let vowelHolder = [];
  let vowels = 'aeiouAEIOU'
  let j = 0; // index for vowel holder once we change vowels

  // grabs all the vowels in the string
  for (let letters of str) {
    if (vowels.includes(letters)) {
      vowelHolder.push(letters);
    }
  }

  // reverse contents in vowel holder
  vowelHolder = vowelHolder.reverse();

  // reversing the vowels
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      str[i] = vowelHolder[j];
      j++;
    }
  }
  return str.join('');
}

/*
given a string
reverse the vowels in the string

if string is empty? => return empty string

ex:
'awesome' => ewosema
'noel; => neol

psuedo:
turn string into array
create vowel holder
walk through string
  if current letter is a vowel
    put it in vowel holder
reverse vowel holder
walk through string again
  if current letter is vowel
    turn it into vowel inside vowel holder in order
convert string back and return it
*/