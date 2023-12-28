// Brute force

var search = function (nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            return i;
        }
    }
    return -1
}

const test1 = search([4,5,6,7,0,1,2], 0)
const test2 = search([4,5,6,7,0,1,2], 3)
const test3 = search([1], 0)
console.log(test1)
console.log(test2)
console.log(test3)
