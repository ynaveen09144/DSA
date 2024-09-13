function findMissingNumber(numbers, start) {
    const n = numbers.length + 1; // Full length including the missing number
    let expectedSum;
    
    if (start === 0) {
        // Sum for sequence starting from 0 (0 to n)
        expectedSum = (n * (n - 1)) / 2;
    } else {
        // Sum for sequence starting from 1 (1 to n)
        expectedSum = (n * (n + 1)) / 2;
    }

    const actualSum = numbers.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}

// Example with missing number in a sequence starting from 0
const nums1 = [0, 2, 3, 1, 4];
console.log("Missing number (0-based): " + findMissingNumber(nums1, 0));

// Example with missing number in a sequence starting from 1
const nums2 = [1, 2, 3, 5];
console.log("Missing number (1-based): " + findMissingNumber(nums2, 1));
