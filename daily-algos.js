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

function findLargestProduct(arr) {
    if (arr.length === 0) {
        return "array is empty";
    }

    let largestProduct = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let product = arr[i] * arr[j];

            if (product > largestProduct) {
                largestProduct = product;
            }
        }
    }

    return largestProduct;
}

