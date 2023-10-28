// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

function removeAndShuffle(arr) {
    if (arr.length < 2) {
      return arr;
    }
  
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  
    return arr;
  }
  
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

const colors1 = ["purple", "blue", "green", "yellow", "pink"];
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"];

const shuffledColors1 = removeAndShuffle([...colors1]);
const shuffledColors2 = removeAndShuffle([...colors2]);

console.log(shuffledColors1); 
console.log(shuffledColors2); 

// Pseudo code:
// I started with an if statement to get the array length.
// Used a for loop to shuffle the elements.
// Then returned the array.
// The console.log prints the shuffled colors in random order.


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

function calculateTally(votes) {
    return votes.upVotes - votes.downVotes;
  }  

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

test('calculateTally - votes1', () => {
    expect(calculateTally(votes1)).toBe(11);
  });
  
  test('calculateTally - votes2', () => {
    expect(calculateTally(votes2)).toBe(-31);
  });

// Pseudo code:
// Created the function calculateTally with the votes parameter.
// The function calculates the tally by subtracting downvotes from upvotes.
// The "expect" statement is used to check the output.