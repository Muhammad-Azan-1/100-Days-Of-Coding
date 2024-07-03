//Question No : 64
// Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5")
//. Return their sum as a number. 
function add(num1, num2) {
    console.log(num1 + num2);
}
add(5, "5");
//Question No : 65
// Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places
function product(num1, num2) {
    return (num1 * num2);
}
console.log(product(0.2, 0.1 * 100) / 100);
//Question No : 66
// Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder.
// Use an object to return both values.
function divide(a, b) {
    let object = {
        quotient: Math.floor(a / b), // quotient  = 10/5  the quotient is 2, so the qoutient is a number which divides two number
        remainder: a % b // 10%5 == 0, so the remainder is 0
    };
    return object;
}
let object = divide(14555, 7);
console.log(object);
export {};
