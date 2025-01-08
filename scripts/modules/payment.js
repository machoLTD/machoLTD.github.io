// Handles the payment calendar functionality
export function initializePaymentCalendar() {
    const dateDisplay = document.getElementById('date-display');
    const nextDateButton = document.getElementById('next-date');
    let paymentDate = new Date();
    paymentDate.setHours(0, 0, 0, 0);

    // Display the initial payment date
    dateDisplay.textContent = `Next Payment Date: ${paymentDate.toDateString()}`;

    // Update the payment date when the button is clicked
    nextDateButton.addEventListener('click', () => {
        paymentDate.setDate(paymentDate.getDate() + 28); // Add 4 weeks
        dateDisplay.textContent = `Next Payment Date: ${paymentDate.toDateString()}`;
    });
}
