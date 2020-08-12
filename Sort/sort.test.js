const mergeSort = require('./mergeSort');
const bubbleSort = require('./bubbleSort');
const bubbleSortOptimized = require('./bubbleSortOptimized');

test('mergeSort should sort the input array', () => {
    const inputArr = [4, 6, 2, 7, 5, 9];
    const expectedArr = [2, 4, 5, 6, 7, 9];
    expect(mergeSort(inputArr)).toEqual(expectedArr);
});

test('bubbleSort should sort the input array', () => {
    const inputArr = [4, 6, 2, 7, 5, 9];
    const expectedArr = [2, 4, 5, 6, 7, 9];
    expect(bubbleSort(inputArr)).toEqual(expectedArr);
});

test('sort randomly generated array using bubbleSort with optimization impl', () => {
    const unsortedArray = Array.from({length: 5000}, () => Math.ceil(Math.random() * 50000));
    const expectedArray = [...unsortedArray].sort((e1, e2) => e1 -e2);
    console.time('bubbleSortOptimized');
    expect(bubbleSortOptimized(unsortedArray)).toEqual(expectedArray);
    console.timeEnd('bubbleSortOptimized');
});

test('should return error text if param passed to sort function is not an array', () => {
    const inputArr = 'Not an array';
    expect(mergeSort(inputArr)).toBe('Input is not an Array');
});