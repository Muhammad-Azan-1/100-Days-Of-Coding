// /43)  Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that
// logs a sentence about the laptop.
let Laptop = {
    //using  arrow function inside a object
    Laptop_make: "Dell",
    model: "Inspiron",
    Year: 2015,
    describe: () => { return `This Laptop is made by ${Laptop.Laptop_make} which is belongs to the serires ${Laptop.model} and it in launched in year ${Laptop.Year}`; }
};
console.log(Laptop.describe());
//44) Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array
// destructuring to assign the first and second laptops to variables. Then, log these variables.
let laptops = [{
        Laptop_make1: "Dell",
        model: "Inspiron",
        Year: 2015,
    }, {
        Laptop_make2: "HP",
        model: "Pavilion",
        Year: 2020,
    }, {
        Laptop_make3: "Macbook",
        model: "Pro",
        Year: 2021,
    }];
let [Laptop1, Laptop2, Laptop3] = laptops; // using destructuring method to extract the values from laptop arry and assign them to variables
console.log(Laptop1);
console.log(Laptop2);
console.log(Laptop3);
//45) Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into
// a single array sorted in ascending order, then log the result.
let Price0 = [30, 110, 200, 7, 9];
let Price1 = [40, 100, 300, 700, 1000];
// 1.in the context of sorting numbers in descending order, b - a ensures that larger numbers appear before smaller numbers.
let combinedArry = [...Price0, ...Price1].sort(function (a, b) { return a - b; }); // in the context of sorting numbers in ascending order, a - b ensures that smaller numbers appear before larger numbers.
console.log(combinedArry); //2.if a -b is positive, it means b should come before a , so they swap the position
export {};
// 3. if a - b is negative, it means a should come before b, so they remain in the same order.
// 4.If a - b is zero, it means a and b are equal in terms of sortin
