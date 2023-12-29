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


// Optimal 

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const triplets = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let p1 = i + 1,
                p2 = nums.length - 1,
                target = -nums[i];

            while (p1 < p2) {
                const currentSum = nums[p1] + nums[p2];

                if (currentSum === target) {
                    triplets.push([nums[i], nums[p1], nums[p2]]);

                    while (p1 < p2 && nums[p1] === nums[p1 + 1]) {
                        p1++;
                    }
                    while (p1 < p2 && nums[p2] === nums[p2 - 1]) {
                        p2--;
                    }
                    p1++;
                    p2--;
                } else if (currentSum < target) {
                    p1++;
                } else {
                    p2--;
                }
            }
        }
    }

    return triplets;
}

// Example usage:
const test1 = threeSum([-1, 0, 1, 2, -1, -4]);
console.log("Test1:", test1); // Output: [ [-1, -1, 2], [-1, 0, 1] ]

