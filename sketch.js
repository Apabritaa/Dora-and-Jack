const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world;

var bgImg,winner;



var dora,jack;

var edges;
var wall1,wall2;

function preload(){
bgImg=loadImage("Images/bg.jpg")
}
function setup() {
  createCanvas(600,600);
  engine=Engine.create();
  world=engine.world;
  //createSprite(400, 200, 50, 50);
  dora=new Player(50,50,"girl");
  //dora.shapeColor="blue";
  jack=new Player(50,550,"boy");
  //jack.shapeColor="red";
  //edges=createEdgeSprites();

  

  wall1= new Wall(200,200,50,300);
  wall2= new Wall(300,400,300,50);
  wall3 = new Wall(300,200,30,100);
  wall4 = new Wall(150,300,100,30);
 block1= new Block(Math.round(random(50,400)),Math.round(random(50,400)));
 block2= new Block(Math.round(random(50,400)),Math.round(random(50,400)));
 block3= new Block(Math.round(random(50,400)),Math.round(random(50,400)));
 block4= new Block(Math.round(random(50,400)),Math.round(random(50,400)));
 treasure = new Treasure(Math.round(random(300,600)),Math.round(random(0,600)))
}

function draw() {
background(bgImg);  
  Engine.update(engine);
wall1.display();
wall2.display();
wall3.display();
wall4.display();
block1.display();
block2.display();
block3.display();
block4.display();
treasure.display();

dora.display();
jack.display();
 if(winner==="Dora"||winner==="Jack"){
   textSize(20);
   fill("white");
   text(winner+" has caught the treasure!",200,300);
 }
  
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
     Body.setPosition(dora.body,{x:dora.body.position.x, y:dora.body.position.y-6})

  }

  if(keyCode===DOWN_ARROW){
    Body.setPosition(dora.body,{x:dora.body.position.x, y:dora.body.position.y+6})

 }

 if(keyCode===LEFT_ARROW){
  Body.setPosition(dora.body,{x:dora.body.position.x-6, y:dora.body.position.y})

}
if(keyCode===RIGHT_ARROW){
  Body.setPosition(dora.body,{x:dora.body.position.x+6, y:dora.body.position.y})

}

if(keyCode===119||keyCode===87){
  Body.setPosition(jack.body,{x:jack.body.position.x, y:jack.body.position.y-6})

}

if(keyCode===83||keyCode===115){
 Body.setPosition(jack.body,{x:jack.body.position.x, y:jack.body.position.y+6})

}

if(keyCode===65||keyCode===97){
Body.setPosition(jack.body,{x:jack.body.position.x-6, y:jack.body.position.y})

}
if(keyCode===68||keyCode===100){
Body.setPosition(jack.body,{x:jack.body.position.x+6, y:jack.body.position.y})

}
detectCollision(dora,wall1);
detectCollision(dora,wall2);
detectCollision(dora,wall3);
detectCollision(dora,wall4);
detectCollision(jack,wall1);
detectCollision(jack,wall2);
detectCollision(jack,wall3);
detectCollision(jack,wall4);

detectCollision(dora,block1);
detectCollision(dora,block2);
detectCollision(dora,block3);
detectCollision(dora,block4);
detectCollision(jack,block1);
detectCollision(jack,block2);
detectCollision(jack,block3);
detectCollision(jack,block4);

detectCollision(jack,treasure);

detectCollision(dora,treasure);


}


function detectCollision(body1,body2){
var pos1=body1.body.position;
var pos2=body2.body.position;
//var distance=dist(pos1.x,pos1.y,pos2.x,pos2.y);
//console.log(distance);
console.log(Math.abs(pos1.x-pos2.x))

if(Math.abs(pos1.x-pos2.x)<body1.width/2+body2.width/2 &&Math.abs(pos1.y-pos2.y)<body1.height/2+body2.height/2){
  if(body1.isGirl()){
    Matter.Body.setPosition(body1.body, {x:50,y:50})
  }
    else{
      Matter.Body.setPosition(body1.body, {x:50,y:550})
    }
if(body2 instanceof Treasure){
  if(body1.isGirl()){
winner="Dora";
    //
    console.log("dora has caught the treasure");
  }
  else
  {
    
    background("black");
    winner="Jack";
   //
    //textSize(20)
    console.log("jack has caught the treasure");
  }
}
  

}

}











