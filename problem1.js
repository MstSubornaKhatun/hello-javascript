// 12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}


const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight); // 6.25


// adv
console.log('--------');
// ignore this one
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.'
    return result;
}
const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2) // 6 ft 3 inch.



function mileToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const x = mileToKilometer(323);
console.log(x); // 519.81682


function kiloMeterToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
const y = kiloMeterToMiles(321);
console.log(y); // 199.460091


