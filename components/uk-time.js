function updateUKTime() {
    // Get the element where UK time will be displayed
    const ukTimeElement = document.getElementById('uk-time');

    // Fetch current UK time using the Europe/London timezone
    const now = new Date();
    const ukTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(now);

    // Update the text content of the UK time element
    ukTimeElement.textContent = `UK Time: ${ukTime}`;
}

// Ensure the UK time is updated every second
setInterval(updateUKTime, 1000);

// Ensure the time loads immediately when the page is opened
updateUKTime();
