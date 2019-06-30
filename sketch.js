function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,0,50);
}

function draw() {
  fill(0, 0, 0);
  textSize(width / 30);
  textAlign(CENTER, CENTER);
  text('To be continued', windowWidth/2, windowHeight/2);


  if (mouseIsPressed) {
    fill(0,0,0,60);
    strokeWeight(5);
    //stroke(0,0,0,70);
    noStroke();
  } else {
    fill(255);
    strokeWeight(1);
    stroke(0);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
