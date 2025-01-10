alert('clicke on ok button')
// Select the button element
const button = document.getElementById("clickMeButton");

// Define the clickMe function
function clickMe() {
    alert("Button was clicked!");
}

// Add event listener to call the clickMe function when the button is clicked
button.addEventListener("click", clickMe);
