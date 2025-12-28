/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

for (let i = 1; i <=200; i++ ){
    if(i===100){
        break;
    }
    console.log(i);
}


/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/


let num = 1;
let sum = 0;
while (true){ // infinite loop
    sum = sum + num;
    num++;
    if(sum>=100){
        break;
    }
}
console.log(sum);



/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/


for (let i = 1; i<=100; i++){
    for (let j = 1; j<=i; j++){
        if (j*j===i){
            console.log('first square number found:', i);
            i = 101;
            break; // outer loop break
        }
    }

}


