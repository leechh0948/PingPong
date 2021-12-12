let ball;
let ping;
let pong;
let bg;
let IsBouncing;

function preload() {
  ping = loadImage('ping.png');
  pong = loadImage('pong.png');
}

function setup(){
  createCanvas(600, 600);
  ball = new Ball();
  bg = 15;
}

function draw(){

  background(bg);

  console.log(IsBouncing);

  let gravity = createVector(0, 0.1);
  ball.applyForce(gravity);


  ball.update();
  ball.display(255);
  IsBouncing = ball.edges();

  if (IsBouncing == true && bg == 255){
    bg = 15;
    image(ping, 0, 0);
  }
  else if (IsBouncing == true && bg == 15){
    bg = 255;
     image(pong, 0, 0);
  }
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
      this.pos.y = 519; // = 520
      return true;
    }
    else return false;
  }

  display(c){
    fill(c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }

}
