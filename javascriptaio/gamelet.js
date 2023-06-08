/*
Gamelet: a starting point for writing games;
Author: Chris Minnick
Version: 1.0

Instructions: 
Include gamelet.js in an HTML document containing an element with an id of 'ball'
The script will detect when the left or right arrow key is pressed and will move the ball element
accordingly
*/

const ball = document.getElementById("ball"); // get the ball
document.addEventListener("keydown", handleKeyPress); // listen for keys
let positionX = 0;
let positionY = 0;

/*
handleKeyPress
responds to certain key presses by updating position.
*/

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    positionX = positionX - 15;
  }
  if (e.code === "ArrowRight") {
    positionX = positionX + 15;
  }
  if (e.code === "ArrowUp") {
    positionY = positionY - 15;
  }
  if (e.code === "ArrowDown") {
    positionY = positionY + 15;
  }
  if (positionX < 0) {
    positionX = 0;
  }
  if (positionY < 0) {
    positionY = 0;
  }
  refresh(); // reposition the ball
}

/*
refresh changes the position of the ball
*/

function refresh() {
  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";
}
