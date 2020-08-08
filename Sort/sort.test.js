const mergeSort = require('./mergeSort');

test('should sort the input array', () => {
    const inputArr = [4, 6, 2, 7, 5, 9];
    const expectedArr = [2, 4, 5, 6, 7, 9];
    expect(mergeSort(inputArr)).toEqual(expectedArr);
});

test('should return error text if param passed to sort function is not an array', () => {
    const inputArr = 'Not an array';
    expect(mergeSort(inputArr)).toBe('Input is not an Array');
});