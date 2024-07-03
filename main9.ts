//25) Stages of Life: Determine a person’s life stage with an if-else chain.

let age : number = 80 ;

if(age < 2 ){

    console.log("You are a baby")

}else if( age == 2 ||age < 4){

    console.log("You are a kid")

}else if (age == 4 || age < 12 ){

    console.log("You are a Toddler")

}else if(age == 12 || age < 21 ){

    console.log("You are an Adult")

}else if (age == 21 || age < 51){

    console.log("You are a")

}else if(age == 51 || age < 81){
        console.log("You are Older")
    }

//26)  Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.

let Arry_friuts  : string[] = ["Apple","Orange","Kewee"]

if(Arry_friuts.includes("Orange")){

    console.log("Orange is my favorite fruit")

}
 if(Arry_friuts.includes("Apple")){

    console.log("Apple is my favorite fruit")

}
if(Arry_friuts.includes("Cheries")){

    console.log("Cheries is my favorite fruit")

}
if(Arry_friuts[2] === "Kewee"){

    console.log("I really  like Kewee ")
}

// 27) Hello Admin: Greet users differently, especially 'admin'.

let Greet_user = ["Azan","Admin","Zara","Anus","Huzaif"]

Greet_user.forEach((Names: string) => {

    if(Names === "Admin"){

        console.log(`Hello ${Names} would like to see the status report`)

    }else {console.log(`Hello ${Names}, how it is going today`)}

})