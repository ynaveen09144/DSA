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

///Optimal
function LongestSubstring(arr) {
    const seen = {};
    let longest = 0, left = 0;
    
    if(arr.length <= 1) return arr.length;
 
    for(let right = 0; right < arr.length; right++) {
        const currentChar = arr[right];
        const prevSeenChar = seen[currentChar];
        
        if(prevSeenChar >= left) {
            left = prevSeenChar + 1;
        }
        seen[currentChar] = right;
        longest = Math.max(longest, right - left + 1);
    }
    return longest
};

const arr = "abccabbcde"
console.log(logestSubString(arr))
