function convertToCamelCase(sentence) {
    return sentence
        .trim()
        .split(/\s+/)
        .map((word, index) => {
            word = word.toLowerCase();
            if (index === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join("");
}

console.log(toCamelCase("hello world example"));
console.log(toCamelCase("Convert THIS Sentence"));
console.log(toCamelCase("  extra   spaces   here "));
