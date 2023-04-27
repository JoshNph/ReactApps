// 1. Ticking clock
// 2. Div with and id of "clock"
// 3. Display the current hours, minutes, and seconds

function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").innerHTML = timeString;
}

setInterval(updateClock, 1000); // Update the clock every second
