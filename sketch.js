
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;  
const constraint = Matter.constraint; 

var bob1,bob2,bob3,bob4,bob5,chain,chain2,chain3,chain4,chain5,base;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(350,400,50);	 
	bob2=new Bob(400,400,50);	 
	bob3=new Bob(450,400,50);	 
	bob4=new Bob(500,400,50);	 
	bob5=new Bob(550,400,50);	  

	rope1=new Rope(bob1.body,roof.body,-100,0); 
	world.add(world,rope1); 
	rope2=new Rope(bob2.body,roof.body,-50,0); 
	world.add(world,rope2); 
	rope3=new Rope(bob3.body,roof.body,0,0); 
	world.add(world,rope3); 
	rope4=new Rope(bob4.body,roof.body,+100,0); 
	world.add(world,rope4);
	rope5=new Rope(bob5.body,roof.body,+50,0); 
	world.add(world,rope5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow"); 
  Engine.update(engine);  

  roof.display();  

  bob1.display();
  bob2.display(); 
  bob3.display();
  bob4.display();
  bob5.display(); 

  rope1.display(); 
  rope2.display(); 
  rope3.display(); 
  rope4.display(); 
  rope5.display();
  
  
  
  drawSprites();
 
}
 
function keyPressed() {
	if(keyCode===32){
		matter.body.applyForce(bob1.body,bob1.body.position,{x:-730,y:0});
	}
}
	



