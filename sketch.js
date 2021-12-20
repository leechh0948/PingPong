let ball;
let tt = 'GRAVITY';
let untitledsans;
let textfill = 255;
let bg = 15;
let IsBouncing;
let bc = 255;
let bouncesound;
let slider;
let grain;

function preload() {
  untitledsans = loadFont("TestUntitledSans-Black.otf")
  soundFormats('mp3');
  bouncesound = loadSound('bounce.mp3');

}

function setup(){
  createCanvas(1920, 700);

  grain = createVideo('grainblack.mp4')
  grain.loop();
  grain.volume(0);
  grain.hide();


  slider = createSlider(0.05, 0.5, 0.09, 0.01);
  slider.position(10, 10);
  slider.style('width', '570px');

  textFont(untitledsans);
  textSize(100);
  textAlign(CENTER);
  ball = new Ball();
}

function draw(){

  background(bg);

  image(grain, 0, 0);


  let gravity = createVector(0, slider.value());
  ball.applyForce(gravity);


  ball.update();
  ball.display(bc);
  IsBouncing = ball.edges();

  bouncesound.setVolume(0.3);

  fill(textfill);
  text(tt, width/2, 200);


  if (IsBouncing == true && bg == 255){
    bg = 15;
    tt = 'GRAVITY';
    textfill = 255;
    bc = 255;

    grain = createVideo('grainblack.mp4')
    grain.loop();
    grain.volume(0);
    grain.hide();

    bouncesound.play();
  }
  else if (IsBouncing == true && bg == 15){
    bg = 255;
    tt = 'TIME';
    textfill = 15;
    bc = 15;

    grain = createVideo('grainwhite.mp4')
    grain.loop();
    grain.volume(0);
    grain.hide();

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
      this.pos.y = height - this.r; // = 520
      return true;
    }
    else return false;
  }

  display(c){
    fill(c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }

}
