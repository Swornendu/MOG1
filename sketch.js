var EliShane,Nacho_oh_nacho,Twist,Locke,Blacke;
var EliShaneImg,NachoImg,TwistImg,LockeImg,BlackeImg;
var bg,backgroundImg;

function preLoad() {
   backgroundImg = loadImage("BackGround.png");
}

function setup() {

  createCanvas(600, 600);
  bg = createSprite(0,600);
  bg.addImage("My Background",backgroundImg);
}

function draw() {
  background(220);
  drawSprites();
}