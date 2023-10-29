


function mergeOverlappingIntervals(arr) {
  const n = arr.length; // size of the array

  //sort the given intervals:
  arr.sort((a, b) => a[0] - b[0]);

  const ans = [];

  for (let i = 0; i < n; i++) { // select an interval:
    let start = arr[i][0];
    let end = arr[i][1];

    //Skip all the merged intervals:
    if (ans.length && end <= ans[ans.length - 1][1]) {
      continue;
    }

    //check the rest of the intervals:
    for (let j = i + 1; j < n; j++) {
      if (arr[j][0] <= end) {
        end = Math.max(end, arr[j][1]);
      } else {
        break;
      }
    }
    ans.push([start, end]);
  }
  return ans;
}

const arr = [[1, 3], [8, 10], [2, 6], [15, 18]];
const ans = mergeOverlappingIntervals(arr);
console.log("The merged intervals are:");
for (let it of ans) {
  console.log(`[${it[0]}, ${it[1]}]`);
}


