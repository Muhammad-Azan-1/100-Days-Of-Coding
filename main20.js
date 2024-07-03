//Question no : 58  Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["Car"] = 0] = "Car";
    Vehicles[Vehicles["Truck"] = 1] = "Truck";
    Vehicles[Vehicles["Motorcycle"] = 2] = "Motorcycle";
    Vehicles[Vehicles["Bus"] = 3] = "Bus";
    Vehicles[Vehicles["Bicycle"] = 4] = "Bicycle";
})(Vehicles || (Vehicles = {}));
let car = Vehicles.Car;
console.log(car);
let index = Vehicles[0];
console.log(index);
//Question 59: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking,
// and then fill in this blueprint with an example student.
///In JavaScript, when we talk about creating a template for something like a student, we typically mean defining a class or an object
class Student {
    Name;
    Age;
    Courses;
    constructor(name, age, courses) {
        this.Name = name;
        this.Age = age;
        this.Courses = courses;
    }
}
let student = new Student("Muhammad Azan", 16, ["Javascript", "Typscript", "Next.js"]); // As i pass value to the class through Instance the Instance create a object based on the bluieprint(Planing we describe in the class to create object) of the clas
console.log(student);
let circle = {
    shape: "Circle",
    radius: 10,
    area: 314,
};
let rectangle = {
    shape: "rectangle",
    area: 100,
};
console.log(circle);
console.log(rectangle);
export {};
