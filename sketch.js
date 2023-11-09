function setup() {
    createCanvas(400, 400);
    background("#29A01A");
  }
  
  function draw() {
    stroke("white");
    fill("red");
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }