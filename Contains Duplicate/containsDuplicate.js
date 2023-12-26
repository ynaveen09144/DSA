var containsDuplicate = function(nums){
    const set = new Set(nums)
    return set.size != nums.length 
}

const test1 = containsDuplicate([1,2,3,1])
const test2 = containsDuplicate([1,2,3,4])
const test3 = containsDuplicate([1,1,1,3,3,4,3,2,4,2])
console.log(test1)
console.log(test2)
console.log(test3)
