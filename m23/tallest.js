
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































