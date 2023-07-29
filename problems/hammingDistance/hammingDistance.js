
function hammingDistance(s1, s2) {
  let counter = 0;
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  if (s1.length !== s2.length) return NaN;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      counter++;
    }
  }
  return counter;
}

/*
given two strings
calculate the difference of characters in their same index position

if strings are not the same length => return NaN

psuedo:
edge case
create counter for output
walk through one string
  if current letter does not equal the letter of the other string
    increase counter by 1
return counter
*/