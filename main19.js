// Question 55 : Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function score(...score) {
    let averageScore = 0;
    for (let i = 0; i < score.length; i++) {
        averageScore += score[i] / score.length;
    }
    console.log("Average =", averageScore);
}
score(22, 45, 87);
//or
function calScore(...score2) {
    let average = score2.reduce((prev, curr) => {
        console.log(prev + curr);
        return (prev + curr);
    });
    let calAverage = average / score2.length;
    console.log("Average =", calAverage);
}
calScore(22, 45, 87, 99, 78);
function createQuickProfile(name, age, ...score) {
    let average = score.reduce((prev, curr) => {
        return prev + curr;
    });
    let calAverage = average / score.length;
    let Profile = {
        Name: name, // here Name is the key in type Alias and name is the parameter of function
        Age: age,
        Score: score,
        AverageScore: calAverage,
        Performance: calAverage < 70 ? `Poor ${name} Needs improvement` : `Excellent ${name} Performaning Well`,
    };
    return Profile;
}
let UserProfileObject = createQuickProfile("Azan", 19, 17, 71, 32, 58, 27, 60, 395);
console.log("User Profile :", UserProfileObject);
let UserProfileObject1 = createQuickProfile("Ayesha", 20, 12, 99, 85, 97, 99, 18);
console.log("User Profile :", UserProfileObject1);
// Question : 57   Add a Special Number: Make a program that creates custom adders
//(In programming, an "adder" typically refers to a function or a piece of code that performs addition. It's a term commonly used in the context of arithmetic operations, where an adder takes two numbers as input and produces their sum as output.).
//These adders can add a specific number to any other number you give them later.
function adder(Oldvalue) {
    return (NewPassedValue) => {
        console.log(Oldvalue + NewPassedValue);
    };
}
let returnfunction = adder(5);
returnfunction(12);
export {};
