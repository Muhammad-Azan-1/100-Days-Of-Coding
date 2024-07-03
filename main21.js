//Question 61: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, 
//if provided with "Age: " and 30, it should give back "Age: 30".
function merge(num) {
    console.log("Age : " + num);
}
merge(5);
//Question 62: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign.
// For example, remainder(5, 2) should give 1.
function reminder(num1, num2) {
    console.log("Reminder :", num1 % num2);
}
reminder(100, 2);
//Question 63: Logical AND Verification: Create a function that checks two boolean (true or false) values.
// It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
function LogicalAndVerification(cond1, cond2) {
    console.log(cond1 && cond2);
}
LogicalAndVerification(true, false);
LogicalAndVerification(true, true);
export {};
