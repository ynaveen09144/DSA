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


//Optimal

function maxWaterContainer(arr) {
  let p1 = 0, p2 = arr.length -1, maxArea = 0
  while(p1 < p2){
    const height = Math.min(arr[p1], arr[p2])
    const width = p2 - p1
    const area = height * width
    maxArea = Math.max(maxArea, area)
    if(arr[p1] <= arr[p2]){
      p1++
    }
    p2--
  }
  return maxArea
}


//Own method
function maxWaterContainer(arr) {
  maxArea = 0
  let j =  arr[arr.length-1]
  let indexOfj =  arr.length-1
        for(let i = 0; i < arr.length; i++) {
          const height =  Math.min(arr[i],j)
          const width = indexOfj - i
          const area = height * width
          maxArea =  Math.max(maxArea, area)
    }
    return maxArea
}

const arr = [7, 1, 2, 3, 9]
console.log(maxWaterContainer(arr))
