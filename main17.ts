
//49)// Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features
//like how much storage it has, the size of its screen, and how long its battery lasts.

// let smartphone = {
//   Brand: "Apple",
//   Model: "Iphone 14 plus",
//   Features: {
//     Storage: "128GB",
//     ScreenSize: "6.1 inch",
//     Battery: "4000mAh",
//   },
// };

// console.log(smartphone);

//50) Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows,
//like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

//Pulling apart a nested object involves accessing and extracting specific values or subsets of values from a complex structure
//like a nested dictionary or JSON object

type Address = {
  City: string;
  Country: string;
  State: string;
  Pincode: number;
  Phone: number;
  Email: string;
};
type skills = {
  Languages: string[];
  Tools: string[];
  Frameworks: string[];
};
type User = {
  //Defining types of each key inside the object
  name: string;
  Details: {
    GIAIC: string;
    Batch: 4;
    Timing: string;
    age: number;
    Address: Address;
    Skills: skills;
  };
};

let Object: User = {
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

let {
  name,
  Details: {
    GIAIC,
    Batch,
    Timing,
    age,
    Address: {
      City,
      Country,
      State, //here using destrcutring method to acess each value of the object inside a varaible
      Pincode,
      Phone,
      Email,
    },
    Skills,
    Skills: { Languages },
    Skills: { Tools },
    Skills: { Frameworks },
  },
} = Object;

console.log(`Language: ${Languages[3]}`)

// Question 51: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment,
//like adjusting labels based on user choices.
// Making flexible keys in an object means creating an object whose keys can be determined dynamically based on input or other factors

function MakingFlexiableObjectsKeys(key: any, value: string | number) {
  let DynamicObject: any = {};

  DynamicObject[key] = value;

  return DynamicObject;
}

console.log(MakingFlexiableObjectsKeys("name", "Azan",));
console.log(MakingFlexiableObjectsKeys("Class", 12)); // this method creates different object for each key-value
console.log(MakingFlexiableObjectsKeys("Age", 18));
console.log(MakingFlexiableObjectsKeys("Faculty", "CS"));

//or

function MakingFlexiableObjectKey(...pairs: string[]) {   // using rest operator to convert any given argument in an arry

  let dynamicObject: any = {};

  pairs.forEach((element) => {
    let [key, value]  = element.split(":"); //split coverts Elements into an arry [Grass , green]

    dynamicObject[key] = value;
  });

  return dynamicObject;
}

let dynamicObject = MakingFlexiableObjectKey(
  "Grass:Red",
  "Water:Blue",
  "Sky:Blue",
  "car:red"
); //This method wil create one object formultiples key-value
console.log(dynamicObject);






