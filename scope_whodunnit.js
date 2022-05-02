// EPISODE 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);
// Predicted outcome is: 'Miss Scarlet'


// EPISODE 2

// const murderer = 'Professor Plum';

// // const changeMurderer = function() {
// //     murderer = 'Mrs. Peacock';
// // }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// // changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// Predicted outcome: comes up with an error as we can't change a const declared variable...
// Otherwise, the value of murderer is still Professor Plum

// EPISODE 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
// Predicted outcome:
// First console.log --> Mrs. Peacock
// Second console.log --> Professor Plum

// EPISODE 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);
// Predicted outcome:
// First console.log --> The suspects are Miss Scarlet, Professor Plum and Colonel Mustard.
// Second console.log --> Suspect three is Mrs. Peacock.

// EPISODE 5
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
// scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
// return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);
// Predicted outcome: The weapon is the Revolver.

// EPISODE 6
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

//     const plotTwist = function() {
//         murderer = 'Mrs. White';
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Predicted outcome: The murderer is Mrs. White.
// murderer is visible within changeMurderer and plotTwist, so the murderer thing updates the variable.

// EPISODE 7
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

//     const plotTwist = function() {
//         let murderer = 'Colonel Mustard';

//         const unexpectedOutcome = function() {
//             murderer = 'Miss Scarlet';
//         }

//         unexpectedOutcome();
//     }

//     plotTwist();
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Predicted outcome: The murderer is Mr. Green.
// Professor Plum changes to Mr Green when changeMurderer() runs
// A new murderer variable is defined within plotTwist and set to Colonel Mustard
// That changes to Miss Scarlet when unexpectedOutcome runs, but the original murderer variable is still set to Mr. Green

// EPISODE 8

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function(room) {
//         if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//         }

//         const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//             scenario.weapon = 'Candle Stick';
//         }
//         }

//         unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
// // Predicted outcome: Candlestick

// EPISODE 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Predicted outcome: The murderer is Professor Plum
// So here it's Professor plum because the murderer variable within the condition's {} is only visible within those.