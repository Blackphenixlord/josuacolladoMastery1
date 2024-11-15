// 1. Let's store some sentences in variables
let sentence1 = "Oscar has 5 kids and a beautiful wife named Stella. 4 of the children are identical twins and the other child is the oldest by 1 year.";
let sentence2 = "The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area.";
let sentence3 = "This summer they plan on traveling to El Paso to visit as many family members as possible.";

// 2. Finding numbers in the first sentence
let num1 = sentence1.slice(10,12); // This finds the first number ("5")
let num2 = sentence1.slice(52,54); // This finds the second number ("4")
let num3 = sentence1.slice(127,129); // This finds the third number ("1")
//\d+: This is a regular expression pattern.
//The + means "one or more" of the preceding character, so \d+ matches one or more consecutive digits.
///g: This is a "global" flag that makes the regex search for all occurrences, not just the first one.
//The match() method is called on a string (sentence2 in your case).
//This method returns an array of all substrings in the string that match the given regular expression.


// 3. Finding numbers in the second sentence
let num4 = sentence2.slice(15,17); // This finds the first number ("6")
let num5 = sentence2.slice(63,65); // This finds the second number ("2")
let num6 = sentence2.slice(96,-19); // This finds the third number ("100")

// 4. Getting "10" and "0" from the last number
let num7 = num6.substring(0, 2); // This takes the first two digits of "100" ("10")
let num8 = num6.substring(2, 3); // This takes the third digit of "100" ("0")

// 5. Turning our number strings into real numbers
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
num4 = parseInt(num4);
num5 = parseInt(num5);
num6 = parseInt(num6);
num7 = parseInt(num7);
num8 = parseInt(num8);

// 6. Adding all the numbers together
let sumTotal = num1 + num2 + num3 + num4 + num5 + num7;

// 7. Showing the result in the console
console.log("The variable sumTotal is storing " + sumTotal);

// 8. Finding "San Antonio" in the second sentence
let sanAntonio = sentence2.slice(41,52);

// 9. Changing the third sentence and showing it
sentence3 = sentence3.replace("El Paso", sanAntonio); // Replacing "El Paso" with "San Antonio"
console.log(sentence3);

// 10. Counting cars with a loop
let i = num3; // Starting at 1
while (i <= num7) {
  console.log("I saw " + i + " car(s) on my trip.");
  i++; // Increasing the count by 1 each time
}

