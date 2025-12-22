// 12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}


const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight); // 6.25


// adv
console.log('--------');
// ignore this one
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.'
    return result;
}
const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2) // 6 ft 3 inch.



function mileToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const x = mileToKilometer(323);
console.log(x); // 519.81682


function kiloMeterToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
const y = kiloMeterToMiles(321);
console.log(y); // 199.460091


// leep year
/**
 * SIMPLE LOGIC:
 * year will be e leap year if the year is divisible by 4
*/

function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isLipi = isLeapYear(2052);
console.log(isLipi); // true


console.log('----------------------------');



/**
 * 1. those year that is not divisible by 100 and if the year is divisible by 4: then it will be a leap year
 * 2. if the year is divisible by 400, then it is a leap year
 * 3. else it is not a leap year
*/

function isLearYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 400 === 0) {
        return true
    }
    else {
        return false;
    }
}

const isLeap = isLearYear2(2100);
const isLeap2 = isLearYear2(2400);
const isLeap3 = isLearYear2(1900);
const isLeap4 = isLearYear2(2052);
console.log(isLeap, isLeap2, isLeap3, isLeap4); // false true false true



console.log('---------------------------');
//odd-average

/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
*/

/**
 * 1. put odd numbers in an array
*/

function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            // console.log(number);
            odds.push(number);
        }
    }
    // odds is the array that contains only the odd numbers 
    // console.log(odds)
    let sum = 0;
    for (const number of odds) {
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}

const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is: ', avg);
// 166 4
// average of the odd numbers is:  41.5