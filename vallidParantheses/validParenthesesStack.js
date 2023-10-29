var isValid = function(s) {
    let stack = []
    let openningBracket = ["(", "{", "["]

    for(let i = 0; i < s.length; i++){
        if(openningBracket.includes(s[i]))
            stack.push(s[i])
        else{
            const lastElement = stack.pop()

        if
        ((s[i] === ")" && lastElement === "(") ||
        (s[i] === "}" && lastElement === "{") ||
        (s[i] === "]" && lastElement === "[") )
        {
            continue
        } 
        else{
            return false
        }
     }
        
    }
    return stack.length === 0
    
};

const s = "()[]{}";
console.log(isValid(s))
