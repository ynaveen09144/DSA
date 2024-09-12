const moveZeroesToEnd = (nums) => {
    let nonZeroIndex = 0;

    // Move non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex++] = nums[i];
        }
    }

    // Fill the rest of the array with zeroes
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};

const printArray = (nums) => {
    console.log(nums.join(' '));
};

// Example usage
const nums = [0, 1, 0, 3, 12];
console.log("Original Array: ");
printArray(nums);

moveZeroesToEnd(nums);

console.log("Array after moving zeroes to the end: ");
printArray(nums);
