function twoSum(arr, target) {
    const hashmap = new Map()
    
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let diff = target - current
        
        if (hashmap.has(diff)) return [hashmap.get(diff), i]
        hashmap.set(current, i)
    }
    
    return []
}

const arr = [1, 2, 3, 5, 7];
console.log(twoSum(arr, 10));
