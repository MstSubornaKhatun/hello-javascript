/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

for (let i = 1; i <=60; i++){
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
}


console.log('-------------------');


/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

for (let i = 61; i <=100; i++){
    if (i%2===1){
        console.log(i);
    }
}


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

for (let i = 78; i <=98; i++){
    if( i % 2===0) {
        console.log(i);
    }
}



// Odd numbers (61–100): 61, 63, 65, …, 99
// Even numbers (78–98): 78, 80, 82, …, 98



console.log('-----');

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */


let sum = 0;
for (let i = 91; i<=129; i++){
    if(i%2===1){
        sum = sum + i;
        
    }
}
console.log(sum); // 2200


/***
 * 

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

console.log('-----');


let sum2 = 0;
for (let i = 51; i <= 85; i++){
    if(i%2===0){
        sum2 = sum2 + i;
    }
}
console.log(sum2); // 1156






/***

Generate a multiplication table for number 9

 */

// multiplication table mane holo 9 er sathe 1 theke 10 porjonto gunfol dekhano. 
// (9 er namta)


// Multiplication table for 9
for (let i = 1; i <= 10; i++) {
    console.log("9 x " + i + " = " + (9 * i));
}


console.log('=======');

/***

Implement a countdown timer that counts down from 81 to 65.

 */


for (let i = 81; i>=65; i--){
    console.log(i);
}