function sameFrequency(num1, num2) {
  // if num1 and num2 are empty
  if (typeof num1 === 'undefined' || typeof num2 === 'undefined') {
    return false;
  }

  // converting numbers to strings to check individual digits
  num1 = Math.abs(num1).toString().split('').sort( (a,b) => a-b);
  num2 = Math.abs(num2).toString().split('').sort( (a,b) => a-b);

  // edge case for lengths
  if (num1.length !== num2.length) {
    return false;
  }

  // if both numbers are the same
  if (num1 === num2) return true;

  // checking both contents of num1 and num2
  for (let i = 0; i < num1.length; i++) {
    if (num1[i] !== num2[i]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(112, 121)); // true
console.log(sameFrequency(1112, 2211)); // false
console.log(sameFrequency(112, 12)); // false
console.log(sameFrequency(-112, 121)); // true
console.log(sameFrequency(456, 123)); // false

/*
given 2 numbers
return true/false if they contain same frequency of digits

what if num1 or num2 is empty? => return false
what if numbers have different lengths? => return false
  different lengths === different frequency in digits
what if one number is negative? => convert to positive
  to make the computer check the digits individually

ex:
112, 121 => true
1112, 2211 => false
112, 12 => false
-112, 121 => true

psuedo:
if num1 or num2 are not inputted
  return false
convert both nums into array => remove negative from both nums
  sort them so both nums are in ascending order
if numbers have different lengths
  return false
if numbers are identical
  return true
walk through nums
  if the current number in num1 does not match with num2
    return false
return true if all numbers match
*/