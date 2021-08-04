var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0;
var arrowGroup;
var ballonGroup ;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  //create groups
  arrowGroup = Group();
 ballonGroup = Group();
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyWentDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    score =score +1;
    //use of switch statement instead of if loop
    switch(select_balloon){
      case 1 : 
      redBalloon();
      break;
      case 2 : 
      blueBalloon();
      break;
      case 3 : 
      greenBalloon();
      break;
      case 4 : 
      pinkBalloon();
      break;
      default : 
      break;
    }
  }
  //if the arrow is touching the ballon remove ballon
  if(arrowGroup.isTouching(ballonGroup)){
//why is this code not working when I try it?
  ballonGroup.visible =false;
  }
  console.log(arrowGroup.isTouching(ballonGroup));
  drawSprites();
  textSize(20)
  text("score: "+ score,200,20)
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  red.debug;
  ballonGroup.add(red);
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(blue_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  ballonGroup.add(red);
}

function greenBalloon() {
  //write code for spwaning green balloons
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(green_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  ballonGroup.add(red);
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(pink_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 1;
  ballonGroup.add(red);
}
