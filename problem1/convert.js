// 1. Variable
// null ==> icha korei value deoya nai
// undefined ==> value nai 
// null, undefined, number, string, boolean ==> primitive
// array, object ==> non-primitive 


// 2. conditionals
// compare kora ===> >, <, >=, <=, ===, !==, &&, ||

// if(condition) {
//     true
// }
// else{
//     false
// }


// 3. array 
/*

[32, 43, 43, 23, 43, 54, 45]

index suru hoi ===> 0 diye
index 1, 1 kore barte thake
0, 1, 2, 3, 4, 5

number[3] ====> 3 no ar value ta pabo
number[3] = 43;
push
pop
includes ===> array ar modhe ache kina seta check kore




4. while

for...........of
while
for(let i=0; i<0; i++)
break 
continue


5. object
const person = {
property : value;
}
dot notation
braketnotation


for...in loop for object

6. function name (){

}

jokhon function k call korle kono ekta value paoya jai tokhon raturn korbo.


const ===> array and object ar upadan change korte parba na tob etore property add ba remove korte parba.
let ==> value change korte parbe.


*/


// 12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

// ignore this one
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.'
    return result;
}

const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);
const shuvoHeight2 = inchToFeet2(75);
// console.log(shuvoHeight2)

function mileToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}

function kiloMeterToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}