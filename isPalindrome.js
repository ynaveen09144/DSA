function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the string
  const reversedStr = str.split("").reverse().join("");

  // Compare the original string with the reversed string
  return str === reversedStr;
}

// Example usage:
const inputString = "A man, a plan, a canal, Panama";
if (isPalindrome(inputString)) {
  console.log(`${inputString} is a palindrome.`);
} else {
  console.log(`${inputString} is not a palindrome.`);
}
