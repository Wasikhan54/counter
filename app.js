// // Initial counter value
// let counter = 0;

// // Get elements from the DOM
// const counterDisplay = document.getElementById('counter');
// const increaseButton = document.getElementById('increase');
// const decreaseButton = document.getElementById('decrease');
// const resetButton = document.getElementById('reset');

// // Function to update the counter display
// function updateCounterDisplay() {
//     counterDisplay.textContent = counter;
// }

// // Event listeners for the buttons
// increaseButton.addEventListener('click', () => {
//     counter++;
//     updateCounterDisplay();
// });

// decreaseButton.addEventListener('click', () => {
//     counter--;
//     updateCounterDisplay();
// });

// resetButton.addEventListener('click', () => {
//     counter = 0;
//     updateCounterDisplay();
// });

// // Initial display update
// updateCounterDisplay();


let counter = 0;
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const resetBtn = document.getElementById('reset')
const DisplayBtn = document.getElementById('counter')
function counterdisplay (){
    DisplayBtn.textContent = counter
}
increaseBtn.addEventListener('click', () =>{
    counter++
    counterdisplay()
})

decreaseBtn.addEventListener('click', () =>{
    counter--
    counterdisplay()
})

resetBtn.addEventListener('click', () =>{
    counter= 0
    counterdisplay()
})