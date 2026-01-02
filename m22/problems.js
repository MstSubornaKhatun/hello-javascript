// 12 inch 1 feet


function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

// const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight); // 6.25



// 75 inch = 6feet 3inch
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch '
    return result;

}

const shuvoHeight = inchToFeet2(75);
// console.log(shuvoHeight); // 6 ft 3 inch


// 1 mile  = 1.60934 km
function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

// const hello = mileToKilometer(1);
// console.log(hello); // 1.60934


const hello = mileToKilometer(12);
// console.log(hello); // 19.31208


function kilometerToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}

const conv = kilometerToMiles(1);
// console.log(conv); // 0.621371



function KilogramToGram(gram){
    const kilogram = gram * 1000;
    return kilogram;
}

const kg = KilogramToGram(5);
// console.log(kg); // 5000




// 3. Check whether a year is a Leap Year or not
// ### leap year 
// kichu kichu year a february month 29 days a hoi.


// eta solve korar duita way ache ekta simple arekta ektu hard

/*

simple logic:
oi year k 4 diye vaag kore jodi vaagses na thake tahole oi year k leap year bole.

year will be a leap year if the year is divisible by 4


*/ 

function isLeapYear (year){
    if(year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

const isLipi = isLeapYear(2024);
// console.log(isLipi); // true

/*
1. those year that is not divisible 
by 100 and if the year is divisible by 4: 
then it will be a leap year

je year gulo 100 diye vaag jai na,
 kintu 4 diye vaag kore jodi vaagses
  na thake tahole oi year k leap year 
  bole(4 diye bivajho ba 4 diye divisible)

2. if the year is divisible by 400, then it is a leap year
3. else it is not a leap year

*/


function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    } 
    // 100 and 400 diye vag jai = leap year
    // year % 100 === 0 && year % 400 === 0 niche 400 diye korbo tai 100 diye na korleo hobe.
    else if(year % 400 === 0){
        return true;
    }
    else {
        return false
    }
} 

const isLeap = isLeapYear2(2100);
const isLeap2 = isLeapYear2(2400);
const isLeap3 = isLeapYear2(1900);
const isLeap4 = isLeapYear2(2052);
const isLeap5 = isLeapYear2(2024);

// console.log(isLeap, isLeap2, isLeap3, isLeap4, isLeap5); // false true false true true


// ### Calculate the average of the odd numbers in an array
// odd-avarage -- bijor sonkha gulor gor


// // step - 1 : console.log(numbers) // [ 42, 13, 58, 65, 81 ]
// function oddAverage(numbers){
//     console.log(numbers) // [ 42, 13, 58, 65, 81 ]
// }

// const numbers = [42, 13, 58, 65, 81];
// const avg = oddAverage(numbers);
// console.log('average of the odd number is:', avg); // average of the odd number is: undefined


// // array theke number gulo thik moto paschi kina ata check korchi
// function oddAverage(numbers){
//     for(const number of numbers)
//         console.log(number);
//     /*
//     42
//     13
//     58
//     65
//     81
//     96
//     */
// }

// const numbers = [42, 13, 58, 65, 81, 96];
// const avg = oddAverage(numbers);
// console.log('avarage of the odd number is:', avg);




// array theke k odd upadan gulo age ber kore nibo for of loop diye
// function oddAverage(numbers){
//     for(const number of numbers) {
//         if(number % 2 === 1){
//             console.log(number)
//         }
//      }
//     /*
//     13
//     65
//     81
//     7
//     */
// }

// const numbers = [42, 13, 58, 65, 81, 96, 7];
// const avg = oddAverage(numbers);
// console.log('avarage of the odd number is:', avg);



/*
1. put odd numbers in an array
mane odd number gulo ekta array er modhe rekhe dibo.
const odds = [];
odds.push(number);
// */
// function oddAverage(numbers){
//     const odds = [];
//     for(const number of numbers) {
//         if(number % 2 === 1){
//             // console.log(number)
//             odds.push(number);
//         }
//     }
        // odds is the array that contains only the odd numbers
//     console.log(odds); // [ 13, 65, 81, 7 ]
// }

// const numbers = [42, 13, 58, 65, 81, 96, 7];
// const avg = oddAverage(numbers);
// console.log('avarage of the odd number is:', avg);


