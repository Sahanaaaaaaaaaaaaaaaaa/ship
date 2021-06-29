var ship, shipImg;
var sea, seaImg;

function preload() {
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png"); 
  seaImg = loadImage("sea.png");

}



function setup(){
  createCanvas(600,600);
  
  sea = createSprite(200,100,100,100);
  sea.addImage(seaImg);
  ship = createSprite(200,200); 
  ship.addAnimation(shipImg);
}

function draw() {
  background("blue");
  
  
  drawSprites();
  
}


shipX = worldMouseX;