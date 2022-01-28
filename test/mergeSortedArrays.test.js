const mergeSortedArrays = require("../src/mergeSortedArrays")
test('mergeSortedArrays returns {1,2,3,4,5}', () => {

    expect(mergeSortedArrays([2,3],[1,4,5])).toEqual([1,2,3,4,5]);

})