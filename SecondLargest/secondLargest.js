const secondLargestElement = (arr) => {
    let n = arr.length;
    
    if (n < 2) return -1; 

    arr.sort((a, b) => (a - b));
    
    let largest = arr[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] != largest) {
            return arr[i];
        }
    }

    return -1; 
}

let arr = [8, 8, 7, 6, 5];
console.log(secondLargestElement(arr));
