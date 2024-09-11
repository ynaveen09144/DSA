function rotateArray(arr) {
    let n = arr.length;
    let first = arr[0];  
    
    for (let i = 0; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    
    arr[n - 1] = first;
    
    return arr;  
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let result = rotateArray(arr);
console.log(result.join(" "));
