/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!

const newID = oldID + 1000000000;

var ageIsValid = Number.isInteger(currentAge);

var randomNumber = Math.random() * 20;

var randomInteger = Math.floor(randomNumber);

var randomUserID = randomInteger + 1000000002;




// newID
// converts IDs from the old style to the new style ‣
// ageIsValid
// contains 'true' when the value in 'currentAge' is a valid integer ‣
// ReferenceError: ageIsValid is not defined
//     at Context.<anonymous> (test/indexTest.js:14:16)
// invokes 'Number.isInteger()' ‣
// AssertionError: expected false to be true
//     at Context.<anonymous> (test/indexTest.js:21:48)
// randomNumber
// contains a random number greater than or equal to 0 and less than 20 ‣
// ReferenceError: randomNumber is not defined
//     at Context.<anonymous> (test/indexTest.js:27:14)
// invokes 'Math.random()' ‣
// AssertionError: expected false to be true
//     at Context.<anonymous> (test/indexTest.js:33:43)
// randomInteger
// contains the value of 'randomNumber' rounded down to the nearest integer ‣
// ReferenceError: randomNumber is not defined
//     at Context.<anonymous> (test/indexTest.js:39:47)
// randomUserID
// contains a random integer between 1000000001 and 1000000020 ‣
// ReferenceError: randomUserID is not defined
//     at Context.<anonymous> (test/indexTest.js:47:31)