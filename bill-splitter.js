// ## `bill-splitter.js`

// You've once again been contracted to write a program, this time for an app that helps two people split a bill at a restaurant evenly.

// Write a program called `bill-splitter.js` that prompts the user for how much Person 1 paid, then for how much Person 2 paid. It should then log out the message, 'Person 1 owes $_____' or 'Person 2 owes $_____' depending on who owes who.

const prompt = require('prompt-sync');

const per1 = prompt('How much did person 1 pay?')
const numPer1 = Number(per1);

const per2 = prompt('How much did person 2 pay?')
const numPer2 = Number(per2);

if (numPer1 === numPer2) {
    console.log('Looks like it is an even split!')
} else {
    const diff = math.abs(numPer1 - numPer2);
    console.log(' It looks like there is a difference of ', diff, ' between the two people');
    if (Math.sign(numPer1 - numPer2) = -1) {
        console.log('Person 1 owes ,', diff, ' to Person 2')
    } else {
        console.log('Person 2 owes ,', diff, ' to Person 1')
    }
}