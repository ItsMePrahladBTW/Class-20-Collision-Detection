
var fR,mR;

function setup() {
  createCanvas(1200,800);
  fR=createSprite(600, 400, 50, 80);
  fR.shapeColor="green";
  fR.debug="true";

  mR=createSprite(400,200,80,30);
  mR.shapeColor="green";
  mR.debug="true";
}

function draw() {
  background(0,0,0);  

  mR.x=World.mouseX;
  mR.y=World.mouseY

  if(mR.x-fR.x<mR.width/2+fR.width/2&&fR.x-mR.x<mR.width/2+fR.width/2&&mR.y-fR.y<mR.width/2+fR.width/2&&fR.y-mR.y<mR.width/2+fR.width/2){
    mR.shapeColor="red";
    fR.shapeColor="red";
  }
  else{
    mR.shapeColor="green";
    fR.shapeColor="green";
  }
    
  

  drawSprites();
}