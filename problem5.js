function secondLargest(numbers) {
    // Get unique values using a Set
    const unique = [...new Set(numbers)];

    if (unique.length < 2) {
        return null;
    }

    // Sort descending and pick the second element
    unique.sort((a, b) => b - a);

    return unique[1];
}

console.log(secondLargest([5, 3, 9, 1, 9, 5]));
console.log(secondLargest([1, 1, 1]));
console.log(secondLargest([10]));
console.log(secondLargest([4, 4, 4, 2]));
console.log(secondLargest([]));
console.log(secondLargest([7, 2, 9, 9, 4]));
