const removeHash = function (str) {
  
  const builtString = [];
  for(let i = 0; i < str.length; i++) {
    
    if(str[i] !== '#') {
      builtString.push(str[i])
    } else {
      builtString.pop(str[i])
    }
  }
  return builtString
}

var Compare = function(S, T) {
  const finalS = removeHash(S)
  const finalT = removeHash(T)
  
  if(finalS.length !== finalT.lenght) {
    return false
  } else {
    for(let i = 0; i < finalS.lenght; i++) {
      if(finalS[i] !== finalT[i]) {
        return false
      }
    }
  }
  return true
  
}




//Optimal


function BackSpaceRemover(S, T) {
    let p1 = S.length-1, p2 = T.length-1
    
    while(p1 >= 0 || p2 >= 0) {
        if(S[p1] === "#" || T[p2] === "#") {
            if(S[p1] === "#") {
                let backCount = 2
                while(backCount > 0) {
                    p1--
                    backCount--
                    
                    if(S[p1] === "#") {
                        backCount += 2
                    }
                }
            }
            if(T[p2] === "#") {
                let backCount = 2
                while(backCount > 0) {
                    p2--
                    backCount--
                    if(T[p2] === "#") {
                        backCount += 2
                    }
                } 
            }
        } else {
            if(S[p1] !== S[p2]) {
                return false
            } else {
                p1--
                p2--
            }
        }
    }
    return true
}


const S = 'ab#z'
const T = 'ac#z'

console.log(removeHash(S))
console.log(removeHash(T))
console.log(Compare(S, T))
