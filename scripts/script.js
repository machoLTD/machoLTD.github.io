// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Import and initialize the payment functionality
import { initializePaymentCalendar } from './modules/payment.js';
initializePaymentCalendar();

// Import and initialize UK time functionality
import { updateUKTime } from './uk-time.js';
updateUKTime();  // Update time immediately
setInterval(updateUKTime, 1000);  // Update every second
