/*
array-looping-tasks
Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
*/

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// use reverse method
// console.log(colors.reverse()); // [ 'orange', 'yellow', 'green', 'blue', 'red' ]


const reversedColors = [];
for (let i = colors.length - 1; i >= 0; i--) {
    reversedColors.push(colors[i]);
}

console.log(reversedColors);
// [ 'orange', 'yellow', 'green', 'blue', 'red' ]





/*

Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]
*/

const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];


for (const num of numbers) {
    if (num % 2 === 0) {   // if num k 2 diye vaag korle vaag sesh 0 hoi → even
        evenNumbers.push(num);
    }
}

console.log(evenNumbers); // [ 12, 98, 78, 46 ]


/*
Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
*/



var numbers2 = ['Tom', 'Tim', 'Tin', 'Tik'];
let result = "";

for (const name of numbers2) {
    result += name;   // every name result er sathe jog hosche
}

console.log(result); //TomTimTinTik





/*
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/

const statement = 'I am a hard working person';
const words = statement.split(" ");   // bakko k word array banalam
const reversedWords = [];

for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i]);     // sesh theke suru kore every word push korlam
}

const res = reversedWords.join(" "); // again string banailam
console.log(res); // person working hard a am I


/*
Task 5
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

Input: [1, 2, 3]

Expected Output:

Original: [1, 2, 3] Copy: [99, 2, 3]
*/


const original = [1, 2, 3];
const copy = [];

for (let i = 0; i < original.length; i++) {
    copy[i] = original[i];   // every element alada kore copy kora
}

// copy er prothom element change kora holo
copy[0] = 99;

console.log("Original:", original);
console.log("Copy:", copy);


// Original: [ 1, 2, 3 ]
// Copy: [ 99, 2, 3 ]



/*
Task 6
Given an array of student objects, print each student’s name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
Expected ooutput:
John scored 85
Alice scored 90

*/
console.log('-----------')
const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];

for (const student of students) {
  console.log(`${student.name} scored ${student.marks}`);
}

// John scored 85
// Alice scored 90

/*
Task 7
Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
Expected Array:

[
  [1, 2],
  [99, 4],
  [5, 6]
]

*/

let arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

// second row (index 1), prothom item (index 0) = 99
arr[1][0] = 99;

console.log(arr); // [ [ 1, 2 ], [ 99, 4 ], [ 5, 6 ] ]



