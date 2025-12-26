// 1. Ternary Logical Operator
// i.

let age = 20;
age >= 18 ? console.log("adult") : console.log("minor"); // adult

// ii
let result = age >= 18 ? "adult" : "minor";
console.log(result); // adult

// iii
let score = 75;
let result3 = 
score >= 50 ? 
score >= 80 ? 
 "please with resanable number" 
 : "passed" 
 : "failed";

 console.log(result3);
// passed


// iv
let email = null;
if (email) {
    console.log("Submitted");
} else {
    console.log("please enter a email");
}
// please enter a email


// 2. Explore Switch Statement
var theme = "dark";
switch (theme) {
    case "light" :
        console.log("light theme applied");
        break;

    case "dark" :
        console.log("dark theme applied");
        break;

    case "blue" : 
        console.log("blue theme applied");
        break;

    default:
        console.log("system theme applied");
}
// system theme applied



// 3. Explore if-else statement
var useRole = 'admin';
if (useRole === 'admin') {
    console.log("redirecting to admin dashboard");

} else {
    console.log("redirecting to homepage");
} // redirecting to admin dashboard


if (useRole === 'admin') {
    console.log("admin dashboard");
} else if (useRole === 'editor') {
    console.log("redirecting to editor page");
} else {
    console.log("home page");
}


var isLogin = true;
if (isLogin === true) {
    console.log("welcome to homepage");
} else {
    console.log("navigate to sign up page");
} //welcome to homepage

