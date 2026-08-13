/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let numOne = 20;
let numTwo = 22;

if (numOne>numTwo) {
    let result = numOne**2;
    console.log(result);
    
} else {
    result = numOne + numTwo;
    console.log(result);
}

// ternary-operation
result = numOne>numTwo ? numOne**2 : numOne + numTwo;
console.log(result);
