
//13)  More Guests: You've found a bigger dinner table, so there's room for more guests.
let guests = ["Azan","Anus","Huxaif"]
for(let i = 0  ; i < guests.length; i++){

    console.log(`Hello ${guests[i]}, Our table size is increased so we are inviting more people's.\n`)
}

guests.push("Hamzah")
guests.unshift("Usama")
guests.splice(2,0,"Huzaifa")

guests.forEach(function(guest : string){console.log(`Hello ${guest}, I would like to invite you to dinner.`)})

//14) Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

for(let i = 0  ; i < guests.length; i++){

    console.log(`Hello ${guests[i]}, Soryy our table size is decreased so we can only invite 2 people.\n`)
};
let newguest = guests.splice(0,4)
guests.forEach(function(guest : string){console.log(`Hello ${guest}, You  are still invited  to dinner.`)})
guests.splice(0, 2,)
console.log(guests)

// 15) Seeing the World: Think of at least five places you’d like to visit.

let world : string[] = ["Yemen","Turky","India","Saudia Arabia","Palestine",]
console.log("Original Arry :" ,world,"\n")

let ArryAlphabtic = world.slice(0,5).sort()
console.log("Arry in Alphabetical Order:",ArryAlphabtic)

console.log("Original Arry :" ,world,"\n")

let ArryReverse = world.slice(0,5).sort().reverse()
console.log("Arry in reverse Alphabatical order:",ArryReverse)

console.log("Original Arry :" ,world,"\n")

 world.reverse()
console.log("Reversed Arry:",world,"\n")

world.reverse()
console.log("Arry back to original state:",world,"\n")

world.sort()
console.log("Orignial Arry into alphabetical order:",world,"\n")

world.sort().reverse()
console.log("Orignial Arry into reverse  alphabetical order:",world,"\n")

