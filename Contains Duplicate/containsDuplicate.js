//Brute Force

var containsDuplicate = function(nums){
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] == nums[j]){
                return true;
            }
        }
    }
    return false
}

const test1 = containsDuplicate([1,2,3,1])
const test2 = containsDuplicate([1,2,3,4])
const test3 = containsDuplicate([1,1,1,3,3,4,3,2,4,2])
console.log(test1)
console.log(test2)
console.log(test3)


//Optimal

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
