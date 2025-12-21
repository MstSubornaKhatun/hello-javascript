// function declare
function fanOffKor(){
    console.log('bosa theke uthe dara');
    console.log('fan ar kache ja');
    console.log('click the switch off the phone');
}

// call the function
fanOffKor()

// // output 
// bosa theke uthe dara
// fan ar kache ja
// click the switch off the phone



console.log('---------------------------');
function brushTeeth(){
    console.log('pick up the brush');
    console.log('add paste');
    console.log('2 min goso and goso and fena felo');
}

brushTeeth();

// // output : 
// pick up the brush
// add paste
// 2 min goso and goso and fena felo


console.log('---------------------------');


function vaatKhao() {
    console.log('hand wash kore aso');
    console.log('boso');
    console.log('plate e khabar dhabar nao');
    console.log('gopat gopat kore khao');
}

vaatKhao();

// // output 
// hand wash kore aso
// boso
// plate e khabar dhabar nao
// gopat gopat kore khao


console.log('----------------------------');


// 3 --> 3*3 = 9
// 4 --> 4*4 = 16
// 5 --> 5*5 = 25
// 11 --> 11*11 = 121

function square(number) {
    console.log('value of the number parameter', number);
    const borgo = number * number;
    console.log('square of the given number is: ', borgo);
}
square(4);
square(30);
// output
// value of the number parameter 4
// square of the given number is:  16
// value of the number parameter 30
// square of the given number is:  900


console.log('-----------------------');


function add(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
}

add(5, 71); // 76
add(65, 31); // 96

function sum (x, y) {
    const result = x + y;
    console.log(result);
}

sum(2, 3); // 5

console.log('======================');


function addAll(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log(a, b, c, d, e);
    console.log(total);
}

addAll(3, 4, 6, 7);
// 3 4 6 7 undefined
// NaN
addAll(3, 4, 6, 7, 8);
// 3 4 6 7 8
// 28


console.log('--------------------------');
function doubleIt(number) {
    const doubled = number * 2;
    console.log(number, doubled);
}

doubleIt(8); // 8 16



console.log('-----------------------');


// // 
// function difference (num1, num2){
//     const diff = num1 - num2;
//     console.log(num1, num2, 'difference is', diff);
// }


function difference ( num1, num2){
    const diff = num1 - num2;
    console.log(diff);
}

difference(4, 1); // 3

const fatherAge = 43;
const myAge = 12;
difference(fatherAge, myAge); // 31


console.log('-----------------------------');
// /**
//  * for a given string tell me whether it has even number of characters or not
//  * anubad : একটা string (যেমন "hello", "sakib", "Bangladesh") দেওয়া হলে, সেটা কতগুলো character আছে সেটা গুনে দেখো, আর বলো সংখ্যাটা জোড় (even) নাকি বিজোড় (odd)।
//  * 
// */

// function checkEvenString(str) {
//     if (str.length % 2 === 0){
//         console.log('even');
//     }
//     else {
//         console.log('odd');
//     }
// }
// checkEvenString('hello'); // odd
// checkEvenString('nahima') // even

// // length → string-এর মোট character সংখ্যা দেয়।
// // % 2 === 0 → জোড় কিনা চেক করে।



function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
}

evenSizedString('Dhaka');
evenSizedString('faka');



function tenTimes (number) {
    const result = number * 10;
    return result;
}
tenTimes(54)