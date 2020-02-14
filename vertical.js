var ballX = 0;
var ballSpeed = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  ellipse(50, ballX, 50);

  ballX = ballX + ballSpeed;
  
  if (ballX > height) {
    ballSpeed = -ballSpeed;
  }
  
  if (ballX < 0) {
    ballSpeed = -ballSpeed;
  }
}
