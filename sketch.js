
var ball;

function setup() {
  createCanvas(1000,500);
 

  createSprite(700, 300, 200, 150);
  createSprite(500, 350, 300, 50);

  ball = new Ball(600,200,20,20);


  button = createButton("click to blow");
  button.position(700,400);
  button.class("blow button")
  button.mouseClicked(blow)
  

}

function draw() {
  background("skyblue");
 

  ball.show();
  
  
  drawSprites();
 
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}

