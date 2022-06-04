const age = parseInt(prompt("How old are you?"));

console.log();

if(isNaN(age)){
    // condition === true
    console.log("Please write a number");
} else {
    // condition === false
    console.log("Thank you for writing your age.");
} 