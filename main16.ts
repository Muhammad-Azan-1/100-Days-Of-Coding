
//46) Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

   function hobbies(...myHobbies:any[]){

    myHobbies.forEach(element => {

        console.log(`I enjoy ${element}`)

    });

   }

  hobbies("learning","Researching","playing","swiming")

//47) Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

function idealDay(){

        return `

     My ideal  day:

    - I wake up early and enjoy a peacfull pre-dawn Salah
    - Go for a refereshing run to energize my body
    - Have a healthy breakfast and plan out the day.
    - Spend At least 5-8 hours on coding and programming
    - Take breaks to relax, meditate,
    - Spend some time on learning college work
    - Have a delicious dinner, experimenting with new recipe
    - To be fit I spend some time on gymnizing
    - Have a good night's sleep
    - Have a good day.

        `
}

console.log(idealDay())

//48)Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

// Refactoring is the process of restructuring existing computer code without changing its external behavior. The main goals of refactoring are to improve the design, structure, and readability of the code, making it easier to maintain and understand.
//  It often involves making the code more efficient, reducing complexity, and eliminating redundancy.

function areaOfRectangle(length:number , width:number){

    return length * width;
}
console.log(areaOfRectangle(33,9000))

// Refactoring arrow function

let AreaOfRectangleByArrow = (Length:number , Width:number) => {console.log(Length * Width)}

AreaOfRectangleByArrow(33,90)