document.addEventListener('DOMContentLoaded', () => {
    // Calendar Logic
    const dateDisplay = document.getElementById('date-display');
    const nextDateButton = document.getElementById('next-date');
    let currentDate = new Date('2023-12-31'); // Starting date

    const updateDateDisplay = () => {
        dateDisplay.textContent = `Date of Payment: ${currentDate.toDateString()}`;
    };

    nextDateButton.addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() + 28);
        updateDateDisplay();
    });

    updateDateDisplay(); // Initialize display
});
