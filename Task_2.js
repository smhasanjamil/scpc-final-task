// Task 2
// Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
// Example Input: [2, -5, 10, -3, 7] Example Output: 19

const sumPositive = (arr) => {
    let sum = 0;
    for (let num of arr) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
};

const input = [-2, 5, 10, -3, 8, 2];
const output = sumPositive(input);
console.log(output);