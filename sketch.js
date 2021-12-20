let ball;
let tt = 'PING';
let untitledsans;
let textfill = 255;
let bg = 15;
let IsBouncing;
let bc = 255;
let pingsound;
let pongsound;
let bouncesound;
let slider;

function preload() {
  untitledsans = loadFont("TestUntitledSans-Black.otf")
  soundFormats('mp3');
  pingsound = loadSound('ping.mp3');
  pongsound = loadSound('pong.mp3');
  bouncesound = loadSound('bounce.mp3');
}

function setup(){
  createCanvas(600, 600);

  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '500px');
  
  textFont(untitledsans);
  textSize(150);
  textAlign(CENTER);
  ball = new Ball();
}

function draw(){

  background(bg);

  let gravity = createVector(0, 0.1);
  ball.applyForce(gravity);


  ball.update();
  ball.display(bc);
  IsBouncing = ball.edges();

  bouncesound.setVolume(0.3);

  fill(textfill);
  text(tt, width/2, 200);


  if (IsBouncing == true && bg == 255){
    bg = 15;
    tt = 'PONG';
    textfill = 255;
    bc = 255;
    pongsound.play();
    bouncesound.play();
  }
  else if (IsBouncing == true && bg == 15){
    bg = 255;
    tt = 'PING';
    textfill = 15;
    bc = 15;
    pingsound.play();
    bouncesound.play();
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
