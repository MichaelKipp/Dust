/*
Author: Michael Kipp
Date: 7/19/2018
Project: Physical art project
*/

/*
TODO: Start
*/

var DRAG;

function setup() {
  createCanvas(windowWidth, windowHeight);
  width = windowWidth;
  height = windowHeight;

  smooth();
  background(255);
  angleMode(RADIANS);
  collideDebug(true);
}

function draw() {
    background(255);
    noFill();
}

function Particle(location, color) {
  this.location = location;

  this.update = function() {
  };

  this.display = function() {

  };
}

function mousePressed() {
  if (mousePressed && (mouseButton == LEFT)) {

  }
  if (mousePressed && (mouseButton == RIGHT)) {

  }
}

function mouseReleased() {

}

function mouseDragged() {

}

function keyPressed() {
  if (keyCode == 32) {

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
