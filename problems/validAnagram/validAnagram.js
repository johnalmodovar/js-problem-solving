
function validAnagram(str1, str2) {
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  if (str1 === str2) {
    return true;
  }
  return false;
}

/*
given two words
return true if words are anagrams

'abc', 'cab' => true
'yes,  'car' => false

if strings are different lengths => return false

*/