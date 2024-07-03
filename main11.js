//31) Pizzas: Share your favorite pizzas and express your love for them.
let pizzas = ["Margherita Pizza", "Pepperoni Pizza", "BBQ Chicken Pizza"];
for (let names of pizzas) {
    console.log(`My favorite pizza is ${names}`);
}
// 32) Animals: Highlight animals with a common trait.
let Animals = ["Horse", "Parrot", "Goat",];
for (let names of Animals) {
    if (names == Animals[0]) {
        console.log(`${names} are fast and loyal`);
    }
    else if (names == Animals[1]) {
        console.log(`${names} are very beautiful and Chatterbox`);
    }
    else if (names == Animals[2]) {
        console.log(`${names} are very beautiful and playfull`);
    }
}
//33)   T-Shirt: Create a function for customizing t-shirts.
let createTShirt = (shirtSize, shirtColor, shirtText) => {
    console.log(`The size of the t-shirt is ${shirtSize} and color is ${shirtColor}, Text on the T-Shirt will be ${shirtText}`);
};
createTShirt("Medium", "Black", "Hello World");
createTShirt("Medium", "Blue", "I love JS");
export {};
