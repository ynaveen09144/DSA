function sumOfDigits(n) {
  // Base case: if the number is a single digit, return it
  if (n < 10) {
    return n;
  } else {
    // Recursive case: sum the last digit and recursively sum the rest
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
  }
}

// Example usage:
const number = 12345;
const result = sumOfDigits(number);
console.log(`The sum of the digits of ${number} is ${result}`);
