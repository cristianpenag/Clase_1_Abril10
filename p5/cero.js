function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  background(0);
}

function draw() {
  background(100,50,100);
  for (var x = 0; x < windowWidth; x+=10){
    for (var y = 0; y < windowHeight; y+=10){
rect(x,y,20,20);

}
  }
}
