const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground , base1, base2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var polygon, launcher ;

function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,380,1200,20)
    base1 = new Ground(580,330,250,15)
    base2 = new Ground(950,220,200,15)

    box1 = new Box(490,300,30,40)
    box2 = new Box(520,300,30,40)
    box3 = new Box(550,300,30,40)
    box4 = new Box(580,300,30,40)
    box5 = new Box(610,300,30,40)
    box6 = new Box(640,300,30,40)
    box7 = new Box(670,300,30,40)

    box8 = new Box(520,260,30,40)
    box9 = new Box(550,260,30,40)
    box10 = new Box(580,260,30,40)
    box11 = new Box(610,260,30,40)
    box12 = new Box(640,260,30,40)

    box13 = new Box(550,220,30,40)
    box14 = new Box(580,220,30,40)
    box15 = new Box(610,220,30,40)

    box16 = new Box(580,180,30,40)

    box17 = new Box(885,180,30,40)
    box18 = new Box(915,180,30,40)
    box19 = new Box(945,180,30,40)
    box20 = new Box(975,180,30,40)
    box21 = new Box(1005,180,30,40)

    box22 = new Box(915,140,30,40)
    box23 = new Box(945,140,30,40)
    box24 = new Box(975,140,30,40)

    box25 = new Box(945,100,30,40)

    polygon = new Polygon(150,200,40,40)

    launcher = new Launcher(polygon.body,{ x:150 , y:200 }) ;
    
}

function draw(){
    background("#362A2A");
    Engine.update(engine);
    strokeWeight(2)

    ground.display();
    base1.display();
    base2.display();

    polygon.display();

    fill("blue")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    fill("pink")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill("cyan")
    box13.display();
    box14.display();
    box15.display();

    fill("grey")
    box16.display();

    fill("cyan")
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    fill("lightgreen")
    box22.display();
    box23.display();
    box24.display();

    fill("pink")
    box25.display();

    launcher.display();   
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX , y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if (keyCode === 32){
      Matter.Body.setPosition(polygon.body,{x:150, y:200})
      launcher.attach(polygon.body)
    }
  }