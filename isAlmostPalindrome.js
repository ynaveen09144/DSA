
const validPalindrome = function(s, left, right) {
    while(left < right) {
        if(s[left] !== s[right]) {
            return false
        }
        left++;
        right--;
    }
    return true
}


const isAlmostPalindrome = function(s) {
    let left = 0, right = s.length-1
    while(left < right) {
        if(s[left] !== s[right]) {
           return validPalindrome(s, left+1, right) || validPalindrome(s, left, right+1) 
        }
        left++;
        right--;
    }
}


const s = "abcadbacba";
console.log(isAlmostPalindrome(s))