function oddAverage(numbers){
    const odds = [];
    for(const number of numbers) {
        if(number % 2 === 1){
            // console.log(number)
            odds.push(number);
        }
    }
    // odds is the array that contains only the odd numbers
    // console.log(odds); 
    let sum = 0;
    for (const number of odds){
        sum = sum + number;
    }
    // average ber korar jonno koita songkha ache atai ber korte hobe length diye.
    const count = odds.length;
    console.log(sum, count); // 166  4
    const avg = sum / count;
    return avg;
    
}

const numbers1 = [42, 13, 58, 65, 81, 96, 7];
const avg = oddAverage(numbers1);
console.log('average of the odd number is:', avg); // 41.5



// now you can try even numbers average




// ###5. Remove duplicate items from an array
/*
array has some duplicate elements
[]
*/




// function noDuplicate(array){
    //     console.log(array);
    // /*
    // [
        //   'abul',  'babul',
        //   'cabul', 'abul',
        //   'babul', 'dabul',
        //   'kabul', 'cabul'
        // ]
        // */    
        // }
        
        // const uniqueArray = noDuplicate(biryaniKhor);
        // console.log(uniqueArray)
        
        
        
const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];


function noDuplicate(array){
    const unique = [];
    for(const item of array){
        // console.log(item);
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique;
}

// const uniqueArray = noDuplicate(biryaniKhor);
// console.log(uniqueArray); // [ 'abul', 'babul', 'cabul', 'dabul', 'kabul' ]



const uniqueArray = noDuplicate(numbers);
// console.log(uniqueArray); // [ 1, 5, 61, 87, 7, 81 ]


//######## 
// 6. Math, abs, round, ceil, floor, and random number
// 3ta songkhar modhe boro sngkha taber korar easy way


// const Math = {
//     min: function min(num1, num2){
//         return num2;
//     }
// }
// ata korar dorkar nai.
// javascript already ai function gulo create kore rekheche.



// console.log(Math.max); // [Function: max]
// console.log(Math.min); // [Function: min]
// javascript already ai function gulo create kore rekheche.


const min= Math.min(45, 21, 65, 99, 126, 5, -99);
console.log(min); // -99

const max = Math.max(45, 21, 65, 99, 126, 5, -99);
console.log(max); // 126

console.log(Math.PI); //3.141592653589793

// minus thakleo +ve value dibe
console.log(Math.abs(-35))
console.log(Math.abs(35))



// purno number kore dei
console.log(Math.round(2.25)); // 2
console.log(Math.round(2.85)) // 3


console.log(Math.floor(2.85)) // 2
console.log(Math.floor(2.999995)) // 2
console.log(Math.ceil(2.5)) // 3
console.log(Math.ceil(2.00001)) // 3



// ekek somoi ekek ta random number dibe
console.log(Math.random()); // 0.3878596191600794
console.log(Math.random()*10); // 2.138792037778652
const rand = Math.round(Math.random()*10)
console.log(rand); // 7
console.log('---------------')

// ###########
// 7. A Simple introduction to JS Date and time


// 


const today = new Date(); 
console.log(today); //2026-01-02T00:31:08.475Z

const date = new Date('2062-10-19')
console.log(date.getMonth()) // 9
console.log(date.getDay()) // 4
const specificDate = new Date(2091, 0, 26); //year, index, tarikh
console.log(specificDate)
specificDate.setMonth(10); // month er index 10
console.log(specificDate); // 2091-11-25T18:00:00.000Z
console.log(specificDate.toLocaleString('en-GB')); 


/*
1974 saal theke aaj porhonto koto 
second hoyeche atao ber korte paro
eke bola hoi unix epoc


moment.js ata somporke porobortite
bistarito janbo.
*/




// ########
//8. Swap variable, swap without temp, destructing



// swap.js
let a = 5;
let b = 7;

console.log(a, b); // 5 7 


// a = b; // akhanei a er man 7 hoye geche
// b = a; // 

console.log(a, b); // 7 7 



// a er man harai jasche ata tik korar jonno

const temp = a; // a er man temp er modhe rekhe dichi
a = b;
b = temp;
console.log(a, b); // 7 5


// ------------------------
let x = 5; 
let y = 7; 

console.log(x, y); // 5 7
[x, y] = [y, x];
console.log(x, y); // 7 5




// #########################
// 9. Module Summary and where you need to focus

/*
problem solving ata ekdin a sikhba na.
github theke ==> js-problems-part1-practice-tasks

formula google theke dekho then function emplement korte hobe

*/
