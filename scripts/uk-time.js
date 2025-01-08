// Updates and displays the UK time on the webpage
export function updateUKTime() {
    const ukTimeElement = document.getElementById('uk-time');
    const now = new Date();
    const options = {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };
    const ukTime = new Intl.DateTimeFormat('en-GB', options).format(now);

    // Fade-out and fade-in effect
    ukTimeElement.style.transition = 'opacity 0.3s';
    ukTimeElement.style.opacity = 0; // Fade out
    setTimeout(() => {
        ukTimeElement.textContent = `UK Time: ${ukTime}`;
        ukTimeElement.style.opacity = 1; // Fade back in
    }, 300);
}
