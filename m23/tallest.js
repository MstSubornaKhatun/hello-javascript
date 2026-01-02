
// ##############
// 2. Who is the tallest? Find the max number in an array

// tallest
const heights = [65, 64, 76, 87, 45, 66, 76]; // inch

function getMax(numbers){
    // console.log(numbers)
    let max = numbers[0];
    for (const num of numbers){
        // let max = num;
        if(num>max){
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log('max value is', max); // 87




function getMin(numbers){
    // console.log(numbers)
    let min = numbers[0];
    for (const num of numbers){
        // let max = num;
        if(num<min){
            min = num;
        }
    }
    return min;
}

const min = getMin(heights);
console.log('min value is', min); //  45



// #############
// 3. Use add and multiplication to calculate wood requirements

// wood.js
/*
chair --> 3 cft
table --> 10 cft
bed -->  50 cft
*/ 

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;


}


const wood = woodQuantity(0, 0, 1);
console.log('wood needed', wood) // 50



// do it this practice
// ekta dokan a jaba 
/*
shirt price --> 500
pant  price --> 300
shoe price --> 900
*/

function shoppingPrice(shirtPrice, pantPrice, shoePrice){
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;

    const shirtTotalPrice = shirtPrice * perShirtPrice;
    const pantTotalPrice = pantPrice * perPantPrice;
    const shoeTotalPrice = shoePrice * perShoePrice;

    const totalShopping = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

    return totalShopping;

}

const shopping = shoppingPrice(0, 0, 1);
console.log('total shopping',shopping); // 900





// 4. Find the cheapest phone from an array of phone objects
// min.js
const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];

function getMin(numbers) {
    let min = numbers[0];
    // console.log(numbers)
    for (const num of numbers) {
        // console.log(num)
        if (num < min) {
            min = num;
        }
    }
    return min;
}

// const cheap = getMin(prices);
// console.log('cheapest one is: ', cheap); //  12000


const phones = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'xoami', price: 18000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
    { name: 'Iphone', price: 100000, camera: '12mp', color: 'black' },
    { name: 'Walton', price: 31000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 27000, camera: '12mp', color: 'black' },
]


function getCheapestPhone(phones){
    // console.log(phones)
    let min = phones[0];
    for(const phone of phones){
        // console.log(phone)
        if(phone.price < min.price){ // 
            min = phone
        }
    }
    return min;
}

const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is: ', cheap); // { name: 'xoami', price: 18000, camera: '12mp', color: 'black' }


// hw max price phone



// 5. Calculate the total cost of the products in a shopping cart


const products = [
    {name: 'shampo', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shirt', price: 700},
    {name: 'pant', price: 1200}
]

// function getShoppingTotal (products){
//     console.log(products);
//     /*
// [
//   { name: 'shampo', price: 300 },
//   { name: 'chiruni', price: 100 },
//   { name: 'shirt', price: 700 },
//   { name: 'pant', price: 1200 }
// ]
//     */ 
// }

// const total = getShoppingTotal(products);
// console.log('total ajke koroc hoice:', total)





function getShoppingTotal (products){
    let total = 0;
    for(const product of products) {
        total = total + product.price;
    } 
    return total;
}

const total = getShoppingTotal(products);
console.log('total ajke koroc hoice:', total) //  2300



// cart total 
const products2 = [
    { name: 'shampoo', price: 300, quantity: 2 },
    { name: 'chiruni', price: 100, quantity: 3 },
    { name: 'shirt', price: 700, quantity: 5 },
    { name: 'pant', price: 1200, quantity: 1 },
]

function cartTotal (products){
    let total = 0;
    for(const product of products){
        // console.log(product)
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const shoppingCost = cartTotal(products2);
console.log(shoppingCost)// 5600







// ##################
// 6. (advanced) Multi-layer discount price calculation



/**
 * upto 100: ---> 100
 * more than 101-200: --> 90
 * more than 200: --> 70
*/

function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 70;
        return total;
    }
}

const total2 = discountedPrice(201);
console.log(total2); //14070




//// layered-discount
/**
 * first100 --> 100
 * 101To200 --> 90
 * above200 --> 70
*/


function layeredDiscountedTotal (quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if (quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}




// #############################
// 7. Simple calculator to call function inside a function


// calculator
function add(num1, num2){
    // return num1 + num2;
    const sum = num1 + num2;
    return sum;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 /num2;
}


function calculator(a, b, operation){
    if(operation === 'add'){
        const result = add(a, b);
        return result;
    }
    else if(operation === 'subtract'){
        const result = subtract(a, b);
        return result;
    }
    else if (operation === 'multiply'){
        // const result = multiply(a, b);
        // return result; // ata ek line a o lekha jai
        return multiply(a, b);
    }
    else if(operation === 'divisible'){
        return divide(a, b);
    }
    else {
        return "Only 'add', 'subtract', 'multiply', 'divisible' operation is allowed."
    }
}



const result = calculator(5, 7, 'add');
console.log(result); // 12





// ###################
// 8 Handle unexpected function input parameter error



// function multiply(num1, num2){
//     const mult = num1 * num2;
//     return mult;
// }


// // const result4 = multiply(5, 7);
// // console.log(result4); // 35


// // const result4 = multiply(5, '7');
// // console.log(result4); // 35


// // const result4 = multiply(5, 'seven');
// // console.log(result4); // NaN

// // const result4 = multiply([5], [7]);
// // console.log(result4); // 35

// // const result4 = multiply([5, 1], [7]);
// // console.log(result4); // NaN

// // const result4 = multiply(5);
// // console.log(result4); // NaN


// // const result4 = multiply(5+7);
// // console.log(result4); // NaN



// const result4 = multiply(5);
// console.log(result4); // NaN




function multiply(num1, num2){
    // console.log(typeof num1);// number
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}

const result4 = multiply(5, 'seven');
console.log(result4); // 



function fullName (first, second){
    if(typeof first !== 'string'){
        return 'First name should be a string'
    } else if(typeof second !== 'string'){
        return 'Second name should be a string'
    }

    const full = first  + ' ' + second;
    return full;
}

// const full = fullName ('Rahan', 'Sohan');
// console.log(full); // Rahan Sohan


const full = fullName (4, 'Sohan');
console.log(full); // Rahan Sohan



function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please provide an object'
    }
    const price = product.price;
    return price;
}
// const price = getPrice({name: 'orange', price: 45, color: 'orange'})
// console.log(price); //45


// const price = getPrice(5)
// console.log(price); // undefined



function getSecond(numbers){
    // console.log(typeof numbers); // object dibe karon javascript a array o ek dhoroner object
if(Array.isArray(numbers) === false){
    return 'Please provide an array'
}
    const second = numbers[1];
    return second;
}

const second = getSecond([1,25,87])
console.log(second);

// #############
// 9 Module Summary and Practice Tasks

/*
1. Variable
2. condition
3. Array 
4. loop
5. Object
6. function
agulo valo vabe bujhar jonno problem solve korechi. agulo core concept


*/

