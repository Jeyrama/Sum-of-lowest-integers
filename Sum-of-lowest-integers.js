/*
Create a function that returns the sum of the two lowest positive 
numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.

For example, 
when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/


// Solution

function sumTwoSmallestNumbers(numbers) {
  let smallestNumber = 0;
  let secondSmallest = 0;

smallestNumber = Math.min(numbers[0], numbers[1]);
secondSmallest = Math.max(numbers[0], numbers[1]);

for (let index = 2; index < numbers.length; index++) {
  if (numbers[index] < smallestNumber) {
    secondSmallest = smallestNumber;
    smallestNumber = numbers[index];
  } else if (numbers[index] < secondSmallest) {
    secondSmallest = numbers[index];
  }
}
return (smallestNumber + secondSmallest);
};

// or

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function(a, b) {return a - b;});
  return numbers[0] + numbers[1];
};