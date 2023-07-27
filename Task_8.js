// Task 8 
// Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const secondSmallest = (arr) => {
    if (arr.length < 2) {
        return 'Array must have at least two elements';
    }

    let min1 = Infinity;
    let min2 = Infinity;

    for (let num of arr) {
        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2 && num !== min1) {
            min2 = num;
        }
    }

    return min2 === Infinity
        ? 'No second smallest element found'
        : min2;
};

const input = [5, 2, 9,  7, 3, 8];
const output = secondSmallest(input);
console.log(output);   