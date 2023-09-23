function SelectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let mini = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[mini]){
                mini = j
            }
        }
        let temp =  arr[mini]
            arr[mini]  = arr[i]
            arr[i] = temp
    }
    return arr
}




function BubleSort(arr){
    for(let i = arr.length-1; i >= 1; i--)
    {
        let didSwap = 0
        for(let j = 0; j <= i-1; j++)
        {
            if(arr[j] > arr[j+1])
            {
               let temp =  arr[j+1]
                 arr[j+1] = arr[j]
                 arr[j] =  temp 
            }
            
        }
        if(didSwap == 0)
            break;
    }
    return arr
}



function InsertionSort(arr){
    for(let i = 0; i < arr.length; i++)
    {
        j = i
        while(j > 0 && arr[j-1] > arr[j])
        {
            let temp = arr[j-1]
                arr[j-1] = arr[j]
                arr[j] = temp
                j--
        }
    }
    return arr
}



const  arr = [5,6,8,9,7,1,3,2]
console.log(InsertionSort(arr))
