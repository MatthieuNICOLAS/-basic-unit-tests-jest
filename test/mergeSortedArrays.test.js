const mergeSortedArrays = require("../src/mergeSortedArrays")
test('mergeSortedArrays returns {1,2,3,4,5}', () => {

    expect(mergeSortedArrays([2,3],[1,4,5])).toEqual([1,2,3,4,5]);

})
test('mergeSortedArrays returns error message', () => {

    expect(mergeSortedArrays(null,[1,4,5])).toBe("One of your array is null");
})
test('mergeSortedArrays returns error message', () => {
    
    expect(mergeSortedArrays([1,4,5],null)).toBe("One of your array is null");
})