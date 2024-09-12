function leftRotate(arr, K) {
    let n = arr.length;
    K = K % n; // Handle cases where K is larger than array length

    // Step 1: Reverse the first part (0 to K-1)
    reverseArray(arr, 0, K - 1);
    
    // Step 2: Reverse the second part (K to n-1)
    reverseArray(arr, K, n - 1);
    
    // Step 3: Reverse the whole array
    reverseArray(arr, 0, n - 1);
}

function reverseArray(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
        start++;
        end--;
    }
}

// Example usage
let arr = [1, 2, 3, 4, 5];
let K = 2;
leftRotate(arr, K);
console.log("Rotated Array:", arr);
