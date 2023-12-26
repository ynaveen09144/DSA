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
