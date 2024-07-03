

// / 16)  Dinner Guests: Use one of your programs from Exercises 11 through 16 to print a message indicating the number of people you are inviting to
// dinner.

 let guests = ["Azan","Anus","Huxaif"]

 console.log(`I am inviting ${guests.length}  people to  dinner `)

// 17) Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or
// anything else you’d like. Write a program that creates a list containing these items.

let countries = ["Palestine","Yemen","Turkey","India"]
console.log(`Countires I want to visit are: ${countries}`,)

//18) Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let car : any = {

    Name: "ElectraLux",
    Brand: "Tesla",
    ModelYear: "2024",
    Type: "Electric Luxury Sedan",
    Engine: "Dual electric motors (front and rear)",

}

console.log( `Car name: ${car["Name"]}, Manufactured by: ${car["Brand"]}, Manufactured in year: ${car["ModelYear"]}, Engine Type : ${car["Engine"]}  ` )
