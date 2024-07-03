// // Question NO 67
// // Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.

function loop(number: number){

    for(let i = 0 ; i < number; i++){

        console.log(i)
    }
}
loop(5)



// // Question NO 68
// // Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

// let fullName = "Azan";
// fullName = "Muhammad Azan";
// console.log(fullName); // logs Muhammad Azan

// const myName = "Azan";
//  try{

//     myName = "MUhammad Azan";
//  }
//  catch(error){                                                          
     
//     console.log("Cannot assign to 'myName' because it is a constant");
//  } 

// //  The code inside the try block is executed first.
// // If an error occurs in the try block, JavaScript jumps to the catch block to handle the error.
// // If no error occurs in the try block, the catch block is skipped entirely.


// // QUestion NO:68
// // Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
 
{
    let fullName  = "Azan"
    console.log(fullName) // works

    const myName = "Muhammad Azan"
    console.log(myName) // works
}

try{
    console.log(fullName) 
    
} catch(eror){

    console.log("eror Cannot find name 'fullName'")
}


try{
    console.log(myName)

} catch(eror){
    console.log("eror Cannot find name'myName'")
}





