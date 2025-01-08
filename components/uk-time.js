function updateUKTime() {
    // Get the element where UK time will be displayed
    const ukTimeElement = document.getElementById('uk-time');

    // Fetch the current UK time using the Europe/London timezone
    const now = new Date();
    const options = {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };
    const ukTime = new Intl.DateTimeFormat('en-GB', options).format(now);

    // Update the text content of the UK time element with a smooth transition
    ukTimeElement.style.transition = 'opacity 0.3s';
    ukTimeElement.style.opacity = 0; // Fade out
    setTimeout(() => {
        ukTimeElement.textContent = `UK Time: ${ukTime}`;
        ukTimeElement.style.opacity = 1; // Fade back in
    }, 300);
}

// Update the UK time immediately and every second thereafter
updateUKTime();
setInterval(updateUKTime, 1000);
