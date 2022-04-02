var bricks,points;
var paddle,ball;
var edgeT,edgeR, edgeB,edgeL;

function setup() {
  createCanvas(450, 400);
  bricks = new Group();
  points = 0;

  //paddle sprite
  paddle = createSprite(280, 380, 100, 5);
  paddle.shapeColor = "black";

  //ball sprite
  ball = createSprite(150, 250, 10, 10);
  ball.shapeColor = "white";

  //Top edge
  edgeT = createSprite(225, 0, 450, 5);
  edgeT.shapeColor = "gray";

  //Bottom edge
  edgeB = createSprite(225, 400, 450, 5);
  edgeB.shapeColor = "gray";

  //Left edge
  edgeL = createSprite(0, 200, 5, 400);
  edgeL.shapeColor = "gray";

  //Right edge
  edgeR = createSprite(450, 200, 5, 400);
  edgeR.shapeColor = "gray";

  //draw bricks
  function createBrickRow(y,brickColor) {
    for (var x = 55; x < 400; x = x + 55) {
      var brick = createSprite(x, y, 50, 20);
      brick.shapeColor = brickColor;
      bricks.add(brick);
    }
  }

  //Row 1 : y : 75
  createBrickRow(75,"purple");
  //Row 2 : y : 100
  createBrickRow(100,"green");
  //Row 3 : y : 125
  createBrickRow(125,"yellow");
}
function draw() {
  background("darkblue");

  text("Score : ", 360, 30);
  text(points, 400, 30);
  
  paddle.x = mouseX;

  if (mouseIsPressed) {
    ball.velocityX = 4; 
    ball.velocityY = 4; 
  }

  ball.bounceOff(edgeL);
  ball.bounceOff(edgeR);
  ball.bounceOff(edgeT);
  ball.bounceOff(edgeB,endgame)
  ball.bounceOff(paddle);

  ball.bounceOff(bricks, brickHit);
  
  drawSprites();
}

function brickHit(ball,brick) {
  brick.remove();
  points=points+5;
}

function endgame(){
  ball.velocityX=0;
  ball.velocityY=0;
  text("GameOver",225,200);
  paddle.remove();
  }