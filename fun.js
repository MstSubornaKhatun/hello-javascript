function vaatKhao () {
    console.log('vaat khaoooooooo');
}
vaatKhao()
// output : vaat khaoooooooo

function doubleIt (num){
    const result = num * 2;
    console.log(result);
}
doubleIt(32); // 64


// diff 
function difference (num1, num2){
    const result = num1 - num2;
    console.log(result);
}

difference(20, 10); // 10

const fatherAge = 49;
const myAge = 20;
difference(fatherAge, myAge); // 29


// retrun
function addNum(number1, number2){
    const result = number1 + number2;
    return result;
}
console.log(addNum(2, 1)); // 3


//console.log
function addNum2 (num1, num2) {
    const result = num1 + num2;
    console.log(result);
}
addNum2(3,1) //4

function add2(a, b) {
  console.log(a + b);   // শুধু দেখাচ্ছে
}

let result2 = add2(5, 3);
console.log(result2);   // Output: undefined

function add(a, b) {
  return a + b;   // মান বাইরে পাঠাচ্ছে
}

let result = add(5, 3); // এখানে function থেকে মান এসেছে
console.log(result);    // Output: 8



/**
 * for a given string tell me whether it has even number of characters or not
 * 
*/

function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
}

evenSizedString('Dhaka');
evenSizedString('faka');



function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTriple(5, true)); // 10 , 15
console.log(doubleOrTriple(5, false)); // 15


console.log('------------------------------');

function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

console.log(numberOfElements([12, 45, 78,45,121254,4,5])); // 7


function getAge(person){
    const age = person.age; // object এর ভিতরের age property নেয়া হচ্ছে
    return age;             // সেই মান function এর বাইরে পাঠানো হচ্ছে
}


// person → function এর parameter, মানে তুমি একটা object পাঠাবে।
// person.age → সেই object এর ভিতরে থাকা age property বের করবে।
// return age → সেই মানকে function এর বাইরে পাঠাবে, যাতে তুমি আবার ব্যবহার করতে পারো।


let student = { name: "Nahima", age: 20 };
console.log(getAge(student)); // Output: 20


function add(price1, price2) {
    const total = price1 + price2;
    return total;
}

const bill = add(5, 80);

function add2(price1, price2) {
    return price1 + price2;
}

const bill2 = add(5, 80);

console.log(bill, bill2);

function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
}

const result3 = doMath(10, 5);
console.log(result3);


console.log('----------------------------');

// conditional return
function isEven(number) {
    if (number % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(5)); // false
console.log(isEven(110)); //true

console.log('----------2--------');
function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}

console.log(isOdd(10)); // false
console.log(isOdd(7)); // true

console.log('------------------*------------------');


