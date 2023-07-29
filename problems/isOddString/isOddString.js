function isOddString (str) {
  let sum = 0;
  // so all letters are lower cased
  str = str.toLowerCase();

  // to get the num value of the letters
  let alphabet = alphabetCount();

  // edge case
  if (str.length === 0) return false;

  // grabbing sum of all letters in string
  for (let letters of str) {
    if (letters in alphabet) {
      sum += alphabet[letters];
    }
  }

  // checking to see if the sum is odd or not
  if (sum % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

// function to create alphabet var to check values for letters
function alphabetCount (str) {
  let count = {};
  let value = 1;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let letters of alphabet) {
    count[letters] = value;
    value++;
  }

  return count;
}

console.log(isOddString('aaa'));
console.log(isOddString('add'));
console.log(isOddString('John'));
console.log(isOddString(''));

/*
given a string
return true or false if sum of each character's position in the alphabet is odd
  a = 1, b = 2 . . .

what if string contains numbers? => assume there's no numbers in string
what if string is empty? => return false
what if letter is capitalized? => make all letters lower cased

ex:
'aaa' => 1 + 1 + 1 = 3 => true
'add' => 1 + 4 + 4 = 9 => true
'abc' => 1 + 2 + 3 = 6 => false

psuedo:
create sum var for output
create var that houses all letters of alphabet in order
  we can use this to find the value of the letters
walk through string
  find the letter in the object
  and grab the value and add it to sum var
if sum is odd
  return true
else
  return false
*/