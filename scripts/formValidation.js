// Collect form inputs
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date = document.getElementById('date');
const message = document.getElementById('message');

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page

    // Validate inputs
    if (validateInputs()) {
        // Proceed with form submission actions
        const total = calculateTotal(); // Example for calculating a total, can be customized

        // Log the form values
        console.log("Form Values:");
        console.log("Name:", name.value);
        console.log("Email:", email.value);
        console.log("Phone:", phone.value);
        console.log("Date:", date.value);
        console.log("Message:", message.value);
        console.log("Total Price:", total);
    }
}

// Function to validate inputs
function validateInputs() {
    if (!name.value.trim()) {
        alert("Name field cannot be empty.");
        name.focus();
        return false;
    }

    if (!email.value.trim()) {
        alert("Email field cannot be empty.");
        email.focus();
        return false;
    }

    return true;
}

// Function to calculate the total based on checkboxes
function calculateTotal() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    let total = 0;
    
    checkboxes.forEach((checkbox) => {
        total += parseFloat(checkbox.value);
    });
    return total;
}


//---------------This is added for looks-----------------------------------

function showGames() {
    const feedback = document.getElementById("feedback").value;
    const gamesDiv = document.getElementById("games");
    if (feedback === "Yes") {
        gamesDiv.style.display = "block";
    } else {
        gamesDiv.style.display = "none";
    }
}

document.getElementById("leaveMessage").addEventListener("change", function() {
    const leaveMessage = this.value;
    const messageLabel = document.getElementById("messageLabel");
    const messageTextarea = document.getElementById("message");

    if (leaveMessage === "Yes") {
        messageLabel.style.display = "block";
        messageTextarea.style.display = "block";
    } else {
        messageLabel.style.display = "none";
        messageTextarea.style.display = "none";
    }
});
//----------------------------------------------------------------------

// Attach event listener to the form submit button
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener("submit", handleFormSubmit);
