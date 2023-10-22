var search = function(arr, target) {
    let left = 0, right = arr.length-1;
    
    while(left <= right) {
        
        let midVal = Math.floor((left + right)/2);
        const foundVal =  arr[midVal];
        
        if(foundVal === target){
            return midVal;
        } else if(foundVal < target) {
            left =  midVal + 1; 
        } else {
            right = midVal - 1;
        }
    }
    return -1
}

const arr = [1, 2, 3, 4, 5];
console.log(search(arr, 5));
