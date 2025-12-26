// array ==> ekta variable, multiple value save kora jai.
let fruits = ["Apple", "Orange", "Banana"];

console.log(fruits); // [ 'Apple', 'Orange', 'Banana' ]
console.log(fruits[0]); // Apple

// change value
fruits[1] = "Mango";
console.log(fruits); // [ 'Apple', 'Mango', 'Banana' ]

//array length check
console.log(fruits.length); //3

// array er vitore jekono value rakha jai(mixed value)
let mix = ["Text", 20, true, null, {name: "Ahmed"}];
console.log(mix); // [ 'Text', 20, true, null, { name: 'Ahmed' } ]

// 1. push() - add element at the end
fruits.push("Papaya");
console.log(fruits); // [ 'Apple', 'Mango', 'Banana', 'Papaya' ]


// 2. pop() - remove element from the end
fruits .pop();
console.log(fruits); // [ 'Apple', 'Mango', 'Banana' ]


// 3. unshift() - add element at the beginning
fruits.unshift("Lichi");
console.log(fruits); // [ 'Lichi', 'Apple', 'Mango', 'Banana' ]


// 4. shift() - remove element from the beginning
fruits.shift();
console.log(fruits); //[ 'Apple', 'Mango', 'Banana' ]


// 5. indexOf() - find index number
var index = fruits.indexOf("Mango"); //return value dibe seta store korar jonno avabe index namee varible name declare kore nibo.
console.log(index); //1

// 6. includes() - element ache kina check kore
var haveThis = fruits.includes("Banana");
console.log(haveThis); // true


// 7. reverse() - ulta kore dei
fruits.reverse();
console.log(fruits); // [ 'Banana', 'Mango', 'Apple' ]


// 8. join() - array ---> string
var join = fruits.join(", ");
console.log(join); // Banana, Mango, Apple


// 9. length - length check
var len = fruits.length;
console.log(len); //3


// 10. slice() - copy part of array, original change hoina.
var slice = fruits.slice(0,2); // (0,2) ==> 0 theke 2 er aag porjonto
console.log(slice); //[ 'Banana', 'Mango' ]


console.log(fruits); // [ 'Banana', 'Mango', 'Apple' ]
// 11. splice() - add/remove from any position
// remove 
fruits.splice(1, 2);  // Mango and Apple remove
console.log(fruits); // [ 'Banana' ]


// add 
// index 1 a new element add
fruits.splice(1, 0, 'Watermelon', 'Cucumber');
console.log(fruits); // [ 'Banana', 'Watermelon', 'Cucumber' ]

// 12. concat() - combine arrays ===> array gulo k eksathe jora lagai and new array return kore and ager mul array unchange thake.
let all = fruits.concat(["Guava", "Grapes"]);
console.log(all); // [ 'Banana', 'Watermelon', 'Cucumber', 'Guava', 'Grapes' ]


console.log(fruits); // [ 'Banana', 'Watermelon', 'Cucumber' ]
// 13. toString() - array --> string
var str = fruits.toString();
console.log(str); // Banana,Watermelon,Cucumber


// 14.Array.isArray() - ata array kina check kore
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray("Hello")); // false
