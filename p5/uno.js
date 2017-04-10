function setup() {
  createCanvas(windowWidth, windowHeight/2);
  background(0);
  noLoop();
}

function draw() {
  for (var x = 0; x < windowWidth; x+=(windowWidth/100)) {
    colorMode(HSB);
    noStroke();
    fill(250,x/25,100);
    ellipseMode(CENTER);
    ellipse(x, windowHeight/4, 50, 50);
  }
}
