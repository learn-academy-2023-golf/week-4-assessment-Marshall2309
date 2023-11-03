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

test('removeAndShuffle - colors1', () => {
  const shuffledColors1 = removeAndShuffle([...colors1]);
  expect(shuffledColors1).toContain("yellow");
  expect(shuffledColors1).toContain("blue");
  expect(shuffledColors1).toContain("pink");
  expect(shuffledColors1).toContain("green");
  expect(shuffledColors1).toHaveLength(4);
});

test('removeAndShuffle - colors2', () => {
  const shuffledColors2 = removeAndShuffle([...colors2]);
  expect(shuffledColors2).toContain("chartreuse");
  expect(shuffledColors2).toContain("indigo");
  expect(shuffledColors2).toContain("periwinkle");
  expect(shuffledColors2).toContain("ochre");
  expect(shuffledColors2).toContain("aquamarine");
  expect(shuffledColors2).toContain("saffron");
  expect(shuffledColors2).toHaveLength(6);
});

//Pseudo Code
// In this test file, we first define the removeAndShuffle function and create two arrays, colors1 and colors2.
// Then, we use Jest's test function to define two separate tests.
// In the first test, we call removeAndShuffle with colors1 and check if the shuffled array contains the expected elements and has the correct length.
// In the second test, we do the same for colors2. These tests verify if the function behaves as expected for both cases.

// b) Create the function that makes the test pass.
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


const colors1 = ["purple", "blue", "green", "yellow", "pink"];
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"];

const shuffledColors1 = removeAndShuffle([...colors1]);
const shuffledColors2 = removeAndShuffle([...colors2]);

console.log(shuffledColors1); 
console.log(shuffledColors2); 

// Pseudo code:
// I started with an if statement to get the array length for the entire constant.
// Used a for loop to shuffle the elements inside of both constants so they would print randomly in the console.log.
// I used arr in the return to ensure that something would return when shuffledColors 1 and 2 were console.logged.
// The console.log printed the shuffled colors in random order.


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

test('calculateTally - votes1', () => {
  expect(calculateTally(votes1)).toBe(11);
});

test('calculateTally - votes2', () => {
  expect(calculateTally(votes2)).toBe(-31);
});

// b) Create the function that makes the test pass.

  function calculateTally(votes) {
    return votes.upVotes - votes.downVotes;
  }  

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// Pseudo code:
// In this test file, I first defined the calculateTally function.
// Then I have two objects votes1 and votes2 which represent different sets of votes.
// I used Jest's test function to define two separate tests.
// In the first test I called calculateTally with votes1 and used expect along with toBe to check if the function returns the expected output, which is 11.
// In the second test, we do the same for votes2. These tests verify that the function behaves as expected for both cases.
// For the function, I created the function calculateTally with the votes parameter.
// The function calculates the tally by subtracting downvotes from upvotes.
// The expect statement is used to check the output.