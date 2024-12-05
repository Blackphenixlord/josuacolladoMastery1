let num1 = prompt("Enter a number between 1 and 10:");
num1 = parseInt(num1);  // Convert input to an integer
let num2 = prompt("Enter a number between 5 and 15:");
num2 = parseInt(num2, 10);  // Convert input to an integer
// console.log(num1)
// Prompt the user for the first number between 1 and 10 and validate the input

while(isNaN(num1) || num1 < 1 || num1 > 10){
    alert("Invalid input. Please enter a number between 1 and 10.");
    num1 = prompt("Enter a number between 1 and 10:");
    num1 = parseInt(num1);
    console.log("popping off!");
}
while(isNaN(num2) || num2 < 5 || num2 > 15){
    alert("Invalid input. Please enter a number between 5 and 15.");
    num2 = prompt("Enter a number between 5 and 15:");
    num2 = parseInt(num2);
    console.log("popping off!");
}

// Multiply the numbers and determine if the product is even or odd
let product = num1 * num2;

// Output the result to the console
if (product % 2 === 0) {
    console.log("The product " + product + " is even.");
} else {
    console.log("The product " + product + " is odd.");
}
