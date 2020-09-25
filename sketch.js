const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14;
var ground,platform,polygon;
var Score = 0



var  slingShot,polygon;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 650, 10);
    polygon = Bodies.circle(50,200,20);
    World.add(world, polygon);

    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
   block4 = new Block(420,235,30,40);
     block5 = new Block(450,235,30,40);
       block6 = new Block(360,195,30,40);
       block7 = new Block(390,195,30,40);
       block8 = new Block(420,195,30,40);
       block9 = new Block(390,155,30,40);
       block10 = new Block(300,235,30,40);
       block11 = new Block(270,235,30,40);
       block12 = new Block(240,235,30,40);
       block13 = new Block(210,235,30,40);
       block14 = new Block(180,235,30,40);
    slingshot = new SlingShot(polygon,{x:100, y:200});
}

function draw(){
    background("red")
    Engine.update(engine);
    //strokeWeight(4);
    text("Score :"+Score,750,40);
    textSize(32)
    ground.display();
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    platform.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    slingshot.display();   
    ellipseMode(RADIUS)
    ellipse(polygon.position.x,polygon.position.y,20,20) 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attached(polygon)
    }
}