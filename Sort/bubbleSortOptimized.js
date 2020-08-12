const bubbleSortOptimized = function(inputArray) {
    console.time('bubbleSortOptimized');
    if(Array.isArray(inputArray)) {
        const length = inputArray.length;
        let swapped;
        do {
            swapped = false;
            for(let i=0; i < length -1; i++) {
                if(inputArray[i] > inputArray[i+1]) {
                    swapped = true;
                    const temp = inputArray[i];
                    inputArray[i] = inputArray[i+1];
                    inputArray[i+1] = temp;
                }
            }
        }while(swapped);
        console.timeEnd('bubbleSortOptimized');
        return inputArray;
    } else {
        return `cant sort anything which is not an array`;
    }
}

module.exports = bubbleSortOptimized;