//49)// Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features
//like how much storage it has, the size of its screen, and how long its battery lasts.
let Object = {
    name: "Azan",
    Details: {
        GIAIC: "Student",
        Batch: 4,
        Timing: "9-12",
        age: 18,
        Address: {
            City: "Karachi",
            Country: "Pakistan",
            State: "Sindh",
            Pincode: 47100,
            Phone: 12343153,
            Email: "xyz",
        },
        Skills: {
            Languages: ["C", "C++", "Java", "Python"],
            Tools: ["Visual Studio", "Visual Studio Code"],
            Frameworks: ["Django", "Flask", "Node.js", "Express.js"],
        },
    },
};
let { name, Details: { GIAIC, Batch, Timing, age, Address: { City, Country, State, //here using destrcutring method to acess each value of the object inside a varaible
Pincode, Phone, Email, }, Skills, Skills: { Languages }, Skills: { Tools }, Skills: { Frameworks }, }, } = Object;
console.log(`Language: ${Languages[3]}`);
// Question 51: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment,
//like adjusting labels based on user choices.
// Making flexible keys in an object means creating an object whose keys can be determined dynamically based on input or other factors
function MakingFlexiableObjectsKeys(key, value) {
    let DynamicObject = {};
    DynamicObject[key] = value;
    return DynamicObject;
}
console.log(MakingFlexiableObjectsKeys("name", "Azan"));
console.log(MakingFlexiableObjectsKeys("Class", 12)); // this method creates different object for each key-value
console.log(MakingFlexiableObjectsKeys("Age", 18));
console.log(MakingFlexiableObjectsKeys("Faculty", "CS"));
//or
function MakingFlexiableObjectKey(...pairs) {
    let dynamicObject = {};
    pairs.forEach((element) => {
        let [key, value] = element.split(":"); //split coverts Elements into an arry [Grass , green]
        dynamicObject[key] = value;
    });
    return dynamicObject;
}
let dynamicObject = MakingFlexiableObjectKey("Grass:Red", "Water:Blue", "Sky:Blue", "car:red"); //This method wil create one object formultiples key-value
console.log(dynamicObject);
export {};
