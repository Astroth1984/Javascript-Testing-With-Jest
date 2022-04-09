const isAnagram = require('./anagram');

test('isAnagrma function exists', () => {
    expect(typeof isAnagram).toBe('function');
});


test(' "cinema!!" is an anagram of "iceman" ', () => {
    expect(isAnagram("cinema!!", "iceman")).toBeTruthy();
});

test(' "Dormitory" is an anagram of "dirty room##" ', () => {
    expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
});

test(' "Hello" is NOT an anagram of "aloha" ', () => {
    expect(isAnagram("hello", "aloha")).toBeFalsy();
});