function findLongestWord(sentence) {
    // Extract all sequences of letters and numbers
    const words = sentence.match(/[a-zA-Z0-9]+/g) || [];

    let longest = "";

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(findLongestWord("The quick brown fox jumped"));
console.log(findLongestWord("Hi, my number is 12345 and my name is Bob!"));
console.log(findLongestWord("cat dog bird"));
console.log(findLongestWord("a bb ccc bb a"));
console.log(findLongestWord(""));
