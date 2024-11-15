// Declare variables for user input
let num1, num2;

// Prompt the user for the first number between 1 and 10 and validate the input
while (true) {
    num1 = prompt("Enter a number between 1 and 10:");
    num1 = parseInt(num1, 10);  // Convert input to an integer

    if (!isNaN(num1) && num1 >= 1 && num1 <= 10) {
        break;  // Exit the loop if the input is valid
    }
    alert("Invalid input. Please enter a number between 1 and 10.");
}

// Prompt the user for the second number between 5 and 15 and validate the input
while (true) {
    num2 = prompt("Enter a number between 5 and 15:");
    num2 = parseInt(num2, 10);  // Convert input to an integer

    if (!isNaN(num2) && num2 >= 5 && num2 <= 15) {
        break;  // Exit the loop if the input is valid
    }
    alert("Invalid input. Please enter a number between 5 and 15.");
}

// Multiply the numbers and determine if the product is even or odd
let product = num1 * num2;

// Output the result to the console
if (product % 2 === 0) {
    console.log("The product " + product + " is even.");
} else {
    console.log("The product " + product + " is odd.");
}
