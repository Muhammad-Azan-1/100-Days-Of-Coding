// 10)  Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation = ["Honda Motorcycle", " Toyota Car", "Bombardier Global 7500 Jet", "Sumitomo Heavy Industries Seawise Giant ship"];
for (let modes of transportation) {
    console.log(`I would like to own a ${modes} `);
}
// 11) Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people
// you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guests = ["Azan", "Anus", "Huxaif"];
for (let i = 0; i < guests.length; i++) {
    console.log(`Hello ${guests[i]}, I would like to invite you to dinner`);
}
//12) Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
console.log(`${guests[2]} can't make it to the dinner.`);
let newGuest = guests.splice(2, 1, "Tahir");
for (let i = 0; i < guests.length; i++) {
    console.log(`Hello ${guests[i]}, I would like to invite you to dinner.`);
}
export {};
