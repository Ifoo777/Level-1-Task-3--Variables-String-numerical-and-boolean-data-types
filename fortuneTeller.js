let mothersName = prompt("What is your mothers first name?");
let streetName = prompt("What is the street name you grew up on ?");
let favoriteColour = prompt("What is your favorite colour as a child ?");
let age = prompt ("What is your current age?");
let number = prompt("Enter a number between 1 and 10");

// Rough work to solve the algorithm
console.log(number  + " is the number of years in which they will meet their best friend");

console.log("Their best friends name will be " + (mothersName + streetName));

console.log(age % number  +  " is the number of years in which they will get married");

console.log(age % number  + " Is how many children they will have");

console.log(age - number  + " Is in how many years they will dye their hair" + (favoriteColour));

//Output the result of the Actual multiline string given above
console.log( " In " + (number)  + " Years You are going to meet your best friend named " + (mothersName + streetName));
console.log(" You will get married in "  + (age % number) + " Years and have "  + (age % number)  + " children "); 
console.log(" In " + (number) + " Years you are going to dye your hair " + (favoriteColour));