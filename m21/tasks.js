/*
Simple function Related Practice Tasks
Task-1
Take four parameters. Multiply the four numbers and then return the result

Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
*/

/*
Simple function Related Practice Tasks
Task-1
Take four parameters. Multiply the four numbers and then return the result
চারটা parameter নিতে হবে, তারপর চারটা সংখ্যাকে গুণ করে result return করতে হবে।
*/


function multiplyFour(a,b,c,d){
    return a * b * c * d;
}
console.log(multiplyFour(3,4,6,9)); // 648

/*
Simple function Related Practice Tasks
Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


*/


function theNumber(number){
    if(number%2===1){
        return (number *2);
    }
    else {
        return (number / 2);
    }
}

console.log(theNumber(7)); // Odd → 14
console.log(theNumber(8)); // Even → 4




/*
Simple function Related Practice Tasks
3. Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

*/

function make_avg(arr, size) {
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += arr[i];   // every element joog kora hosche
    }
    return sum / size;   // average ber kora hosche
}


let numbers = [10, 20, 30, 40, 50];
console.log(make_avg(numbers, numbers.length)); // Output: 30
/*
Step by Step ব্যাখ্যা
Parameter arr → এটা হলো সংখ্যার array (যেমন [10, 20, 30, 40])

Parameter size → array-এর length (কতগুলো সংখ্যা আছে)

উদাহরণ: [10, 20, 30, 40] → size = 4

sum বের করা

লুপ চালিয়ে প্রতিটি সংখ্যা যোগ করা হয়।

sum += arr[i] মানে → sum = sum + arr[i]

Average বের করা

Average = (সব সংখ্যা যোগফল) ÷ (সংখ্যার পরিমাণ)

কোডে → return sum / size

উদাহরণ দিয়ে বোঝা
ধরা যাক array = [10, 20, 30, 40]

size = 4

sum = 10 + 20 + 30 + 40 = 100

average = 100 ÷ 4 = 25

👉 Output হবে: 25
*/



/*
Simple function Related Practice Tasks
Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

*/

function count_zero(binaryString) {
    let count = 0;
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '0') {
            count++;
        }
    }
    return count;
}

// Example usage
console.log(count_zero("1010010")); // Output: 4
console.log(count_zero("1111"));    // Output: 0
console.log(count_zero("0000"));    // Output: 4
/*
ধাপে ধাপে ব্যাখ্যা
1. Function Declaration
javascript
function count_zero(binaryString) {
এখানে আমরা একটা function বানালাম নাম count_zero।

এটা parameter হিসেবে একটা string নেবে → যেটা শুধু 0 আর 1 দিয়ে তৈরি (binary string)।

2. Variable Initialization
javascript
let count = 0;
আমরা একটা variable count বানালাম।

শুরুতে এর মান 0 → কারণ এখনো কোনো 0 পাইনি।

3. Loop চালানো
javascript
for (let i = 0; i < binaryString.length; i++) {
এখানে আমরা for loop ব্যবহার করেছি।

i = 0 থেকে শুরু করে i < binaryString.length পর্যন্ত চলবে।

মানে string-এর প্রতিটি character একে একে দেখা হবে।

4. Condition Check
javascript
if (binaryString[i] === '0') {
    count++;
}
প্রতিটি character চেক করা হচ্ছে।

যদি character '0' হয় → তাহলে count এক বাড়ানো হবে।

count++ মানে → count = count + 1

5. Return Result
javascript
return count;
লুপ শেষ হলে মোট কয়টা 0 পাওয়া গেছে সেটা return করবে।

6. Example Usage
javascript
console.log(count_zero("1010010")); // Output: 4
console.log(count_zero("1111"));    // Output: 0
console.log(count_zero("0000"));    // Output: 4
এখানে আমরা function কে call করেছি।

"1010010" → এতে 4টা 0 আছে → Output: 4

"1111" → কোনো 0 নেই → Output: 0

"0000" → সবগুলোই 0 → Output: 4
*/


/*

Simple function Related Practice Tasks
Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
*/

function odd_even(number) {
    if (number % 2 === 0) {   // ভাগশেষ 0 হলে Even
        return "Even";
    } else {                  // ভাগশেষ 1 হলে Odd
        return "Odd";
    }
}

// Example usage
console.log(odd_even(10)); // Output: "Even"
console.log(odd_even(7));  // Output: "Odd"
console.log(odd_even(0));  // Output: "Even"
/*
ধাপে ধাপে ব্যাখ্যা
1. Function Declaration
javascript
function odd_even(number) {
আমরা একটা function বানালাম নাম odd_even।

এটা parameter হিসেবে একটা সংখ্যা নেবে → যেমন 10 বা 7।

2. Condition Check
javascript
if (number % 2 === 0) {
    return "Even";
} else {
    return "Odd";
}
% হলো modulus operator → ভাগশেষ বের করে।

Even সংখ্যা → 2 দিয়ে ভাগ করলে ভাগশেষ সবসময় 0 হয়।

Odd সংখ্যা → 2 দিয়ে ভাগ করলে ভাগশেষ সবসময় 1 হয়।

👉 তাই আমরা চেক করছি:

যদি number % 2 === 0 → return "Even"

নাহলে return "Odd"

3. Example Usage
javascript
console.log(odd_even(10)); // Output: "Even"
console.log(odd_even(7));  // Output: "Odd"
console.log(odd_even(0));  // Output: "Even"
odd_even(10) → 10 % 2 = 0 → Even

odd_even(7) → 7 % 2 = 1 → Odd

odd_even(0) → 0 % 2 = 0 → Even
*/