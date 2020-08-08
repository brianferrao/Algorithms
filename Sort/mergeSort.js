const mergeSort = function(inputArray) {
    if (Array.isArray(inputArray)) {
        if (inputArray.length <= 1) return inputArray;
        const mid = inputArray.length/2;
        let leftArray = inputArray.slice(0, mid);
        let rightArray = inputArray.slice(mid, inputArray.length);
        leftArray = mergeSort(leftArray);
        rightArray = mergeSort(rightArray);
        return mergeSortedArray(leftArray, rightArray);
    } else {
        return 'Input is not an Array';
    }
    
}

function mergeSortedArray(leftArray, rightArray) {
    let sortedResultArray = [];
    while (leftArray.length || rightArray.length) {
        if (leftArray.length === 0) {
            sortedResultArray = [...sortedResultArray, ...rightArray];
            break;
        } ;
        if (rightArray.length === 0) {
            sortedResultArray = [...sortedResultArray, ...leftArray];
            break;
        } 
        if (leftArray[0] < rightArray[0]) {
            sortedResultArray.push(leftArray[0]);
            leftArray.shift();
        } else {
            sortedResultArray.push(rightArray[0]);
            rightArray.shift();
        }
    }
    return sortedResultArray;
}

module.exports = mergeSort;