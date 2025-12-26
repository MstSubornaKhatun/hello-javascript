/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

var burgerPrice = 550;
if (burgerPrice >= 500) {
    console.log("free Coke");
} else {
    console.log("coke : 30tk");
}
//free Coke


/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

var weight = 54; //kg
var height = 1.5; // m
var BMI = weight / (height * height);
console.log(BMI); // 24
if (BMI < 18.5) {
    console.log("you are underweight.");
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("you are normal.");
} else if (BMI >= 25 && BMI <= 29.9) {
    console.log("you are overweight.");
} else {
    console.log("you are obese.");
} // you are normal.


/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

var score = 96;

if (score >= 90 && score <= 100) {
    console.log("A");
} else if (score >= 80 && score <= 89) {
    console.log("B");
} else if (score >= 70 && score <= 79) {
    console.log("C");
} else if (score >= 60 && score <= 69) {
    console.log("D");
} else {
    console.log("F");
}

// akhane bola hoyeche 90-100 mothe hote hobe. mane 90 o hote hobe 100 o hote hobe.









/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

var myScore = 85;
var friendScore = 32;
if (myScore > 80) {

    // If your friend get more than 80. 
    if (friendScore > 80) {
        console.log("then go for a lunch.");
    } else if (friendScore < 80 && friendScore >= 60) {
        console.log("good luck next time. ");
    } else if (friendScore < 60 && friendScore >= 40) {
        console.log("keep your friend's message unseen.");
    } else if (friendScore < 40) {
        console.log("block your friend");
    }
} else {
    console.log("go to home and sleep and act sad");
}



/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */


var num1 = 32;
var num2 = 43;
if (num1 > num2) {
    result = num1 * 2;
} else {
    result = num1 + num2;
}

console.log(result);






/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var age = 10;
var isStudent = true;
if (age < 10) {
    console.log("free");
} else if (age >= 60) {
    console.log("15% Discount");
} else if (isStudent) {
    console.log("50% discount");
} else {
    console.log("Regular ticket fare 800 tk");
}
// age gulo ageeeee lekha hoyeche karon child, senior ageeee nirdharon korte hobe tarpor student status check kora jai.