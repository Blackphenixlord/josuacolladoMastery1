// Function to calculate the total cost based on selections
function calculateTotal() {
    let totalCost = 0;
    const designPrices = document.querySelectorAll('input[name="design"]:checked');
    designPrices.forEach((checkbox) => {
        totalCost += parseFloat(checkbox.value);
    });

    const sizePrice = document.querySelector('input[name="size"]:checked');
    if (sizePrice) {
        totalCost += parseFloat(sizePrice.value);
    }

    const quantity = parseInt(document.getElementById('quantity').value);
    totalCost *= quantity;

    return totalCost;
}

// Function to validate the form inputs
function validateForm(event) {
    event.preventDefault();  // Prevent form submission

    const firstName = document.getElementById('first-name').value;
    const companyName = document.getElementById('company-name').value;
    const email = document.getElementById('email').value;

    if (!firstName || !companyName || !email) {
        alert('Please fill out all required fields.');
        return;
    }

    const total = calculateTotal();
    const selectedDesigns = getSelectedDesigns();
    const selectedSize = getSelectedSize();
    const quantity = parseInt(document.getElementById('quantity').value); // Get quantity from input
    displayOrderSummary(total, selectedDesigns, selectedSize, companyName, firstName, email, quantity);
}

// Function to get selected designs
function getSelectedDesigns() {
    const selectedDesigns = [];
    const designPrices = document.querySelectorAll('input[name="design"]:checked');
    designPrices.forEach((checkbox) => {
        selectedDesigns.push(checkbox.parentElement.textContent.trim());
    });
    return selectedDesigns.join(", ");
}

// Function to get selected size
function getSelectedSize() {
    const sizePrice = document.querySelector('input[name="size"]:checked');
    return sizePrice ? sizePrice.parentElement.textContent.trim() : "Not selected";
}

// Function to display the order summary
function displayOrderSummary(total, selectedDesigns, selectedSize, companyName, firstName, email, quantity) {
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = `
        <h2>Order Summary</h2>
        <p>Company Name: ${companyName}</p>
        <p>First Name: ${firstName}</p>
        <p>Email: ${email}</p>
        <p>Design(s) Selected: ${selectedDesigns}</p>
        <p>Size Selected: ${selectedSize}</p>
        <p>Quantity: ${quantity}</p> <!-- Added quantity to the summary -->
        <p>Total Cost: $${total.toFixed(2)}</p>
    `;

    // Call the function to send the email (example using a service like EmailJS)
    sendEmail(companyName, firstName, email, selectedDesigns, selectedSize, total, quantity);
}

// Function to send an email (basic example, you can integrate with services like EmailJS)
function sendEmail(companyName, firstName, email, selectedDesigns, selectedSize, total, quantity) {
    const emailBody = `
        Order Summary:
        Company Name: ${companyName}
        First Name: ${firstName}
        Email: ${email}
        Design(s) Selected: ${selectedDesigns}
        Size Selected: ${selectedSize}
        Quantity: ${quantity} <!-- Added quantity to the email body -->
        Total Cost: $${total.toFixed(2)}
    `;
    
    // Example of sending an email via a service (you can replace this with actual code like EmailJS)
    console.log('Sending email to the company...');
    console.log(emailBody);
}

// Event listener for form submission
document.getElementById('order-form').addEventListener('submit', validateForm);

// Reset functionality to clear order summary and reset the form
document.getElementById('resetButton').addEventListener('click', function () {
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = ""; // Clear order summary
    document.getElementById('order-form').reset(); // Reset the form
    orderSummary.style.display = 'none'; // Hide the order summary section
});
