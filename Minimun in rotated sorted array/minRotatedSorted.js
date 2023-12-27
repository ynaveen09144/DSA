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

// Optimal

var findMin = function(nums){
    if(nums === 0) {
        return null
    }
    let left = 0
    let right = nums.length - 1
    while(left < right) {
        let mid = left + (right - left) / 2
        
        if(nums[mid] > nums[right]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return nums[left]
}

const test1 = findMin([3,4,5,1,2])
const test2 = findMin([4, 5, 6, 7, 0, 1, 2])
const test3 = findMin([11,13,15,17])
console.log(test1)
console.log(test2)
console.log(test3)

