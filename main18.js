// Question 52: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
let Arry = [2, 4, 8, 10];
let doubleNumber = Arry.map((number) => { return number * number; });
console.log(doubleNumber);
//Question 53 : Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let mixArry = ["Azan", 123, "Mavi", 123, true, false];
mixArry.splice(3, 3);
mixArry.splice(1, 1);
console.log(mixArry);
//or 
let Arrys = ["Azan", 123, "Mavi", 123, true, false];
let wordsArry = Arrys.filter((element) => typeof element === "string");
console.log(wordsArry);
//Question 54 :  Find the Average Grade: Given a list of grades, calculate the average grade.
let grade = [45, 45, 67, 89, 60, 99];
let Average = 0;
for (let i = 0; i < grade.length; i++) {
    Average += grade[i] / grade.length;
}
console.log(Average);
//or
let total = grade.reduce((prev, curr) => { return (prev + curr); });
let average = total / grade.length;
console.log(average);
export {};
