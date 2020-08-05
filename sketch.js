const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, div;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {

  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(239, 784.4, 469.5, 20);
  particle = new Particle(200, 200);

  /*for(var k = 0; k <= 480; k += 80) {
            
    var divisionHeight = 300;
    divisions.push(new Division(k, 800 - divisionHeight/2, 10, divisionHeight));
  }*/

  for(var j = 40; j <= 480; j += 50) {
    plinkos.push(new Plinko(j, 75));
  }

}

function draw() {

  background(0, 0, 0);  

  Engine.update(engine);

  bgStroke();

  ground.display();
  particle.display();
  plinko.display();
}

function bgStroke() {

  strokeWeight(4);
  stroke("red");
  fill(0, 0, 0);
  var bgStroke = rect(0.5, 0, 477.5, 799);
}


