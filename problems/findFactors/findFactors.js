function findFactors (num) {
  let factors = [];
  // edge case
  if (num < 1 || typeof num === 'undefined') return [];

  for (i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

console.log(findFactors(10));
console.log(findFactors(13));
console.log(findFactors(0));
console.log(findFactors());

/*
given a num
return array of numbers div by 1 and up to num

what if number is negative? => numbers below 1 returns empty array
if no number inputted => return empty array
assume argument === whole numbers

10 => [1, 2, 5, 10]
13 => [1, 13]
0 => []

psuedo:
create factors var
start the loop starting from 1 up to num
  checking if that number is divisible by num
    if it is, push num into output var
return factors
*/