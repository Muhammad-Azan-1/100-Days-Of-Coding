


 // 7)  Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. Print that message.

let  number : number = 8
console.log(`my favorite number is ${number}` )

// 8) Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list,
//one at a time.

let friends_names : string[] = ["Azan","Anus","Huzaif","Yousuf","Mavi","Tanzeel",]
friends_names.forEach(function (names:string) {console.log(names)});

//9) Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them.
//The message should be the same for each person, but personalized with their name

 let friends_name : string[] = ["Azan","Anus","Huzaif","Yousuf","Mavi","Tanzeel",]
  friends_name.forEach( (names:string) => console.log(`Hello ${names}, How are you doing today?`));