// string
const name = "Suborna";
const city = 'Kushtia';
const thana = `Bheramara`;

console.log(name[0]); // S
console.log(name.length); //7


// string ==> array 
const str = "Hello";
const arr = str.split('');
console.log(arr); // [ 'H', 'e', 'l', 'l', 'o' ]



// case ==> dhaka !== Dhaka
const a = "DHAKA";
const b = "Dhaka";
console.log(a.toLowerCase()); // dhaka
console.log(b.toUpperCase()); // DHAKA
console.log(a.toUpperCase() === b.toUpperCase()); // true

console.log("----------------------------");



// trim() : remove space
const drink = '  water'; // start space
const liquid = 'water  '; // end space
console.log(drink); //   water 
console.log(drink.trim()); // water ===> no space
console.log(liquid.trim()); // no space

// slice ==> 0 1 2 3  4 5 6 
const address = 'Bangaldesh';
const part = address.slice(2,6); // (2, 6) ==>2 theke 6 ar aag porjonto
console.log(part); //ngal


const sentence = "I am a good person and a web developer";
console.log(sentence.split(''));
// output:
// [
//   'I', ' ', 'a', 'm', ' ', 'a', ' ',
//   'g', 'o', 'o', 'd', ' ', 'p', 'e',
//   'r', 's', 'o', 'n', ' ', 'a', 'n',
//   'd', ' ', 'a', ' ', 'w', 'e', 'b',
//   ' ', 'd', 'e', 'v', 'e', 'l', 'o',
//   'p', 'e', 'r'
// ]

console.log(sentence.split(' '));
// [
//   'I',         'am',
//   'a',         'good',
//   'person',    'and',
//   'a',         'web',
//   'developer'
// ]


const friendStr = 'rahim,karim,tarim,barim,sarim';
const friends = friendStr.split(',');
console.log(friends); 
console.log(friends.join()); // rahim,karim,tarim,barim,sarim
console.log(friends.join('')); // rahimkarimtarimbarimsarim
console.log(friends.join('|')); // rahim|karim|tarim|barim|sarim
console.log(friends.join('-')); //rahim-karim-tarim-barim-sarim



console.log('--------------------------');


const first = 'abid';
const second = 'islam';
const fullName = first + ' ' + second;
console.log(fullName); // abid islam

// concat
const fullName2 = first.concat(' ').concat(second);
console.log(fullName2); // abid islam
// include ==> ashe kina ata cheak kore
console.log(second.includes('m')); // true


const sentence2 = 'I am a good person and a web developer';
let revers = '';
for (const letter of sentence2) {
    revers = letter + revers;

}
console.log(revers); // repoleved bew a dna nosrep doog a ma I



let rev = ' '
for (let i = 0; i < sentence2.length ; i ++) {
    const letter = sentence2[i];
    rev = letter + rev;
}
console.log(rev); // repoleved bew a dna nosrep doog a ma I

// object
const person = {
    name : 'suborna',
    age : 92,
    salary : 3900,
    profession : 'developer',
    study : true,
}

console.log(person); 
// {
//   name: 'suborna',
//   age: 92,
//   salary: 3900,
//   profession: 'developer',
//   study: true
// }

console.log(person.name); // suborna 

const income = person.salary;
console.log(income); // 3900


// agulo dot notation diye object ar value access kora.

console.log('----------------------------------');
// braket notation
// third bracket diye access kora.
console.log(person['age']) // 92
const boyos = person['age'];
console.log(boyos); // 92


const person2 = {
    nam : 'sakib',
    boyos : 43,
    kaj : 'PM',
    'fav places' : ['maldiv', 'bali', 'sea', 'kashmir']
}

console.log(person2);
// {
//   nam: 'sakib',
//   boyos: 43,
//   kaj: 'PM',
//   'fav places': [ 'maldiv', 'bali', 'sea', 'kashmir' ]
// }

console.log(person2['fav places']); // [ 'maldiv', 'bali', 'sea', 'kashmir' ]
const keys = Object.keys(person2);
console.log(keys); // [ 'nam', 'boyos', 'kaj', 'fav places' ]


console.log('-------------------------');
const values = Object.values(person2);
console.log(values); // [ 'sakib', 43, 'PM', [ 'maldiv', 'bali', 'sea', 'kashmir' ] ]


console.log('--------------------------------');
//loop 
// for in loop
// for of ==> array 
// for in ==> object 


const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

for (const prop in mobile) {
    // console.log(prop) 
//     brand
// price
// color
// camera
// isNew
console.log(mobile[prop]);
// samsung
// 25000
// black
// 12mp
// true
}

// nested
const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    } 
}

console.log(college.unique.color); // blue
college.unique.result.merit = 'top top most';
console.log(college['unique'].result.merit); // top top most

