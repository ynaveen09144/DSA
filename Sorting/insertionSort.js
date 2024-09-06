const insertionSort = (arr) => {
  let n = arr.length;
  for (let i = 1; i < n; i++) {  
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  return arr;
};

let arr = [13, 46, 24, 52, 20, 9];
console.log(insertionSort(arr));
