document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    const toggleButton = document.getElementById('toggleFormat');
    let is24HourFormat = false;

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let period = '';

        if (!is24HourFormat) {
            period = hours >= 12 ? ' PM' : ' AM';
            hours = hours % 12 || 12; // Convert to 12-hour format
        }

        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');

        clockElement.textContent = `${hours}:${minutes}${period}`;
    }

    function toggleFormat() {
        is24HourFormat = !is24HourFormat;
        toggleButton.textContent = is24HourFormat ? 'Switch to 12-hour format' : 'Switch to 24-hour format';
        updateClock(); // Update the clock immediately after switching format
    }

    toggleButton.addEventListener('click', toggleFormat);

    // Update the clock every second
    setInterval(updateClock, 1000);
    updateClock(); // Initial call to display the clock immediately
});
