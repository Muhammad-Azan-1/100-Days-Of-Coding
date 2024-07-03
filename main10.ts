//28) No Users: Ensure your user list isn’t empty.

let  myArry : any[] = []

if(myArry.length === 0){

    console.log("We need to add some users!")
}

//29) Checking Usernames: Ensure uniqueness in usernames.

let current_users = ["Azan","HUzaif","Ayesha23","ABBAS","Anus2"]
let new_users = ["Zara1","Anus12","Abbas","Kamran","Huzaif",]

new_users.forEach((newNames : string) => {

let user = current_users.some((currNames : string) => currNames.toLocaleLowerCase() === newNames.toLocaleLowerCase())

if(user == true){

    console.log(`Username ${newNames} is already taken`)
}else{
    console.log(`Username ${newNames} is available`)
}

})

//30)  Ordinal Numbers: Display numbers with their ordinal suffixes.

let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

arry.forEach((num : number) => {

    if(num === 1){
        console.log(`${num}st`)
}else if(num == 2){
    console.log(`${num}nd`)
}else if(num === 3){
    console.log(`${num}rd`)
}else if(num === 4){
    console.log(`${num}rth`)
}else if(num === 5){
    console.log(`${num}th`)
}else if(num === 6){
    console.log(`${num}th`)
}else if(num === 7){
    console.log(`${num}th`)
}else if(num === 8){
    console.log(`${num}th`)
}else if(num === 9){
    console.log(`${num}th`)
}else if(num === 10){
    console.log(`${num}th`)
}

})