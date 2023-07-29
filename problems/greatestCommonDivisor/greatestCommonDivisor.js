function greatestCommonDivisor (num1, num2) {
  // grabbing smallest num between the two
  let smallestNum = Math.min(num1, num2);

  // edge case
  if (num1 < 1 || num2 < 1) return 0;

  // loop starting from the smallest number between the two
  for (let i = smallestNum; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
}

console.log(greatestCommonDivisor(3, 20));
console.log(greatestCommonDivisor(8, 12));
console.log(greatestCommonDivisor(234, 468));

/*
given 2 whole numbers (num1, num2)
return the greatest common divisor between both nums

what if num is less than 1? => return 0

ex:
3, 20 => 1
8, 12 => 4
234, 468 => 234

psuedo:
grab smallest number from the argument
start loop from smallest number, ending at 1
  find the first divisor out of the two and return it
*/