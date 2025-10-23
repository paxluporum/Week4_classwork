// let enemy = {
//     health : 42

// }

// let knight = {
//     x : 5,
//     y : 10,
//     attackPower : 10,
//     name : "Fay",
//     isAlive : true,
//     attack : function(enemy) {
//         console.log(this);
//         enemy.health -= this.attackPower;
//     }
// }

// knight.macaroni = "spaghetti";
// knight.attack(enemy);


// ================================================
// JavaScript Object Challenges
// ================================================

// Challenge 1: Make Your First Object
// Create an object called car with three properties:
// brand, model, and year. Give them any values you like.
// Log the whole object, then log just the brand.

// Your code here:

let car = {
    brand : "WayneTech",
    model : "camry",
    year : 2005,
}



// -----------------------------------------------

// Challenge 2: Change a Property
// Using your car object from Challenge 1, change the year to a newer one.
// Then log a message like "My car is now a 2023 Toyota!"

// Your code here:

function newcar() {
    console.log(car.brand + 18)
}

console.log(newcar, "My car is now a 2023 WayneTech!");


// -----------------------------------------------

// Challenge 3: Add a New Property
// Add a new property called color to your car object.
// Then log "My car is [color]" using the color you added.

// Your code here:
 
car.color = "blue";

console.log(car);


// -----------------------------------------------

// Challenge 4: Nested Object
// Create an object called students with two student objects inside.
// Both students should have a grade for math and art.
// Log each student's art score.

// Your code here:

let student = {
    studentA : {
        math : "A",
        art : "B",
    },
    studentB : {
        math : "D",
        art : "B",
    }
}

console.log(student);


// -----------------------------------------------

// Challenge 5: Combining Objects and Functions
// Create an object called player with properties: name and score.
// Add a function called addPoints(points) inside the object
// that increases player.score by the number given and logs the new score.
// Call addPoints() a few times to test it.

// Your code here:

let player = {
    name : "Ronald",
    score : 0,
    addPoints : function(delta) {
        this.score = this.score + delta;
        console.log(this.score);
    }
}

player.addPoints(3);
player.addPoints(4);
player.addPoints(34);
player.addPoints(3434);
player.addPoints(343432);


// ================================================
// End of Object Challenges
// ================================================
