// Brute force

var productExceptSelf = function(nums) {
    const result = []
    
    let zeroCount = 0
    let productOfNonZeros = 1
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            zeroCount++
        } else {
            productOfNonZeros *= nums[i]
        }
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(zeroCount > 1) {
            result.push(0)
        } else if(zeroCount == 1) {
            if(nums[i] == 0) {
                result.push(productOfNonZeros)
            } else {
                result.push(0)
            }
        } else {
            result.push(productOfNonZeros / nums[i])
        }
    }
    return result
}

const test1 = ProdOfArrExpSelf([1,2,3,4])
const test2 = ProdOfArrExpSelf([-1,1,0,-3,3])
console.log(test1)
console.log(test2)


// Optimal with -0 in output

var productExceptSelf = function(nums) {
    let result = []
    let prefix = 1

    for(let i = 0; i < nums.length; i++) {
        result[i] = prefix
        prefix *= nums[i]
    }
    
    let suffix = 1

    for(let i = nums.length-1; i >= 0; i--) {
        result[i] *= suffix
        suffix *= nums[i]
    }
    return result
};

const test1 = productExceptSelf([1,2,3,4])
const test2 = productExceptSelf([-1,1,0,-3,3])
console.log(test1)
console.log(test2)

// Optimal with filtered -0 in output

var productExceptSelf = function(nums) {
    let result = [];
    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
    
    let suffix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    // Filter negative integers and set them to 0
    for (let i = 0; i < result.length; i++) {
        if (nums[i] < 0) {
            result[i] = 0;
        }
    }

    return result;
};

const test1 = productExceptSelf([1, 2, 3, 4]);
const test2 = productExceptSelf([-1, 1, 0, -3, 3]);
console.log(test1); // Output: [24, 12, 8, 6]
console.log(test2); // Output: [0, 0, 0, 0, 0]

