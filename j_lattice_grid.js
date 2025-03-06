let gridSize = 20;
let phi = (1 + Math.sqrt(5)) / 2;
let omegaJ = Math.sqrt(2);
let timeOffset = 0;

function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(0);
  for (let x = 0; x < windth; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      let shift = sin(omegaJ * x + cos(PI * timeOffset)) * exp(-0.02 * x);
      let colorVal = map(shift, -1, 1, 50, 255);
      fill(colorVal, 100, 255 - colorVal);
      rect(x, y, gridSize, gridSize);
    }
  }
  timeOffset += 0.1;
}
