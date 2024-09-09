const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');

function updateClock() {
    const now = new Date();

    // Format time
    const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    // Format date
    const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    timeElement.innerHTML = timeString;
    dateElement.innerHTML = dateString;
}

// Update clock immediately, then every second
updateClock();
setInterval(updateClock, 1000);
