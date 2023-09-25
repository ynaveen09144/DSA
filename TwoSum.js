function TwoSum(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        let numToFind = target - arr[i] 
        for(let j = i+1; j < arr.length; j++){
            if(numToFind === arr[j]) {
                return [i,j]
            }
        }
    }
    return null
}


//Optimized

function TwoSum(arr, target) {
  const numMap = {}
    for(let i = 0; i < arr.length; i++) {
      const cuurentMapVAl = numMap[arr[i]]
      if(cuurentMapVAl >= 0) {
        return [cuurentMapVAl, i]
      } else {
        const numToFind = target - arr[i]
        numMap[numToFind] = i
      }
      
    }
    return null
}

const arr = [5,9,2,5,9]
console.log(TwoSum(arr, 11))
