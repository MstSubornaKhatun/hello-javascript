// variable = like a container

var age = 29;
console.log(age); // 29

/*
var = variable keyword
age = variable name
= ==> assignment operator
; ==> ending semicolon
*/


// data type ==> kono variable a kon type ar man/value rakha ache. 
/*
data type 2 dhoroner --
1. primitive data type(7ta)
    - one value, immutable, value store direct memory
    - number, string, boolean, null, undefined, symbol, BigInt
2. non-primitive data type (2ta)
    - many value, mutable, value store by reference. 
    - array and object
*/ 


var num = 765;
var name = "Suborna";
var isStudent = true;
console.log(typeof num); // number
console.log(typeof name); //  string
console.log(typeof isStudent); //boolean



// keyword ==> javascript er reserved word ==> variable name and function name as don't use. 
// like let var = 40; here, var is a keyword so don't use on variable name 

/*

variable naming convention
1. name must start ==> letter or underscore or doller sign (a-z, A-Z, $)
2. no space allowed 
3. case-sensitive
4. use camel case for best practice
5. use meaningful  name 
6. do not use keyword
7. no quotation like var "address" = "bd";
*/  


console.log('-----------------------');

//number data type
var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total); //0.30000000000000004
console.log(total.toFixed(2)); // 0.30
console.log(typeof first); // number

// parseFloat() -- make number
// parseInt() -- make Integer

var convert1 = parseFloat('8992840'); // string to number
console.log(convert1); 
console.log(typeof convert1); // number 

var convert2 = parseInt(232.54); // float number to integer number
console.log(convert2); // 232
console.log(typeof convert2); // number


// arithmetic operator
/*
+ ==> addition
- ==> Subtraction 
* ==> multiplication
** ==> exponentiation (ES2016) 
/ ==> division
% ==> modulus(remainder)
*/

var a = 20;
var b = 10;

console.log(a + b); // 30
console.log(a - b); // 10
console.log(a * b); // 200
console.log(a ** b); // 10240000000000
console.log(a / b); // 2
console.log(a % b); // 0

/*
2 | 5 | 2
  | 4 |
__________
    1
5 % 2 = 1 here, remainder = 1 
*/
console.log('-----------------------');
/*
short hand assignment operator
a = a + b ==> a += b
a = a - b ==> a -= b
a = a * b ==> a *= b
a = a / b ==> a /= b
a = a ** b ==> a **= b
a = a % b ==> a %= b

*/

console.log(a+=b); // 30 // solution + a er value notun vabe set kore

console.log('--------------');
// increment ===> a++ ==> a = a + 1
// decrement ===> a-- ==> a = a - 1


// Post (x++, x--) → value then changes
// Pre (++x, --x) → change then value

var x = 5;
console.log(++x); // 6 
console.log(x++); // 6


console.log(x--); // 7 // x = 6 output 7
console.log(--x); // 5 // x = 6 output 5


console.log(20 + '30'); // + ==> string thakle join , output : 2030
console.log(20 - '30'); // -10 ==> -,*,/ ===> string thakle number banai

var v = 30 - '20';
console.log(v); // 10
console.log(typeof v); // number

var firstName = 'Mobarok';
var secondName = 'Tobarok';
var fullName = firstName + secondName;
console.log(fullName); // MobarokTobarok
console.log(firstName + '' + secondName); // MobarokTobarok
console.log(firstName + ' ' + secondName); // Mobarok Tobarok


