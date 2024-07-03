// /40) Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
let magician_Name = ["Houdini", "Copperfield", "Penn", "Angel"];
function showMagician(magician) {
    return magician.map((names) => (names));
}
function makeGreat(name) {
    return name.map((names) => (`The Great ${names}`));
}
let copyArry = magician_Name.slice(0);
let new_Arry = makeGreat(copyArry);
console.log(new_Arry);
let original_Arry = showMagician(magician_Name);
console.log(original_Arry);
//41) : Sandwiches: Summarize sandwich orders with varying ingredients.
function make_sandwich(...sandwich) {
    console.log(`The coustomer orders a sandwich with:\n `);
    console.log(sandwich, "\n");
    console.log("\n", `"A delectable sandwich featuring ${sandwich} on whole wheat bread."`, "\n"); // when ever we use any arry inside templet literals it wil converts the arry into string
}
make_sandwich("beef", "Onion", "Mashroom", "Cucumber");
make_sandwich("Chicken", "Tomato", "Onion", "Chesse", "Egg", "Chipolte sauce", "ketchup");
//42)  Cars: Create detailed car objects with flexible properties.
function make_car(carName, company, modelYear, ...moreInfo) {
    let car = {
        Car_Name: carName,
        Company: company,
        Model_Year: modelYear,
    };
    // ////////////////////////////////////////////////////////////
    //The method to add any number of properties in an object//
    moreInfo.forEach(function (info) {
        let [Key, value] = info.split(":"); // now each element in the info is split on the basis of colon and coveret into and arry ["color" , "blue"]
        car[Key.trim()] = value.trim(); // now the key and value is assigned to the car object
    });
    // //////////////////////////////////////////////////////////////////
    return car;
}
console.log(make_car("BMW", "BMW", 2023, "color:Black", "topspeed:250", "isLuxury:true"));
console.log(make_car("corolla", "toyota", 2024, "color:blue", "topspeed:250", "isLuxury:false", "HP:50"));
export {};
