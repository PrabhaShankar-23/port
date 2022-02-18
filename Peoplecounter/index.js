// document.getElementById("count-el").innerHTML = 5;

// let count = 0;

// we will first take count of variable
// Then that count variable will be initialized with this count app
let count = 0;

// listen for clicks on counter button
// increment the count variable when this button is clicked!
// Reflect this change in variable through html to reflect in the browser ultimately.

function increment() {
count += 1;
document.getElementById("count-el").innerHTML = count;
// console.log("The thumps up button was clicked!")
}

function save() {

    document.getElementById("save-el").textContent += count + " - "  ;
    document.getElementById("count-el").innerHTML = 0;
    count =0;
}

// From the console we can checkout if we have grabbed the correct element.
// Instead of writing these codes together we could have made objects for these codes which 
// will help in giving short reference to understand.

