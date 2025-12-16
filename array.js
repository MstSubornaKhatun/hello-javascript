let fruits = ["Apple", "Mango", "Banana"]
console.log(fruits); //[ 'Apple', 'Mango', 'Banana' ]
console.log(fruits[0]); //Apple

// value change
fruits[2] = "Orange";
console.log(fruits); // [ 'Apple', 'Mango', 'Orange' ]
console.log(fruits.length); // 3

// array data ar modhe jekono man rakha jai
let mix = ["text", 20, true, null, {name: "Ali"}];
console.log(mix); //[ 'text', 20, true, null, { name: 'Ali' } ]



// add element at the END
fruits.push("Papaya");
console.log(fruits); // [ 'Apple', 'Mango', 'Orange', 'Papaya' ]


// remove element at the END
fruits.pop();
console.log(fruits); // [ 'Apple', 'Mango', 'Orange' ]


// add element at the beginning 
fruits.unshift("Grapes");
console.log(fruits); // [ 'Grapes', 'Apple', 'Mango', 'Orange' ]


// remove element at the beginning
fruits.shift();
console.log(fruits); //[ 'Apple', 'Mango', 'Orange' ]




// find index number
a = fruits.indexOf("Mango");
console.log(a); //1

console.log(fruits.indexOf("Mango")); //1


// element ache kina check
console.log(fruits.includes("Banana")); // false


// ulta kore dei
console.log(fruits.reverse()); // [ 'Orange', 'Mango', 'Apple' ]


// join() array string
console.log(fruits.join(",")); // Orange,Mango,Apple



// length
console.log(fruits.length); //3

//copy part of array - original change hoina
console.log(fruits.slice(0,2)); // [ 'Orange', 'Mango' ]



// add/remove from any position
console.log(fruits.splice(0,2)); // [ 'Orange', 'Mango' ]



// combine array
let all = fruits.concat(["Papaya", "Guava"]);
console.log(all); // [ 'Apple', 'Papaya', 'Guava' ]






// array ===> string
console.log(fruits.toString()); //Apple




// ata array kina check kore
console.log(Array.isArray(fruits)); // true

