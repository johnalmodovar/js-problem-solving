function isPrime (num) {
  // anything below 2 is not considered prime (includes negative nums)
  if (num <= 1 || typeof num === 'undefined' || isNaN(num)) {
    return false;
  } else if (num > 1) {
    // checking for any num between 2 and num and see if its divisible
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(isPrime(0));
console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(4));
console.log(isPrime(NaN));
console.log(isPrime(null));
console.log(isPrime());
console.log(isPrime(-4));

/*
given a num
return true or false if num is a prime number

what if num is undefined or null or NaN? => return false
negative numbers are not prime => return false

ex:
0 => false
1 => false
2 => true
3 => true
4 => false
NaN => false
null => false
undefined => false

psuedo:
if number is less than or equal to 1
  return false
else if number is greater than 1
  start loop from 2 (since 0 and 1 do not count)
    if the number is divisible by the nums between 2 and the number
      return true
else
  return false
*/