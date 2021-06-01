// ## `lock-box.js`

// You've been contracted to write the software for a lock box. 

// Write a program called `lock-box.js` that stores the pin code to the lock box in a variable at the top of your program (i.e.: `const pinCode = '1234';`). 

// After that, use `prompt-sync` to prompt the user for the passcode. If the user gets the passcode exactly correct, log a success message containing the word, "success". If not, log a failure message containing the word, "failure".

const pinCode = '1234'
const numPinCode = Number(pinCode)


const prompt = require('prompt-sync')();
const userAttempt = prompt('What do you think the numerical pin is?   ');

const numUserAttempt = Number(userAttempt)