function isNil (val) {
  return val === undefined || val === null;
}

console.log(isNil(null));
console.log(isNil(NaN));
console.log(isNil([]));
console.log(isNil(false));
console.log(isNil(undefined));
console.log(isNil());
console.log(isNil('abc'));
console.log(isNil(123));
console.log(isNil({}));

/*
given a value
return true/false if value === undefined or null
*/