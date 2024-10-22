// TODO: Implement the password generation logic based on user input
const lengthInput = document.getElementById('length');
const includeUppercaseCheckbox = document.getElementById('includeUppercase');
const includeLowercaseCheckbox = document.getElementById('includeLowercase');
const includeNumbersCheckbox = document.getElementById('includeNumbers');
const includeSpecialCharsCheckbox = document.getElementById('includeSpecialChars');
const generateBtn = document.getElementById('generateBtn');
const passwordOutput = document.getElementById('passwordOutput');
const copyBtn = document.getElementById('copyBtn');

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let charSet = '';
    if (options.includeUppercase) charSet += uppercase;
    if (options.includeLowercase) charSet += lowercase;
    if (options.includeNumbers) charSet += numbers;
    if (options.includeSpecialChars) charSet += specialChars;

    if (charSet.length === 0) return ''; // No character sets selected

    let password = '';
    for (let i = 0; i < length; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    // TODO: Create a variable for the character set based on selected options

    // TODO: Generate the password based on the selected criteria
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
generateBtn.addEventListener('click', () => {
    const length = parseInt(lengthInput.value);
    const options = {
        includeUppercase: includeUppercaseCheckbox.checked,
        includeLowercase: includeLowercaseCheckbox.checked,
        includeNumbers: includeNumbersCheckbox.checked,
        includeSpecialChars: includeSpecialCharsCheckbox.checked,
    };

    const password = generatePassword(length, options);
    passwordOutput.textContent = password;
});
// BONUS: Implement the copy to clipboard functionality
copyBtn.addEventListener('click', () => {
    const password = passwordOutput.textContent;
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            alert('Password copied to clipboard!');
        });
    } else {
        alert('Please generate a password first.');
    }
});

