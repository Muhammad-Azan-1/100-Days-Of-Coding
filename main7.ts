// 19) Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.

let arry = [1, 2, 3, 4, 5]
console.log(arry[5]) // = undefined (Creates an array index error)
console.log(arry[4]) // = 5 (Acess actual index)

// 20) Conditional Tests: Write a series of conditional tests. Predict the results of each test.

let Name = "Azan"

 // To evalute 5 true conditions

 //1
console.log("Is Name = Azan? I predict true")
console.log(Name === "Azan")

//2
console.log("Is Name length = 4? I predict true")
console.log(Name.length == 4)

//3
console.log("Is Name.toLowercase  != Azan I predict true")
console.log(Name.toLocaleLowerCase() != "Azan" )

//4
console.log("Is Name.toUpperCase != Azan I predict true")
console.log(Name.toLocaleUpperCase() != "Azan")

//5

console.log("Is Name.includes('a') I predict true")
console.log(Name.includes("a"))

// To evalute 5 false conditions

//1
console.log("Is Name = azan? I predict false")
console.log(Name === "azan")

//2
console.log("Is Name length = 5? I predict false")
console.log(Name.length == 5)

//3
console.log("Is Name.toLowercase  != azan I predict false")
console.log(Name.toLocaleLowerCase() != "azan")

//4
console.log("Is Name.toUpperCase  == azan I predict false")
console.log(Name.toUpperCase() == "azan")

//5
console.log("Is Name.includes('x')  I predict false")
console.log(Name.includes('x'))

// 21) More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

// Equality with strings

let car : string =  "Toyota";
console.log("Testing equality with strings")
console.log( car === "ToyoTa" ,"I predicted False")
console.log( car === "Toyota", "I predicted True")

console.log("\n")

console.log("Testing unequality with strings")
console.log( car !== "ToyoTa" ,"I predicted True")
console.log( car !== "Toyota", "I predicted False")

console.log("\n")

console.log("Testing with lower case:")
console.log(car.toLocaleLowerCase() === "toyota", "I predicted True")
console.log(car.toLocaleLowerCase() !== "toyota", "I predicted False")

console.log("\n")

console.log("Testing with upper case:")
console.log(car.toLocaleUpperCase() === "TOYOTA", "I predicted True")
console.log(car.toLocaleUpperCase() !== "TOYOTA", "I predicted False")

console.log("\n")

console.log("Numerical tests:");
console.log(1 === 1, "I predicted True")
console.log(1 !== 1, "I predicted False")

console.log("\n")

console.log("Testing with 'and' and 'or':");
console.log( 5 + 9 && 9 + 1 === 10 , "I predicted True")
console.log( 5 + 9 && 9 + 1 !== 10 , "I predicted False")

console.log("\n")

console.log("Test whether an item is in a array");
let arrys = [1, 2, 3, 4, 5]
console.log(arrys.includes(2), `arry includess the number ${arrys[1]}`)

console.log("\n")

console.log(" Testing whether an item is not in a array")

console.log(arrys.includes(6), `arry does not includes the number 6`)