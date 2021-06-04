var road,roadImg;
var car,carImg,carImg2,carImg3,carImg4,ecar;
var boom,boomImg;
var gameOver,gameOverImg;
var ecarGroup;
var gameState="play";


function preload(){
  roadImg=loadImage("road.png");
  
  carImg=loadImage("car.png");
  carImg1=loadImage("car1.png");
  carImg2=loadImage("car2.png");
  carImg3=loadImage("car3.png");
  carImg4=loadImage("car4.png");
  
  boomImg=loadImage("boom.png")
  gameOverImg=loadImage("gameover.png");
}

function setup() {
  createCanvas(600,600);
  road=createSprite(300,300,10,10);
  road.addImage(roadImg);
  road.scale=4.5;
  road.velocityY=6;
  
  car=createSprite(300,300,1,1);
  car.addImage(carImg);
  car.rotation=270;
  car.scale=0.4
  car.setCollider("rectangle",0,0,250,100)
  
  boom=createSprite(300,300,1,1);
  boom.addImage(boomImg);
  
  gameOver=createSprite(300,300,1,1);
  gameOver.addImage(gameOverImg);
  
  ecarGroup=new Group();
}

function draw() {
  background("black");
  if (gameState==="play") {
  if (road.y>500) {
    road.y=300;
  }
  boom.x=car.x;
  boom.y=car.y;
  car.velocityY=0;
  if (keyDown("up") ){
    car.velocityY=-5;  
  }
  if (keyDown("left") ){
    car.x-=3;  
  }
  if (keyDown("right") ){
    car.x+=3;  
  }
  if (keyDown("down") ){
    car.velocityY=5;  
  }
    
  if (ecarGroup.isTouching(car)){
      gameState="end";
  }
    boom.visible=false;
    gameOver.visible=false;
  cars();
 }
  if (gameState==="end"){
    ecarGroup.setLifetimeEach(-1);
    
    road.velocityY=0;
    ecarGroup.setVelocityYEach(0);
    car.velocityY=0;
    car.velocityX=0;
    boom.visible=true;
    gameOver.visible=true;
  }
  //car.debug=true
  //ecar.debug=true;
  drawSprites();
}

function cars() {
   ecar=createSprite(Math.round(random(10,550)),0,1,1);
  if (frameCount % 200===0) {
    var rand=Math.round(random(1,4));
    switch(rand){
      case 1:ecar.addImage(carImg1);
             ecar.rotation=270;
             ecar.setCollider("rectangle",0,0,270,100)
             break;
      case 2:ecar.addImage(carImg2);
             ecar.rotation=90;
             ecar.setCollider("rectangle",0,0,250,100)
             break;
      case 3:ecar.addImage(carImg3);
             ecar.rotation=90;
             ecar.setCollider("rectangle",0,0,250,100)
             break;
      case 4:ecar.addImage(carImg4);
             ecar.rotation=90;
             ecar.setCollider("rectangle",0,0,250,100)
             break;
    }
    
    ecar.scale=0.7;
    ecar.velocityY=6;
    ecar.lifetime=100;
    ecarGroup.add(ecar);
  }
  
}