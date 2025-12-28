// loop r function er modhe parthokko ki?
// Loop = repetition tool
// Function = reusable block of code
// loop barbar kaj calai, r function code k block a rekhe shudhu call korle calai.


// // syntax
// function name (){

// }
// // call the function
// name()


// function syntax
function sum (x, y){
    const result = x+y;
    return result;
}
const total = sum(4,5);
console.log(total); // 9


function square(number){
    const result = number * number;
    return result;
}
const total3 = square(9);
console.log(total3); // 81




function add (num1, num2){ // num1 and num2 parameter 
    const sum = num1 + num2; 
    console.log(sum); 
}
add(5,4)// 9 // 5 and 4 argument
add(2) // NaN --> undefined


function doubleIt (number){
    const doubled = number * 2;
    console.log(number, doubled);
}
console.log('I will call the function.')
doubleIt(10);  // 10 20

const num = 45;
doubleIt(num); // 45 90

const money = 12; 
doubleIt(money);  // 12 24


function difference (num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is :', diff);
}
difference(50, 20); // 30
difference(10, 5); // 5
// 50 20 difference is : 30
// 10 5 difference is : 5


const fatherAge = 54;
const myAge = 23;

difference(fatherAge, myAge); // 54 23 difference is : 31

// return
// return kono function theke result ba value aire pathai, jate seta pore use kora jai.

/*
return holo function er vitore value baire pathaanor keyword. anno jaigai use kora jai.


r console.log ==> shudhu screen a dekhai.

*/


function tenTimes (number){
    const result = number * 10; 
    return result;
}

const output = tenTimes(10);
console.log(output); // 100

const bigNumber = tenTimes(99);
console.log(bigNumber); // 990

function cutHalf(number) {
    const half = number / 2;
    return half;
}
const halfNumber = cutHalf(40);
console.log(halfNumber); // 20
const anotherHalf = cutHalf(45);
console.log(anotherHalf); //22.5

function add (price1, price2){
    const total = price1 + price2;
    return total;
}
const bill = add(30, 30);
console.log(bill); //60


function add2 (price1, price2){
    return price1 + price2;
}
const bill2 = add2(40, 10)
console.log(bill2);// 50


function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;

    return result;
}

const result = doMath(10, 5);
console.log(result); // 37.5

//conditional return 
function isEven (number){
    if(number%2===0){
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(5)); // false
console.log(isEven(10)); // true


// various-params
function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0){
        console.log('even size')
        return true;
    } else {
        return false;
    }
}
console.log(evenSizedString('dhaka'));
console.log(evenSizedString('faka'));

// dhaka 5
// false
// faka 4
// even size
// true


function doubleOrTriple (number, doDouble){
    if(doDouble===true){
        const result = number * 2;
        return result;
    } else  {
        const result = number * 3;
        return result;
    }
}
console.log(doubleOrTriple(5, true)); // 10
console.log(doubleOrTriple(5, false)); // 15



function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

console.log(numberOfElements([12, 42, 2, 32, 56, 13, 31, 90])); // Output: 8


function getAge(person){
    const age = person.age;
    return age;
}

const student = { name: "Mst.", age: 21 };

console.log(getAge(student)); // Output: 21



//array-operation
// function er modhe return na korle undefined return kore.

// object: write a function to give me the sum of all numbers in an array ---

function sumOfNumbers(numbers){
    let sums = 0;
    for (const number of numbers){
        sums = sums + number;
    }
    return sums;
}

const numbs = [4, 5, 12, 34];
const sums = sumOfNumbers(numbs);
console.log('--')
console.log(sums); // 55




// even only 
// create function that will return only even numbers.
// return the sum of even numbers 


function evenNumbersOnly(numbers) {
    let evens = [];   // only even number rakhar jonno
    let sum = 0;      // even sogkhar jogfol rakhar jonno

    for (const num of numbers) {
        if (num % 2 === 0) {   // even check
            evens.push(num);   // array-te jog kora
            sum += num;        // jogfol hisab kora
        }
    }

    return { evens, sum }; // 
}

const numbers = [12, 43, 54, 44, 76, 34, 56];
const resu = evenNumbersOnly(numbers);

console.log('even numbers are:', resu.evens); // [12, 54, 44, 76, 34, 56]
console.log('sum of even numbers:', resu.sum); // 276
// even numbers are: [ 12, 54, 44, 76, 34, 56 ]
// sum of even numbers: 276




console.log('-------')
function calculateEvenSum(values) {
    let totalEvenSum = 0;
    for (const val of values) {
        if (val % 2 === 0) {        // even check
            console.log(val);       // even sogkha print
            totalEvenSum += val;    // jogfol hisab
        }
    }
    return totalEvenSum;            // 
}

const dataSet = [4, 5, 12, 34];
const resultSum = calculateEvenSum(dataSet);
console.log('Sum of even numbers:', resultSum); // Output: 50



// function in js --> A hock of code
// --> A set of statements (subsprogram/block of code) that performance a task when it is called. 
// --> Maintains a relationship with input and output 
//////// Function mane holo code er ekta blck, যেটা call call korle kaj kore r input niye output dei.


// function syntax
function sum (x,y){ // (function - function keyword), (sum - function name), (x,y - parameters list)
  
    var s = x + y; //| function body
    return s;      //| function body 

}
result = sum (4,5); //(sum - function call), (4,5 - argument list)


// function parameter, function, return




