//Brute

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


//Optimal

const secondLargestElement = (arr) => {
    let n = arr.length;

    if (n < 2) return -1;

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < n; i++) {
        if (arr[i] > largest) {
            secondLargest = largest; 
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest === -Infinity ? -1 : secondLargest; 
}

let arr = [8, 8, 7, 6, 5];
console.log(secondLargestElement(arr));
