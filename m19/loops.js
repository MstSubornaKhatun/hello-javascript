// loop ==> ekoi kaj bar bar automatically kora jai.

// const : value will not change
// let : value can change
// var : we should not use it

// for...of loop
const numbers = [21, 12, 43, 45, 52, 64, 98];
for (const number of numbers) {
    console.log(number);
}
// // output:
// 21
// 12
// 43
// 45
// 52
// 64
// 98


// for...of loop : ata array ba iterable(string, set, Map) er protiti value eke eke ghure dekhar jonno use hoi.


const fruits = ["Apple", "Watermelon", "Papaya"];

for (const fruit of fruits) {
    console.log(fruit);
}
// // output 
// Apple
// Watermelon
// Papaya


// // while loop ==> ekta conditon true thaka porjonto code barbar calai. jotokhon condition true thakbe totokhon loop colte thakbe.


// while loop syntax

// initialization;
//     while(condition) {
//         // loop body
//         increment/decrement
//     }


// example
let count = 1;
while (count<=5){
    console.log(count);
    count++;
}
// 1
// 2
// 3
// 4
// 5

// loop suru hoyar age condition check kora hoi.
// jodi condition true hoi tahole code block calano hoi. 
// protibar code calanor por abar condition check kora hoi.
// jokhon condition false hoi tokhon loop themeee jai.

let i = 10;
while (i<=15) {
    console.log(i);
    i++;
}
// 10
// 11
// 12
// 13
// 14
// 15


console.log('-----------------');
// sum
let num = 1;
let sum = 0;

while(num<=10){
    console.log(num);
    sum = sum + num;
    console.log(sum);
    num++;
}
// 1
// 1
// 2
// 3
// 3
// 6
// 4
// 10
// 5
// 15
// 6
// 21
// 7
// 28
// 8
// 36
// 9
// 45
// 10
// 55
console.log('----------');
console.log(sum); // 55


// even mane jor sogkha. 2, 4, 6, 8, .....
let num5 = 1;
while (num5 <=10) {
    console.log(num5);
    if (num5 % 2===0){
        console.log("this is even number", num5);
    }
    num5++;
}
// 1
// 2
// this is even number 2
// 3
// 4
// this is even number 4
// 5
// 6
// this is even number 6
// 7
// 8
// this is even number 8
// 9
// 10
// this is even number 10


let num6 = 1;
while (num6<=10) {
    console.log(num6);
    if(num6 % 2 === 1) {
        console.log("this is odd number", num6);
    }
    num6++;

}
/*
1
this is odd number 1
2
3
this is odd number 3
4
5
this is odd number 5
6
7
this is odd number 7
8
9
this is odd number 9
10
*/
console.log('------------');

// //for loop
// for (initialization; condition ; update/increment/decrement){
//     // loop statement
// }


for (let i= 1; i<=5; i++){
    console.log(i);
}
/*
1
2
3
4
5
*/

for (let i = 5; i>=0; i--){
    console.log(i);
}

/*
5
4
3
2
1
0
*/


// for loop holo ek line a while loop er sogkhipto rup.
// for loop is compact version of while loop.


console.log('----');
// odd number
// for loop
for (let i = 1; i<=5; i++) {
    // console.log(i);
    if (i%2===1){
        console.log(i);
    }
}

console.log('-----');
// odd number = %2!==0
// for loop
for (let i = 0; i<=5; i++){
    if (i%2!==0){
        console.log(i);
    }
}

/*
1
3
5
*/

console.log('---');

for (let i = 1; i < 20; i++){
    console.log(i);
}

console.log('---');
// given me the numbers  between 1 to 30 divisible by 5. (n%5===0)

for (let i = 1; i <= 30; i++) {
    if (i % 5===0){
        console.log(i);
    }
}
/*
5
10
15
20
25
30
*/
console.log('---');

// 5 and 3 dara divisible 
for (let i = 1; i <= 50; i++){
    if(i%5===0 && i % 3 ===0){
        console.log(i);
    }
}

// 15
// 30
// 45

console.log('--');

// given me the sum of numbers from 1 to 20 that are divisible by 3.
let total = 0;
for (let i = 1; i <=20; i++){
    if(i%3===0){
        // console.log(i);
        total = total + i;
        // console.log(total);
    }
}
console.log(total); // 63



// break ==> break use korle loop puropuro off hoye jai.
// continue ==> continue use korle current iteration ta only skip hoi



// break 
for (let i = 0; i <= 10; i++){
    console.log(i);
    if(i>=5){
        break
    }
}

// 0
// 1
// 2
// 3
// 4
// 5


console.log('---');


let n = 54;
while (n>25){
    // console.log(n); // 54 53 52 51 50 49
    if (n<50){
        break;
    }
    console.log(n); // 54 53 52 51 50


    n--;
}
console.log('---');
// continue
let nn = 0;
while (nn <15){
      nn++;
    if (nn%5!==0){
        continue;
    }
    console.log(nn);
  
}
// 5
// 10
// 15

console.log('--');

for (let number = 0; number <=10; number++) {
    if ( number == 5){
        break;
    }
    console.log(number);
}

// 0
// 1
// 2
// 3
// 4




console.log('--');

for (let number = 0; number <=10; number++) {
    if ( number == 5){
        continue;
    }
    console.log(number);
}
// 0
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

// break and continue loop er vitore use kora hoi. loop er propaho niyontron er jonno.
// break ===> sompurno thamiye dei
// continue ===> loop thamai na, present iteration skip kore.

console.log('----------------------');
// do-while loop --> almost use korbo na
let nu = 0;
do {
    console.log(nu);
    nu++;
} while( nu<5)
// 0
// 1
// 2
// 3
// 4
