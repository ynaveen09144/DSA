//Brute Force Solution

function maxWaterContainer(arr) {
  let target = 11
    for(let i = 0; i < arr.length; i++) {
        let numToFind = target - arr[i]
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] == numToFind) {
                return [i, j]
            }
        }
    }
    return null
}

const arr = [3,5,9,3,2]
console.log(maxWaterContainer(arr))
