
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	;
var world,Paper;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	Paper = new paper(300,100,20);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  dustbinObj.display();
  Paper.display();
  Paper.scale = 4;

}

function KeyPressed(){
	if(keyCode === UP_ARROW){

		Mattter.Body.applyForce(Paper.body, Paper.body.position,{x:130,y:145})
	}
}

