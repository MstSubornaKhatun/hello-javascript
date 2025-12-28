// string = a data type. where we written text.
// immutable 
// every characters have a index (character=letter)  


const name = "Safiq";
const city = 'Dhaka';
const thana = `bheramara`;

console.log(name); // Safiq
console.log(name[0]) // S 
console.log(name.length) // 5


// string --> array
const str = "Hello";
const arr = str.split('');
console.log(arr); // [ 'H', 'e', 'l', 'l', 'o' ]


// array --> string
const ary = [ 'H', 'e', 'l', 'l', 'o' ];
const stri = ary.join('');
console.log(stri); // Hello





// case ==> uppercase and lowercase
// Dhaka != dhaka 

const a = "DHAKA";
const b = "dhaka";

console.log(a.toLowerCase()); // dhaka
console.log(b.toUpperCase()); // DHAKA
console.log(a.toLowerCase()===b.toLowerCase()); // true 
console.log(b.toLowerCase()===a.toUpperCase()); // false


// trim() == remove space
const drink = '     water';
console.log(drink); //     water
console.log(drink.trim()) //water

const liquid = 'water     ';
console.log(liquid.trim()); //water


// slice() === 0,1,2,3,..........

const address = "Hawapur";
const part = address.slice(2,4); // 2 theke 4 er aag porjonto
console.log(part); // wa 


// spilt()
const sentence = "I am a good person and a good developer";
console.log(sentence.split())// [ 'I am a good person and a good developer' ]
console.log(sentence.split(''))
/*
[
  'I', ' ', 'a', 'm', ' ', 'a', ' ',
  'g', 'o', 'o', 'd', ' ', 'p', 'e',
  'r', 's', 'o', 'n', ' ', 'a', 'n',
  'd', ' ', 'a', ' ', 'g', 'o', 'o',
  'd', ' ', 'd', 'e', 'v', 'e', 'l',
  'o', 'p', 'e', 'r'
]
*/



//trim() ===> start and end er space remove kore
// trimStrat() ==> start er space remove kore
// trimEnd() ==> end er space remove kore



const friendStr = 'Rahim,Sabuz,Sohan,Safiq,Tamim,Sakib';
const friends = friendStr.split(',');
console.log(friends); // [ 'Rahim', 'Sabuz', 'Sohan', 'Safiq', 'Tamim', 'Sakib' ]
console.log(friends.join('|')); // Rahim|Sabuz|Sohan|Safiq|Tamim|Sakib
console.log(friends.join('-')); // Rahim-Sabuz-Sohan-Safiq-Tamim-Sakib


const firstName = "Elon";
const secondName = "Mask";
const fullName = firstName + ' ' + secondName;
console.log(fullName); // Elon Mask


// incudes()
const inc = 'Bangladesh';
console.log(inc.includes('s')); // true
console.log(inc.includes('z')); // false



// reverse()
/*
JavaScript a string er jonno reverse() method nai
reverse() shushu array er jonno kaj kore.

tai, string k ageee array banabe, tarpor reverse kore string banabe.
*/

let str2 = "hello";
let reversed = str2.split("").reverse().join("");
console.log(reversed); // "olleh"




const sen = "I am a good person and a good developer.";
let reverse = '';
for (const letter of sen){
    reverse = letter + reverse;
}
console.log(reverse); // .repoleved doog a dna nosrep doog a ma I


let rev = '';
for (let i = 0; i<sen.length; i++){
    const letter = sen[i];
    rev = letter + rev;
}
console.log(rev); // .repoleved doog a dna nosrep doog a ma I


// shortcut
const revers = sen.split('').reverse().join('');
console.log(revers); // .repoleved doog a dna nosrep doog a ma I




