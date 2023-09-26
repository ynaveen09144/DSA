//Brute Force Solution

function maxWaterContainer(arr) {
  maxArea = 0
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
          const height =  Math.min(arr[i], arr[j])
          const width = j - i
          const area = height * width
          maxArea =  Math.max(maxArea, area)
        }
    }
    return maxArea
}

const arr = [7, 1, 2, 3, 9]
console.log(maxWaterContainer(arr))
