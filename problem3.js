function findFirstUniqueChar(s) {
    const charCount = {};

    // count occurrences of each character
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // find the first character with count === 1
    for (const char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return -1;
}

console.log(firstUniqueChar("swiss"));
console.log(firstUniqueChar("aabbcc"));
console.log(firstUniqueChar("leetcode"));
console.log(firstUniqueChar("loveleetcode"));
console.log(firstUniqueChar(""));
