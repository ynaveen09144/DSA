//Brute force

function productOfSelfExceptSelf(arr) {
    const prefix = []
    
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            prefix[i] = 1
        } else {
            prefix[i] = arr[i - 1] + prefix[i - 1]
        }
    }
    console.log(prefix)
    
    const suffix = []
    
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i === arr.length - 1) {
            suffix[i] = 1
        } else {
            suffix[i] = arr[i + 1] + suffix[i + 1]
        }
    }
    
    console.log(suffix)
}

const res = productOfSelfExceptSelf([1,2,3,4])
console.log(res)

// Optimised

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

const res = productOfSelfExceptSelf([1,2,3,4])
console.log(res)
