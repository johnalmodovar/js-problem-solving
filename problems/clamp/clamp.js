
function clamp (val, lower, upper) {
  // edge cases where if nothing else works, just return value
  if (val > upper) {
    return upper;
  } else if (val < lower) {
    return lower;
  } else {
    return val;
  }
}

console.log(clamp(-10, -5, 6));
console.log(clamp(10, -2, 5));
console.log(clamp(2, -5, 5));
console.log(clamp(0, 0, 0));

/*
given 3 numbers (value, lowerBound, upperBound)
return one of three where:
  value === between lower and upper bounds
  lowerBound === value < lowerBound
  upperBound === value > upperBound

what if lowerBound or upperBound is empty? => return value
what if value equals both lower and upper bound? => return value
what if value is null or undefined? =>

ex:
(-10, -5, 6) => -5 because value < lowerBound
(10, -2, 5) => 5 because value > upperBound
(2, -5, 5) => 2 because it's between lower and upper bounds
(0, 0, 0) => 0 because it's value is neither less than or greater than

psuedo:
if lowerBound or upperBound is empty
  return value
if value is greater than upperBound
  return upperBound
else if value is less than lowerBound
  return lowerBound
else
  return value
*/
