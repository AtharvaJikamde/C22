const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
let engine, world, ball, ground;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  let options = {
    isStatic: true
  };
  let ball_options = {
    restitution: 1.0
  };
  ground = Bodies.rectangle(400, 400, 800, 10, options);
  ball = Bodies.circle(400, 0, 50, ball_options);
  World.add(world, ground);
  World.add(world, ball);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 50);
}