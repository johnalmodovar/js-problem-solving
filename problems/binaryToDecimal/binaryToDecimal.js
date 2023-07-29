
function binaryToDecimal(binary) {
  binary = binary.split('');
  let decimal = 0;
  let sum = 0;

  // grabbing the decimal values
  for (let i = 0; i < binary.length; i++) {
    decimal = (decimal * 2) + binary[i];
  }

  // filtering out the 0s and add the decimal values to sum
  for (let i = 0; i < decimal.length; i++) {
    if (decimal[i] !== '0') {
      sum += Number(decimal[i]);
    }
  }
  return sum;
}


/*
given a binary number (string of 0s and 1s)
return the decimal value

what if binary is empty => return 0

psuedo:
turn binary string into array
create sum output
create decimal var
walk through binary
  double the total and then add the next digit in binary to decimal var
walk through decimal var
  if the current number is not a zero
    add it to the sum value
return sum
*/