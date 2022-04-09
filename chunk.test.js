const arrayChunks = require('./chunk');

test('if Chunk array exists', () => {
    expect(arrayChunks).toBeDefined();
});

test('Chunk an array of 10 values with a length of 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const len = 2;
    const chunkedArr = arrayChunks(numbers, len);
    expect(chunkedArr).toEqual(
        [
            [1, 2],
            [3, 4],
            [5, 6],
            [7, 8],
            [9, 0]
        ]
    )
});

test('One chunk Array', () => {
    const numbers = [1, 2, 3, 4];
    const len = 1;
    const chunkedArr = arrayChunks(numbers, len);

    expect(chunkedArr).toEqual([
        [1],
        [2],
        [3],
        [4]
    ]);
});