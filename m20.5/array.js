/*
looping technique
1. for 
2. while 
3. do while 
4. for of 
5. for in
*/ 

const friends = ['Elon', 'Mark', 'Safi', 'Rafi'];
for (const friend of friends) {
    console.log(friend)
}

/*
Elon
Mark
Safi
Rafi
*/

for (let i = 0; i<friends.length; i++){
    console.log(i)
    console.log(friends[i])
}
/*
0
Elon
1
Mark
2
Safi
3
Rafi

*/


/*
friends[0] = 'Elon'
friends[1] = 'Mark'
friends[2] = 'Safi'
friends[3] = 'Rafi'
*/
let i = 0;
while (i<friends.length){
    console.log(friends[i])
    i++;
}
/*
Elon
Mark
Safi
Rafi
*/


// reverse
const numbers = [2,3,4,5,6,7,8,9];
numbers.reverse();
console.log(numbers)
/*
[
  9, 8, 7, 6,
  5, 4, 3, 2
]
*/

const nums = [2,3,4,5,6,7,8,9];
const reversed = nums.reverse();
console.log(nums)

/*
[
  9, 8, 7, 6,
  5, 4, 3, 2
]
*/


const numbers2 = [2,3,4,5,6,7,8,9];
const rev_numbers = [];

for (const num of numbers2){
    rev_numbers.unshift(num);
}
console.log(rev_numbers)
/*
[
  9, 8, 7, 6,
  5, 4, 3, 2
]
*/ 


let arr = [3, 4, 5];
arr.unshift(2);
console.log(arr); // [2, 3, 4, 5] // surute 2 add koreche


const reversed_numbers = [];
for (let i = 0; i<numbers.length; i++){
    const num = numbers[i];
    reversed_numbers.unshift(num)
}
console.log(reversed_numbers)
/*
[
  2, 3, 4, 5,
  6, 7, 8, 9
]
*/ 


console.log('------')
// reversed side 
const rev_rev_number = [];
for (let i = numbers.length - 1; i>=0; i--){
    const num = numbers[i];
    rev_rev_number.push(num)
}
console.log(rev_rev_number)
// [
//   2, 3, 4, 5,
//   6, 7, 8, 9
// ]








//sort - alphabetically sort kore
const person = ['Akib', 'Rakib', 'Rahim', 'Santo', 'Asanto'];
const sortedPerson = person.sort();
console.log(sortedPerson); // [ 'Akib', 'Asanto', 'Rahim', 'Rakib', 'Santo' ]


const numberss = [8, 2, 4, 5, 7, 9, 3];
// Ascending ==> smaller to larger
// Descending ==> larger to smaller

const numberss_asc = numberss.sort()
console.log(numberss_asc)
/*
[
  2, 3, 4, 5,
  7, 8, 9
]
  */ 




// Ascending ----> smaller to larger: [2, 3, 4, 6, 7, 8]
// Descending --> larger to smaller:  [8, 7, 6, 4, 3, 2]

const numbersss = [4, 7, 12, 8, 43, 6, 1];
// const numbersss_asc = numbersss.sort() // not working
const numbersss_asc = [...numbersss].sort(function (a, b) { return a - b })
const numbersss_dsc = [...numbersss].sort(function (a, b) { return b - a })

console.log(numbersss_asc);
console.log(numbersss_dsc);
