const reverseString = require('./reverseString');


test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('reverseString function should reverse car', () => {
    expect(reverseString('car')).toBe('rac');
})