// Brute 

var findMin = function(nums){
    if(nums === 0) {
        return null
    }
    let min = nums[0]
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < nums[i - 1]) {
          min = nums[i]
          break  
        }
    }
    return min
}

const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
const minElement = findMin(rotatedArray);
console.log("Minimum element in the rotated sorted array:", minElement);
