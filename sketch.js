let ball;

function setup(){
  createCanvas(600, 600);
  ball = new Ball();
}

function draw(){
  background(51);
  
  let gravity = createVector(0, 0.1);
  ball.applyForce(gravity);
  
  
  ball.update();
  ball.display();
  ball.edges();
}

class Ball{
  constructor(){
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 80;
  }
  
  applyForce(force){
    this.acc = force;
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  
  edges(){
    if (this.pos.y > height - this.r){
      this.vel.y *= -1;
      this.pos.y = height - this.r;
    }
  }

  display(){
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }
  
}
