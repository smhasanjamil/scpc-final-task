// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const mostFrequent = (arr) => {
    const freq = {};
    let maxFreq = 0;
    let mostFreq;

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxFreq) {
            maxFreq = freq[num];
            mostFreq = num;
        }
    }

    return mostFreq;
};

const input = [2, 5, 2, 2, 5, 3, 3, 1, 4, 5];
const output = mostFrequent(input);
console.log(output); 