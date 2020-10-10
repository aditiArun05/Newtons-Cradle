
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var roof1,bob1,bob2,bob3,bob4,bob5,rope1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
canvas.background=(255,255);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof1=new roof(400,70,600,40)
bob1=new bob(200,400)
bob2=new bob(300,400)
bob3=new bob(400,400)
bob4=new bob(500,400)
bob5=new bob(600,400)

var options = {
  bodyA: bob1,
  bodyB: roof1,
  stiffness:0.04,
  length: 10
}

//var rope1 = Constraint.create(options);
//world.add(world, rope1);
//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  drawSprites();

  strokeWeight(3)
  line(bob1.body.position.x,bob1.body.position.y,roof1.body.position.x,roof1.body.position.y)
 
}



