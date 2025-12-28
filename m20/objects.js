// Object declaration
const sommanitoPerson = {
    key1: "value1",   //  key1 er maan holo value1
    key2: "value2",   //  key2 er maan holo value2
    key3: "value3"    //  key3 er maan holo value3
};

/*
object write all time on curly braces {}
every key : value jora thake
key and value er majahe : (colon) uses
many key-value pair thakle tader majhe , (comma) dite hoi
*/



const person = {
    name : 'sodor uddin',
    age : 43,
    profession : 'developer',
    salary : 3000,
    married : true,
    'fav place' : ['bandarbon', 'kuakata', 'paharpur']
}

console.log(person);
/*
{
  name: 'sodor uddin',
  age: 43,
  profession: 'developer',
  salary: 3000,
  married: true,
  'fav place': [ 'bandarbon', 'kuakata', 'paharpur' ]
}
*/


// dot notation ===> dot diye object er property access kora.
console.log(person.profession); // developer

const income = person.salary;
console.log(income); // 3000



// bracket notation ==> [] (third) bracket diye access kora.

console.log(person['age']); // 43
const boyos = person['age'];
console.log(boyos); // 43


// console.log(person.'fav place'); // error
console.log(person['fav place']); // [ 'bandarbon', 'kuakata', 'paharpur' ]


const keyName = 'profession'; // string hisabe likhte  hobe
console.log(person[keyName]); // developer

const propName = 'profession';
person['propName'] = 'chowdhary group of limited';
console.log(person);
/*
{
  name: 'sodor uddin',
  age: 43,
  profession: 'developer',
  salary: 3000,
  married: true,
  'fav place': [ 'bandarbon', 'kuakata', 'paharpur' ],
  propName: 'chowdhary group of limited'
}
*/

const keys = Object.keys(person);
console.log(keys)
/*
[
  'name',
  'age',
  'profession',
  'salary',
  'married',
  'fav place',
  'propName'
]
*/

const value = Object.values(person);
console.log(value);
/*
[
  'sodor uddin',
  43,
  'developer',
  3000,
  true,
  [ 'bandarbon', 'kuakata', 'paharpur' ],
  'chowdhary group of limited'
]
  */

// loop ===> for...in loop
for (const prop in person){
    // console.log(prop);
    /*
    name
    age
    profession
    salary
    married
    fav place
    propName
    */

    console.log(person[prop])
    /*
    sodor uddin
    43
    developer
    3000
    true
    [ 'bandarbon', 'kuakata', 'paharpur' ]
    chowdhary group of limited
    */
}



// for of : array 
// for in : object 



// nested
const college = {
    name : 'vnc',
    class : [11, 12],
    event : ['science', 'bijoy dibos', 'sadhinota dibos' ],
    unique : {
        color : 'blue',
        result : {
            gpa : 5,
            merit : 'top'
        }
    }

}

console.log(college.unique.color); // blue
college.unique.result.merit = 'top top top most';
console.log(college['unique'].result.merit); // top top top most
college.event[1] = '16 December'
console.log(college.event[1]); // 16 December

delete college.class;
console.log(college)
/*
{
  name: 'vnc',
  event: [ 'science', '16 December', 'sadhinota dibos' ],
  unique: { color: 'blue', result: { gpa: 5, merit: 'top top top most' } }
}
*/


