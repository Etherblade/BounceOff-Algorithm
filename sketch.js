var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  
gameObject1 = createSprite(400, 300, 50, 80)
gameObject1.shapeColor = "red";
gameObject1.velocityX = 5;
gameObject1.debug = true
gameObject2 = createSprite(750, 300, 50, 80)
gameObject2.shapeColor = "purple";
gameObject2.velocityX = -5;
gameObject2.debug = true

}

function draw() {
  background(0,0,0);  

  bounceOff(gameObject1, gameObject2);
  
  drawSprites();
}







