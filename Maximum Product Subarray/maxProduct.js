// Brute force

var maxProduct = function(nums) {
    let maxProduct = -Infinity
    
    for(let i = 0; i < nums.length; i++) {
        let currentProduct = 1
        
        for(let j = i; j < nums.length; j++) {
            currentProduct *= nums[j]
            maxProduct = Math.max(currentProduct, maxProduct)
        }
    }
    return maxProduct
}
const test1 = maxProduct([2,3,-2,4])
const test2 = maxProduct([-2,0,-1])
console.log(test1)
console.log(test2)

