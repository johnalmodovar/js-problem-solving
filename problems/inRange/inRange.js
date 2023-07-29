function inRange (n, start, end) {
  // holds the original start value when switching values around
  let ogStart = start;

  // if n is null
  if (typeof n === 'object') return false;

  // if end is empty
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  // if start is greater than end
  if (start > end) {
    start = end;
    end = ogStart;
  }

  // checking if n is between start and end
  if (n > start && n < end) {
    return true;
  } else {
    return false;
  }
}

console.log(inRange(3, 2, 4));
console.log(inRange(0, -10, 10));
console.log(inRange(10, 0, 10));
console.log(inRange(2, 5));
console.log(inRange(6, 5));
console.log(inRange(9, 10, -5));
console.log(inRange(null, 2, 5));

/*
given 3 numbers => n, start, end
return true or false under these conditions
  if n is between start and end (but not including end)
  if end is empty
    end === start, start === 0
  if start is greater than end
    start === end, end === start

negative numbers? => they can be
what if n is null? => return false

ex:
3, 2, 4 => true
  2 is start, 4 is end => checking if 3 is in the middle, which is true
0, -10, 10 => true
5, 0, 3 => false
  5 is outside of 0 and 3
10, 0, 10 => false
  10 is not between 0 and 10
2, 5 => true
  since end is empty, end becomes the start and start is now 0
  2 is between 0 and 5
6, 5 => false
  since end is empty, end becomes the start and start is 0
  6 is not between 0 and 5
9, 10, -5 => true
  since 10 is bigger than -5, start and end switch
  9 is between -5 and 10

psuedo:
create ogStart var to hold start value when swapping between start and end
if end is empty (undefined)
  let end be the start param
  let start be 0
if start is greater than end
  let end equal start
  let start equal ogStart
if n is greater than start && n is less than end
  return true
else
  return false
*/