function padEnd (phrase, minLength, pad) {
  let output = phrase;


  // edge case
  if (phrase.length > minLength) return phrase;

  // looping to push padding num amount of times
  for (let i = 0; i < (minLength - phrase.length); i++) {
    if (typeof pad === 'undefined') {
      output += ' ';
    } else {
      // edge case if pad is not a string
      pad = pad.toString();
      // looping through pad to add each letter
      for (let j = 0; j < pad.length; j++) {
        // to check if output length is still less than minLength
        if (output.length < minLength) {
          // checking if we reached the end of the array
          if (typeof pad[j] === 'undefined') {
            j = 0;
            output += pad[j];
            // keep looping until we reach minLength
          } else {
            output += pad[j];
          }
          // break the loop once we reach minLength
        } else {
          break;
        }
      }
    }
  }
  return output;
}

console.log(padEnd('abc', 4));
console.log(padEnd('hi', 4, 'x'));
console.log(padEnd('youre', 10, ' cute'));
console.log(padEnd('hey', 2));
console.log(padEnd('abc', 7, 'xyz'));

/*
given a string (phrase) and a number (minLength)
return string that's padded to the right if phrase is shorter than minLength
  sentence padded by ' ' (whitespace) by default
  can provide 3rd argument for what the string can be padded with
    padding truncated if not enough padding, repeated if too much padding
  if minLength is less than phrase length
    return original string as is

what if phrase is empty? => add pad until it fills minLength
what if phrase is a number? => convert to string then proceed normally

ex:
'abc', 4 => 'abc '
'hi', 4, 'x' => 'hixx'
'youre', 10, ' cute' => 'youre cute'
'hey', 2 => 'hey'
'abc', 7, 'xyz' => 'abcxyzx'

psuedo:
create output var and reference it to phrase
turn pad into an array type
if phrase length is greater than minLength
  return phrase as is
if pad is inputted
  walk through pad this amount of times => (minLength - phrase length)
    add current element to output var
else
  insert white space
return output var
*/