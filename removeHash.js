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


const S = 'ab#z'
const T = 'ac#z'

console.log(removeHash(S))
console.log(removeHash(T))
console.log(Compare(S, T))
