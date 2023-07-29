
function hasAZero(num) {
  num = num.toString().split('');
  return num.some( x => x === '0');
}

/*
given a num
return true if it contains a 0
*/
