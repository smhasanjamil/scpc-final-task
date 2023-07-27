// Task 6
// Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generatePassword = (length) => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_-+=[]{}|:;<>,.?';

    const allChars = uppercase + lowercase + numbers + specialChars;

    let password = '';

    for (let i = 0; i < length; i++) {
        const randIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randIndex);
    }

    return password;
};

const length = 8;

const randomPassword = generatePassword(length);
console.log(randomPassword);