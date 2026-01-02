//1. Can you find out who will get the delicious cake?


const disha = 53;
const salman = 96;

if (disha > salman) {
    console.log('Disha will get the strawberry')

} else {
    console.log('salman will get the strawberry')
}
// salman will get the strawberry

// inside a function
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else {
        return num2;
    }
}


const max1 = getMax(96, 79);
const max2 = getMax(56, 98);
const ultimateMax = getMax(max1, max2)
console.log('max of two is: ', ultimateMax); // max of two is:  79



// max3 - 3ta number er modhe max

const jim = 35;
const him = 54;
const dim = 75;

if (jim>him && jim>dim) {
    console.log('jim is the ultimate boss');

} else if (him > jim && him > dim){
    console.log('him the boss')
} else {
    console.log('dim the bossssssss')
}
// dim the bossssssss


function maxOfThree(num1, num2,num3){
    if(num1>num2 && num1>num3) {
        return num1;
    } else if (num2>num1 && num2  >num3){
        return num2;
    } else {
        return num3;
    }
}

const max3 = maxOfThree(23, 12, 10);
console.log(max3); // 23



// unlimited number er max number

const ultimate = Math.max(12,45,987,23,65,765,5,45);
console.log('max insuring Math.max', ultimate) // 987

