//Brute force

const bubbleSort = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
};

let arr = [64, 25, 12, 22, 11];
bubbleSort(arr);
console.log("Sorted array: " + arr);

//Optimised

const bubbleSort = (arr) => {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true; // Set the flag to true since a swap occurred
            }
        }

        // If no elements were swapped, the array is already sorted
        if (!swapped) break;
    }
};

let arr = [64, 25, 12, 22, 11];
bubbleSort(arr);
console.log("Sorted array: " + arr);

