const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload(){

}

function setup() {
  engine= Engine.create();
  world= engine.world;
 
  createCanvas(600,600);
  block1=new Block(300,550,400,10);
  block2=new Block(105,300,10,500);
  block3=new Block(495,300,10,500);
  block4=new Block(180,400,10,300);
  block5=new Block(260,400,10,300);
  block6=new Block(340,400,10,300);
  block7=new Block(420,400,10,300);

  object1=new Object(100,200,10);
  Engine.run(engine);
}

function draw() {
  background("black");  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  object1.display();
}