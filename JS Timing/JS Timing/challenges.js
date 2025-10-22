// ================================
// JavaScript Timing Challenges
// ================================

// -----------------------------------------------
// Challenge 1: Basic Timeout
// Use setTimeout to log "Hello after 2 seconds!" after exactly 2000 milliseconds.

function Hello() {
    console.log("Hello!");
}

let id =setInterval(Hello, 2000);
clearInterval(id);

function stopInterval() {
    clearInterval(id);
    console.log("Stopped it cold!");
}

// -----------------------------------------------
// Challenge 2: Countdown
// Write a countdown from 3 to 1 using three setTimeout calls.
// Each number should appear one second apart in the console.


function Three() {
    console.log("Three!");
}

let id3= setInterval(Three, 3000)

function Two() {
    console.log("Two!");
}

let id2= setInterval(Two, 4000)

function One() {
    console.log("One!");
}

let id1= setInterval(One, 5000);





// -----------------------------------------------
// Challenge 3: Repeating Message
// Use setInterval to log "Still going..." every second.
// After 5 seconds, stop the interval using clearInterval.







// -----------------------------------------------
// Challenge 4: Delayed Color Change
// Create a <div> in your HTML file with id="box". Put some text in it.
// After 3 seconds, change its background color to blue using setTimeout.





// -----------------------------------------------
// Challenge 5: Flashing Box
// Create a <div> in your HTML file with id="box2". Put some text in it.
// Using setInterval, make the same box’s background color toggle
// between red and white every half second (500 ms).
// Add a setTimeout to stop the flashing after 5 seconds... or when you click on it!






