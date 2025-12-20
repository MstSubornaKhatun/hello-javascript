// // for...of 
 
//  const numbers = [12, 21, 34, 54, 23, 59, 45];

//  for (const num of numbers) {
//     console.log(num);

//  }

// //  output:
// //  12
// // 21
// // 34
// // 54
// // 23
// // 59
// // 45

// const fruits = ['orange', 'apple', 'banana'];
// for (const fruit of fruits) {
//     console.log(fruit);
// }
// // orange
// // apple
// // banana


// // while loop
// let count = 1;
// while (count <= 5) {
//     console.log(count);
//     count++;
// }
// // 1
// // 2
// // 3
// // 4
// // 5

// let num = 1;
// while (num <= 3) {
//     console.log(num);
//     num++;
// }


// console.log("-------------");

// const hu = [54,5,45,545,4,5,45,45];
// for (const h of hu) {
//     console.log(h);
// }


// console.log("-------------");

// let counts = 1;
// while (counts <= 3) {
//     console.log(counts);
//     counts++;
// }


// console.log("-------------");


// let n = 50;
// while (n<=60) {
//     console.log(n);
//     n++;
// }

// console.log("-------------");






// let num = 1;
// let sum = 0;
// while (num<=2) {
//     console.log(num);
//     sum = sum + num;
//     console.log(sum);
//     num++;
// }

// 1
// 1
// 2
// 3


// console.log('----------------------');

// even number
let num = 1;
while (num <= 10) {
    // console.log(num);
    if(num % 2 === 0) {
        console.log('even number', num);
    }
    num++;
}


let nu = 1;
while (nu<=12){
    if (nu %2 !==0){
        console.log('odd', nu);
    }
    nu ++;
}


// even number with for loop
for (let i = 1; i<=10; i++){
    if (i % 2 ===0) {
        console.log(i);
    }
}

console.log('------------------------------');
let sum = 0;
for (let num = 1; num <=10; num++) {
    sum = sum + num;
    // console.log(num);
    // console.log(sum);
}
console.log(sum); // 55

console.log('------------------------------');

// increment 
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log('------------------------------');
// decrement 
for (let i = 10; i >=0; i--) {
    console.log(i);
}

console.log('------------------------------');
// decremental while loop
let n = 10;
while (n>=0){
    console.log(n);
    n--;
}

console.log('------------------------------');

// incremental
let nn = 0;
while (nn<=10) {
    console.log(nn);
    nn++;
}


console.log('------------------------------');

// odd number
for (let i = 0; i <20; i ++) {
    if (i%2===1) {
        console.log(i);
    }
}
console.log('------------------------------');
// give me the last numbers between 1 to 30 divisible by 5 
for ( let i = 1; i <=30; i++) {
    if ( i%5 ===0) {
        console.log(i);
    }
}

// 5
// 10
// 15
// 20
// 25
// 30


console.log('------------------------------');
for (let i = 1; i <=10; i++) {
    if (i % 5 === 0 || i %3 ===0){
        console.log(i);
    }
}
// 3
// 5
// 6
// 9
// 10

console.log('------------------------------');
for (let i = 1; i <=30; i++) {
    if (i % 5 === 0 && i %3 ===0){
        console.log(i);
    }
}

// 15
// 30

console.log('------------------------------');
// give me the su of numbers from 1 to 20 that are divisible by 3
let total = 0;
for (let i=1; i<=20; i++) {
    if (i%3===0) {
        total = total + i;
        // console.log(total);
    }
}
console.log(total); //63


console.log('------------------------------');

// break
// কাজ: লুপ পুরোপুরি থামিয়ে দেয়।
// যখন শর্ত মিলে যায়, তখন আর লুপের বাকি অংশ বা পরের iteration চলে না।

//break
for (let i = 0; i <150; i ++) {
    console.log(i);
    if (i>=5) {
        break;
    }
}

console.log('------------------------------');
// continue
// কাজ: লুপ থামায় না, শুধু বর্তমান iteration স্কিপ করে পরেরটায় চলে যায়।
// মানে শর্ত মিলে গেলে ওই ধাপ বাদ দিয়ে পরের ধাপে যাবে।

for (let i =1; i<=5; i++) {
    if (i===3) {
        continue;
    }
    console.log(i);


}

// 1
// 2
// 4
// 5


