// Initialize arrays and variables
let siteTopics = ["Serving", "Passing", "Spiking", "Blocking", "Teamwork"]; // Volleyball topics
let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; // Days of the week

let firstName = "Josue"; // User's first name

let birthYear = 2008; // User's year of birth

// Modify the arrays and log relevant information
siteTopics.push("Drills"); // Add another volleyball topic

console.log("The length of the siteTopics array is " + siteTopics.length); // Output array length

// Log each value in the siteTopics array
let index = 0;
while (index < siteTopics.length) {
    console.log(siteTopics[index]);
    index++;
}

// Reverse and log the dayNames array
dayNames.reverse();

for (let i = 0; i < dayNames.length; i++) {
    console.log(dayNames[i]);
}

// Remove the first item from the dayNames array
dayNames.shift();

//
try {
  if (dayNames[0] == "Sunday") {
    // If true then throw an error message
    throw "Error: Sunday should be missing!";
  }
} catch (error) {
  console.log(error);
} finally {
  // Finally block displaying a message with the variables made
  console.log(
    firstName +
      " was born in the year " +
      birthYear +
      ". I think the day was either a " +
      dayNames[4] + // Second Value: Tuesday
      " or " +
      dayNames[5] + // Fourth Value: Monday
      "."
  );
}
