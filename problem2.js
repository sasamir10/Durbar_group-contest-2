function countEvenOdd(numbers) {
    const result = { even: 0, odd: 0 };

    for (const num of numbers) {
        if (num % 2 === 0) {
            result.even++;
        } else {
            result.odd++;
        }
    }

    return result;
}

console.log(countEvenOdd([1, 2, 3, 4, 5, 6]));
console.log(countEvenOdd([10, 15, 20, 25]));
console.log(countEvenOdd([]));
