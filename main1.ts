// 1) Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib,
//would you like to learn some TypeScript today?”

let fullName : string = "Muhammad Azan"
console.log(`"Hello ${fullName}, would you like to learn some TypeScript today?"`)

// 2) Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let myName : string = "muhammad azan"
 console.log(myName.toLocaleUpperCase())
 console.log(myName.toLocaleLowerCase())
console.log(myName.replace(/\b\w/g, (c) => c.toLocaleUpperCase()))

// 3) Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.

console.log(`"Elbert Einstein once said, A person who never made a mistake never tried anything new" `);

// 4) Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person.
//Then compose your message and store it in a new variable called message. Print your message.

let famous_person = "Elbert Einstein"
let messeage = "A person who never made a mistake never tried anything new"
console.log(`${famous_person} once said, ${messeage}`)

// 5) Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n"
// (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.

let personName : string =  "\tMuhammad Azan\n"
console.log(personName)
console.log(personName.trim())

// 6)   Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
//Enclose your operations in print statements.

 let addition = 3 + 5
 console.log(addition)

 let subraction = 10 - 2
 console.log(subraction)

 let multiplication = 4 * 2
 console.log(multiplication)

 let division = 16 / 2
 console.log(division)
