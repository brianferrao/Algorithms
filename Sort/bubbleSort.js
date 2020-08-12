const bubbleSort = function(inputArray) {
    if (Array.isArray) {
        const length = inputArray.length;
        for (let i = 0; i < length - 1; i++) {
            for (let j = i + 1; j < length ; j++) {
                if (inputArray[i] > inputArray[j]) {
                    const temp = inputArray[j];
                    inputArray[j] = inputArray[i];
                    inputArray[i] = temp;
                }
            }
        }
        return inputArray;
    } else {
        return `Cant sort something which is not an array`;
    }
}

module.exports = bubbleSort;