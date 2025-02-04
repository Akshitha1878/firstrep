const os = require('os');

function getUptime() {
    const uptimeSeconds = os.uptime(); // Get the system uptime in seconds

    // Convert seconds to days, hours, and minutes
    const days = Math.floor(uptimeSeconds / (24 * 60 * 60)); // Number of complete days
    const hours = Math.floor((uptimeSeconds % (24 * 60 * 60)) / 3600); // Remaining hours
    const minutes = Math.floor((uptimeSeconds % 3600) / 60); // Remaining minutes

    // Return the formatted uptime
    return { days, hours, minutes };
}

function displayUptime() {
    setInterval(() => {
        const { days, hours, minutes } = getUptime();
        console.log(`System Uptime: ${days} days, ${hours} hours, ${minutes} minutes`);
    }, 10000); // Log uptime every 10 seconds
}

displayUptime();
