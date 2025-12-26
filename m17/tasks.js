/*
### Task-1

You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

**Input:**
</br>
The first line of the input is the taka you have.
The second line is the cost of 1 kg of oranges and 1 kg of apples.

**Output:**
</br>
Print the result.

---

**Sample Input:**
</br>
1000
</br>
700

**Sample Output:**
</br>
300
*/ 

var myMoney = 1000;
var priceFruits = 700;
var shopkeeperReturn = myMoney - priceFruits;
console.log(shopkeeperReturn); // 300



/*
Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04

*/ 

var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.50;

var average = (Mathematics + Biology + Chemistry + Physics + Bangla) / 5;
console.log(average.toFixed(2)); // 71.04


/*
Task-3
You task is to divide the given number by 5 and show the remainder as the output.

Input:
The first line of the input contains the number.

Output:
Print the remainder.

Sample Input:
119

Sample Output:
4
*/ 

var myNum = 119;
var givenNum = 5;
var remainder = myNum % givenNum;
console.log("Print the remainder", remainder); // Print the remainder 4

/*
Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.
*/ 

var a = isNaN('11');
console.log(a); // false
/*
'11' ==> string
isNaN() ==> try to convert number
'11' ==> convert 11 number. then 11 NaN(Not-a-Number), so, isNaN('11') is false.
output: false
*/

/*
joti value number a convert kora jai, seta NaN noi, result hobe false
joti value number a convert kora na jai, seta NaN, result hobe true

*/


var b = isNaN(2 - 10);
console.log(b); // false

/*
2 - 10 = -8
-8 a valid number.
so it's not NaN.
isNaN(-8) → false
*/ 



