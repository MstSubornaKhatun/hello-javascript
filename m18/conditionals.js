/*
compare variable = variable k anno value er sathe tulona kora.
comparison operators = sei tulona korar jonno uses cinho.
*/

let number = 20;
console.log(number > 18); // true

/*
akhane number namer variable k 18 er sathe tulona kora hoyeche. and > ata comparison operator.

*/

// Oparetors - Meaning 
/*
>           greater than
<           less than
<=          less than or equal
>=          greater than or equal
==          equal (value check)
===         string equal (value + type check)
!=          not equal
!==         string not equal 

*/





//1. > (greater than)

console.log(10 > 5);   // true
console.log(3 > 7);    // false


//2. < (less than)
console.log(4 < 9);    // true 
console.log(8 < 2);    // false 



//3. <= (less than or equal)

console.log(5 <= 5);   // true
console.log(4 <= 6);   // true
console.log(7 <= 3);   // false


//4. >= (greater than or equal)

console.log(10 >= 10); // true
console.log(12 >= 8);  // true
console.log(6 >= 9);   // false


//5. == (equal → only value check)

console.log(5 == '5');   // true same value but ignore type
console.log(7 == 7);     // true 
console.log(8 == '8');   // true string '8' a number a convert kore


//6. === (strict equal → value + type check)

console.log(5 === '5');  // false (value same but type different → number vs string)
console.log(7 === 7);    // true (value and type same → number)
console.log('8' === '8'); // true (value and type same → string)



//7. != (not equal → only value check)

console.log(5 != '5');   // false (value same but type different)
console.log(10 != 7);    // true (value different)


//8. !== (strict not equal → value + type check)

console.log(5 !== '5');  // true (value same but type different → number vs string)
console.log(10 !== 7);   // true (value different)
console.log(8 !== 8);    // false (value and type same)

// choto < boro

console.log('----------------------');


// if else syntax
// // if-else

// if (10 > 5) {
//     //teue
// }
// else {
//     // false
// }

if (10>5){
    console.log("5 er ceye 10 boro");
} 
else {
    console.log("10 ar cheye 5 boro");
}
// 5 er ceye 10 boro

//conditional statement
let age = 18;
if (age >= 18){
    console.log("adult");
} else {
    console.log("minor");
}
// adult


// Nested if-else
    let age2 = 20;
    let hasID = false;

    if (age2>=10){
        if(hasID){
            console.log("allow to enter");
        } else {
            console.log("id nai, akhn enter kora jabe na");
        }
    } else {
        console.log("under age");
    }
    // id nai, akhn enter kora jabe na

    // kono sorto true ba false tar upor vitti kore vinno vinno code run korake conditional branching bole. ata korte if-else use kora hoi.
    
    
   


/*
if ==> first check 
else if ==> proroborti check 
else ==> all false hole
*/ 

// multiple condition logical operators (&&, ||)
// LOGICAL AND (&&)
// duita sorto true hole, tobei true hobe.
// ekta sorto false hole all result false hobe.


let a = 20;
let b = 10;

if (20<=a && 9<b){
    console.log("Hello");
} else {
    console.log("Bye");
}
// Hello

//LOGICAL OR (||)
// jekono ekta sorto true holei result true hobe .
// duitai false hole tobei false hobe.

let isWeeked = true;
let isHoliday = false;

if (isWeeked || isHoliday) {
    console.log("You can relax today.");
}
else {
    console.log("bye");
}
// You can relax today.


 let marks = 80;

    if (marks>=80) {
        console.log("A+");
    } else if (marks>=70) {
        console.log("B");
    } else if (marks>=60){
        console.log("C");
    } else if (marks>=50){
        console.log("D");
    } else {
        console.log("pass");
    }
    // A+

// ektar por ekta onek sorto dharabahik vabe check korte multi-level if else use kora hoi.


// Nested if else condition
// ekta if ba else er modhe arekta if-else use kora 


let year = 2029;
let isVerify = true;

if (year <=2030){
    if(isVerify) {
        console.log("Better");
    } else {
        console.log("Good");
    }
    
} else {
    console.log("not bad");
}
// Better

console.log('---------------');


// if else shorthand ternary operator
// condition ? do something true ? do something false 


let x = 20;

let result = x<30 ? "hello" : "bye";
console.log(result); // hello



let isLogin = true;
console.log(isLogin ? "login kora ache" : "login kora nai"); // login kora ache

// single ternary 
age>= 18 ? console.log("vote dio") : console.log("ghumai thako"); // vote dio


// semi-advanced
let age3 = 10;
let hasID3 = true;

let res = age3>= 18 ? (hasID3 ? "allow" : "not allow") : "boyos hoinai";
console.log(res); // boyos hoinai

// logical not operator : kono value biporit(opposite) value return kore.
// true ==> false
// false ==> true



// LOGICAL NOT (!) : kono condition er biporit boolean value return kore.
// Double not (!!) : kono value ke boolean rube convert kore.





