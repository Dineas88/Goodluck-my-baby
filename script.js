// Function to reveal the surprise message
function revealSurprise() {
    const surpriseElement = document.getElementById('surprise');
    surpriseElement.style.display = 'block'; // Show the hidden surprise message
}

// Countdown Timer
const examEndTime = new Date("November 23, 2024 15:00:00").getTime(); // Replace with her exam end date and time
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = examEndTime - now;

    if (timeLeft > 0) {
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        countdownElement.innerHTML = `⏳ Time until your exam ends: ${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdownElement.innerHTML = "🎉 The exam is over! Relax now! 🎉";
    }
}

setInterval(updateCountdown, 1000);

// Log message to confirm the script is running
console.log("script.js is loaded and running!");
