function isValidParentheses(s) {
  // Helper function to check if two characters are a valid pair of parentheses
  function isPair(open, close) {
    return (open === '(' && close === ')') ||
           (open === '{' && close === '}') ||
           (open === '[' && close === ']');
  }

  // Recursive helper function to check balanced parentheses
  function checkBalanced(substring) {
    if (substring === "") {
      return true; // Base case: an empty string is balanced
    }

    const stack = [];
    for (let i = 0; i < substring.length; i++) {
      if (substring[i] === '(' || substring[i] === '{' || substring[i] === '[') {
        stack.push(substring[i]);
      } else if (substring[i] === ')' || substring[i] === '}' || substring[i] === ']') {
        if (stack.length === 0 || !isPair(stack.pop(), substring[i])) {
          return false;
        }
      }
    }

    if (stack.length === 0) {
      return true; // All parentheses matched
    } else {
      return false; // Unmatched parentheses
    }
  }

  return checkBalanced(s);
}

// Test cases
console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}")); // true
