function upperFirst (str) {
  // string => array for mutability
  str = str.split('');

  // edge case
  if (str.length === 0) return '';

  // capitalize first letter of string
  str[0] = str[0].toUpperCase();

  return str.join('');
}

console.log(upperFirst('john'));
console.log(upperFirst('alex'));
console.log(upperFirst(''));

/*
given a string
capitalize first letter and return string

if string is empty => return empty string

ex:
'john' => 'John'
'alex' => 'Alex'
'' => ''

psuedo:
turn string into array to capitalize first letter
if string is empty
  return empty string
capitalize first element of array
turn array into string and return it
*/