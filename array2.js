/**
 * LOOPING Technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 * 
*/

const friends = ['Elon', 'Bill', 'Mark', 'Waren'];

for (const friend of friends) {
    // console.log(friend);
}

for (let i = 0; i < friends.length; i++) {
    // console.log(i);
    // console.log(friends[i]);
}


const numbers1 = [5, 23, 456, 421, 25, 4512, 54541, 21, 45, 6]

for (let i = 0; i < numbers1.length; i++) {
    // console.log(numbers1[i]);
}

let i = 0;
while(i < friends.length){
    // console.log(friends[i]);
    i++;
}

let n = 0;
while(n < numbers1.length){
    console.log(numbers1[n])
    n++;
}

// reverse
//              [7, 6, 5, 4, 3, 2, 1]
const numbers = [1, 2, 3, 4, 5, 6, 7];

// console.log(numbers);
// const reversed = numbers.reverse();
// console.log(reversed);


const rev_numbers = [];

for (const num of numbers) {
    // console.log(num);
    rev_numbers.unshift(num);
}
// console.log(rev_numbers);

const reversed_numbers = [];
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    reversed_numbers.unshift(num);
}

// decremental for loop
const rev_rev_numbers = []; 
for (let i = numbers.length -1 ; i >=0; i--){
    const num = numbers[i];
    console.log(num);
    rev_rev_numbers.push(num);
}
console.log(rev_rev_numbers);


// sort
const persons = ['rakib', 'nokib', 'sakib', 'akib', 'Pakib', 'anis', 'Anis'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

// sort --> 
// const numbers = [4, 7, 2, 8, 3, 6];
/* 
Ascending ----> smaller to larger: [2, 3, 4, 6, 7, 8]
Descending --> larger to smaller:  [8, 7, 6, 4, 3, 2]
*/
const numbers3 = [4, 7, 12, 8, 43, 6, 1];
// const numbers3_asc = numbers3.sort() // not working
const numbers3_asc = [...numbers3].sort(function (a, b) { return a - b })
const numbers3_dsc = [...numbers3].sort(function (a, b) { return b - a })

console.log(numbers3_asc);
console.log(numbers3_dsc);