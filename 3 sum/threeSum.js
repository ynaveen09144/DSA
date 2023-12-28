// Brute force

var threeSum = function(nums) {
    const result = [];
    const length = nums.length;

    if (length < 3) {
        return result;
    }

    nums.sort((a, b) => a - b);

    for (let i = 0; i < length - 2; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            for (let k = j + 1; k < length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }

    // Remove duplicate triplets
    return result.filter((triplet, index, self) => {
        return index === self.findIndex(t => t.toString() === triplet.toString());
    });
};

// Example usage:
const nums = [-1, 0, 1, 2, -1, -4];
const result = threeSum(nums);
console.log(result); // Output the list of unique triplets whose sum is zero
