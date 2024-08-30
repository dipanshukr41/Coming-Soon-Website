// Set the launch date
const launchDate = new Date("July 31, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdown = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the launch date
    const distance = launchDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the respective elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".content").innerHTML = "<h1>We have launched!</h1>";
    }
}, 1000);
