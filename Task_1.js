// Task 1
// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
// Example Input: "hello world" Example Output: "dlrow olleh"

const reverse = (str) => {
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
};

const input = "hasan jamil";
const output = reverse(input);
console.log(output);
