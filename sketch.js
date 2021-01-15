
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	Bob1= new bob(300,300,24)
	Bob2= new bob(250,300,24)
  Bob3= new bob(350,300,24)
  Bob4= new bob(400,300,24)
  Bob5= new bob(450,300,24)
  Ground1=new ground(350,100,300,10)
  Chain1=new chain(Bob1.body,{x:300,y:100})
  Chain2=new chain(Bob2.body,{x:250,y:100})
  Chain3=new chain(Bob3.body,{x:350,y:100})
  Chain4=new chain(Bob4.body,{x:400,y:100})
  Chain5=new chain(Bob5.body,{x:450,y:100})
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  Ground1.display();
  Chain1.display();
  Chain2.display();
  Chain3.display();
  Chain4.display();
  Chain5.display();
  keyPressed();
}

function keyPressed() {
  if (keyCode === UP_ARROW){
  Matter.Body.applyForce(Bob2.body,Bob2.body.position,{x:-3,y:1});
  }
}

