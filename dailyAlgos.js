function rotateArray(arr, k){
    if(arr.length === 0){
        return "array is empty"
    }

    let tempArray = [];
    for(let i=0; i < k; i++){
        const poppedNumbers = arr.pop()

        if(poppedNumbers !== undefined){
            tempArray.push(poppedNumbers)
        }
    }

    return tempArray.reverse().concat(arr).join()
}

console.log(rotateArray([1,2,3,4,5], [2]));