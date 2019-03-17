// Given a non-negative integer, return an array or a list of the individual digits in order.

// Specification
// digitize(n)
// separate multiple digit numbers into an array

// Parameters
// n: Number - Number to be converted

// Return Value
// Array<Number> - Array of separated single digit integers

// Examples
// n	Return Value
// 123	[1,2,3]
// 8675309	[8,6,7,5,3,0,9]

function digitize(n) {
    return n.toString().split('').map(Number);
  }

  