function logestSubString(arr) {
    if(arr.length <= 1) return arr.length
    
    let longest = 0;

    for(let i = 0; i < arr.length; i++) {
        let seenChar = {}, currentLength = 0
        for(let j = i; j <arr.length; j++){
            const currentChar = arr[j]
            
            if(!seenChar[currentChar]) {
                currentLength++
                seenChar[currentChar] = true
                longest = Math.max(longest, currentLength)
            } else {
                break
            }
        }
    }
    return longest
}

const arr = "abccabbcde"
console.log(logestSubString(arr))
