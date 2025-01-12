async function fetchServerStatus() {

    const statusText = document.querySelector('.status-text');
    const statusDot = document.querySelector('.status-dot');
    
    if (statusText && statusDot) {
 
        const isOnline = true; 
        
        if (isOnline) {
            statusText.textContent = "Discord Bot Online";
            statusDot.style.background = '#4CAF50';
        } else {
            setOfflineStatus();
        }
    }
}

function setOfflineStatus() {
    const statusText = document.querySelector('.status-text');
    const statusDot = document.querySelector('.status-dot');
    
    if (statusText && statusDot) {
        statusText.textContent = 'Discord Server Offline';
        statusDot.style.background = '#f44336';
    }
}

setInterval(fetchServerStatus, 30000);


fetchServerStatus();