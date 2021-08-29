var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var apple_img;
var left_edge;
var right_edge;
var leaf;
var leaf_img;
var orangeleaf;
var orangeleaf_img;
var redleaf;
var redleaf_img;
var grass;
var grass_img;
var music;
var start;
var start_img;
var gameState = "start";
var go;
var go_img;
var beep;


function preload(){
  gardenImg = loadAnimation("garden.png");
  rabbitImg = loadAnimation("rabbit.png");
  apple_img = loadAnimation("apple.png");
  leaf_img = loadAnimation("leaf.png");
  orangeleaf_img = loadAnimation("l4.png");
  redleaf_img = loadAnimation("redImage.png");
  grass_img = loadAnimation("grass.png");
  music = loadSound("music.mp3");
  start_img = loadAnimation("start.png");
  go_img = loadAnimation("GO!.png");
  beep = loadSound("beep (mp3cut.net).mp3");

}

function setup(){
  
  createCanvas(1530,750);

  music.loop();
  

// Moving background
  garden=createSprite(765,375);
  garden.addAnimation("gardenImg", gardenImg);
  garden.scale = 1.7;

//creating boy running
  rabbit = createSprite(782,587,30,30);
  rabbit.scale =0.09;
  rabbit.addAnimation("rabbitImg", rabbitImg);

  apple = createSprite(random(500, 1000), -35);
  apple.addAnimation("apple_img", apple_img);
  apple.scale = 0.1;
  apple.velocityY = 0;

  left_edge = createSprite(480, 370, 10, 750);
  left_edge.visible = false;

  right_edge = createSprite(1200, 370, 10, 750);
  right_edge.visible = false;

  leaf = createSprite(random(500, 1000), -35);
  leaf.addAnimation("leaf_img", leaf_img);
  leaf.scale = 0.1;
  leaf.velocityY = 0;
  leaf.depth = rabbit.depth-1;

  orangeleaf = createSprite(random(500, 1000), -35);
  orangeleaf.addAnimation("orangeleaf_img", orangeleaf_img);
  orangeleaf.scale = 0.3;
  orangeleaf.velocityY = 0;
  orangeleaf.depth = rabbit.depth-1;

  
  redleaf = createSprite(random(500, 1000), -35);
  redleaf.addAnimation("redleaf_img", redleaf_img);
  redleaf.scale = 0.1;
  redleaf.velocityY = 0;
  redleaf.depth = rabbit.depth-1;

  grass = createSprite(random(500, 1000), 587);
  grass.addAnimation("grass_img", grass_img);
  grass.scale = 0.1;
  grass.depth = rabbit.depth-1;

  start = createSprite(765, 375);
  start.addAnimation("start_img", start_img);
  start.visible = false;
  start.scale = 1.1;

  go = createSprite(765, 375);
  go.addAnimation("go_img", go_img);
  go.visible = false;
  go.scale = 1.5;


}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(left_edge);
  rabbit.collide(right_edge);

  if(keyDown("right"))
  {
    rabbit.x = rabbit.x + 5;
  }

  if(keyDown("left"))
  {
    rabbit.x = rabbit.x - 5;
  }



  if(leaf.y >= 587)
  {
    leaf.velocityY = 5;
    leaf.y = -35;
  }

  if(orangeleaf.y >= 587)
  {
    orangeleaf.y = -35;
  }

  if(redleaf.y >= 587)
  {
    redleaf.y = -35;

  }

  if(rabbit.isTouching(leaf)||rabbit.isTouching(orangeleaf)||rabbit.isTouching(redleaf))
  {

    rabbit.destroy();
    gameState = "Over";
  }

  if(gameState == "Over")
  {
    go.visible = true;
  }


  if(rabbit.isTouching(apple))
  {
    apple.x = random(500, 1000);
    apple.y = -35;
    apple.velocityY = 20;
    grass.x = random(500, 1000);
    beep.play();
  }

  if(gameState == "start")
  {
    start.visible = true;
  }


  if(keyDown("up"))
  {
    gameState = "playing";
  }

  if(gameState == "playing")
  {
    start.visible = false;
    leaf.velocityY = 5;
    orangeleaf.velocityY = 8;
    redleaf.velocityY = 10;
    apple.velocityY = 20;
  }
  if(apple.y >= 587 )
  {
    apple.velocityY = 0;
  }

  

  drawSprites();
}
