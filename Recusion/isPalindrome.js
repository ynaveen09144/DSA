function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Base case: If the string has 0 or 1 character, it's a palindrome
  if (str.length <= 1) {
    return true;
  }

  // Check if the first and last characters are the same
  if (str[0] === str[str.length - 1]) {
    // Recursively check the substring without the first and last characters
    return isPalindrome(str.slice(1, str.length - 1));
  }

  return false;
}

// Example usage:
const testString1 = "racecar";
const testString2 = "hello";

console.log(`Is "${testString1}" a palindrome? ${isPalindrome(testString1)}`);
console.log(`Is "${testString2}" a palindrome? ${isPalindrome(testString2)}`);
