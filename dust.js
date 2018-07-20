/*
Author: Michael Kipp
Date: 7/19/2018
Project: Physical art project
*/

/*
TODO: Start
*/

var DRAG;
var NUM_PARTICLES;
var BUBBLE_SIZE;
var TOP_SPEED;
var BLAST_RADIUS;

function setup() {
  width = windowWidth;
  height = windowHeight;
  createCanvas(width, height);

  DRAG = .9;
  NUM_PARTICLES = 10000;
  TOP_SPEED = 15;
  BLAST_RADIUS = 50;
  BUBBLE_SIZE = 10;

  smooth();
  background(255);

  particles = [];

  for (i = 0; i < NUM_PARTICLES; i++) {
    particles.push(new Particle(createVector(random(width), random(height)), 255));
  }
}

function draw() {
  background(255);
  noFill();

  particles.forEach(function(particle) {
    particle.update(mouseX, mouseY);
    particle.display();
  });

  if(mouseIsPressed) {
    particles.forEach(function(particle) {
      particle.attract();
    });
  }
}

function Particle(location, c) {
  this.location = location;
  this.color = c;
  this.color = color(255, (this.location.x / width) * 255, (this.location.y / height) * 255);
  this.velocity = createVector(0, 0);
  this.acceleration;

  this.setColor = function(r, g, b) {
    this.color = color(r, g, b);
  };

  this.setColor = function(r, g, b, a) {
    this.color = color(r, g, b, a);
  };

  this.attract = function() {
    this.velocity.add(mouseX - this.location.x, mouseY - this.location.y);
  };

  this.update = function(x, y) {
    if (dist(x, y, this.location.x, this.location.y) < BLAST_RADIUS) {
      this.velocity.add(createVector(this.location.x - x, this.location.y - y));
    }
    if (this.location.x == width || this.location.x < 0) {
      this.velocity.x = this.velocity.x * -1
    }
    if (this.location.y == height || this.location.y < 0) {
      this.velocity.y = this.velocity.y * -1
    }

    // Reveal Effect
    // if (this.velocity.mag() > 0) {
    //   this.color = 255 - this.velocity.mag() * 100;
    // }

    // With Alpha
    // if (this.velocity.mag() > 0) {
    //   this.setColor(255, (this.location.x / width) * 255, (this.location.y / height) * 255, this.velocity.mag() * 1000);
    // }

    if (this.velocity.mag() > 0) {
      this.setColor(255, (this.location.x / width) * 255, (this.location.y / height) * 255);
    }

    this.velocity.mult(DRAG);
    this.velocity.limit(TOP_SPEED);
    this.location.add(this.velocity);
  };

  this.display = function() {
    stroke(this.color);
    fill(this.color);
    // ellipse(this.location.x, this.location.y, BUBBLE_SIZE, BUBBLE_SIZE);
    point(this.location.x, this.location.y);
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
