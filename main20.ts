//Question no : 58  Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.



enum Vehicles {

    Car,
    Truck ,
    Motorcycle,
    Bus ,
    Bicycle, 

}

let car = Vehicles.Car;
console.log(car);

let index = Vehicles[0]
console.log(index);




//Question 59: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking,
// and then fill in this blueprint with an example student.

///In JavaScript, when we talk about creating a template for something like a student, we typically mean defining a class or an object

class Student {

    Name : string;
    Age : number;
    Courses:string[]

    constructor(name : string, age : number, courses:string[]){

        this.Name = name;
        this.Age = age;
        this.Courses = courses;
    }

}

let student : Student = new Student("Muhammad Azan",16,["Javascript","Typscript","Next.js"])  // As i pass value to the class through Instance the Instance create a object based on the bluieprint(Planing we describe in the class to create object) of the clas
console.log(student)

//Explanation:
// By creating an instance of the Student class, we pass values to the constructor.
// The constructor initializes the properties of the class with these values.
// As a result, we get an object based on the blueprint (class definition) of the Student class.


//Question 60: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, 
//including properties unique to each shape.

type Shape =  {

    shape: "circle" | "rectangle",
    radius?:number,
    area?: number,
}

let circle  = {

    shape:"Circle",
    radius:10,
    area:314,
}

let rectangle = {

    shape : "rectangle",
    area:100,
    
}

console.log(circle)
console.log(rectangle)