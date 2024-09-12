const removeDuplicates = (nums) => {
    // Use Set to remove duplicates and convert it back to an array
    return [...new Set(nums)];
};

const printArray = (nums) => {
    console.log(nums.join(' '));
};

// Example usage
const nums = [1, 2, 2, 3, 4, 4, 5];
console.log("Original Array: ");
printArray(nums);

const uniqueNums = removeDuplicates(nums);
console.log("Array after removing duplicates: ");
printArray(uniqueNums);
