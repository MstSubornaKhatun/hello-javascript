/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

let i = 1;
while (i<=60){
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
    i++;
}



/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

let num = 61;
while (num<=100){
    if(num%2===1){
        console.log(num);
    }
    num++;
}


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

let num2 = 78;
while (num2<=98){
    if(num2 % 2 === 0) {
        console.log(num2);
    }
    num2++;
}








console.log('_------------');
/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let num3 = 81;
let sum = 0;
while (num3<=131){
    if(num3 % 2===1){
        sum = sum + num3;

    }
    num3++;
}

console.log(sum); // 2756

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let num4 = 206;
let sum4 = 0;
while(num4<=311){
    if(num4 % 2 === 0){
        sum4 = sum4 + num4;
    }
    num4++;
}
console.log(sum4); // 13674






/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */


// for (let i = 1; i <= 10; i++) {
//     console.log("9 x " + i + " = " + (9 * i));
// }

let num5 = 1;
while (num5<=10){
    console.log("5 x " + num5 + " = " + (5 * num5));
    num5++;
}


/*
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
*/



/***

Implement a countdown timer that counts down from 21 to 15.

 */


let nu = 21;
while (nu>=15){
    console.log(nu);
    nu--;
}
/*
21
20
19
18
17
16
15
*/
