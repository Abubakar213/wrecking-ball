const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var ball1;


function setup(){
createCanvas(1000,1000)
engine=Engine.create();
world=engine.world;
box1=new Box(600,600,30,30);
box2=new Box(600,630,30,30);
box3=new Box(600,660,30,30);
box4=new Box(600,690,30,30);
box5=new Box(600,720,30,30);
box6=new Box(600,750,30,30);
box7=new Box(600,780,30,30);
box8=new Box(600,810,30,30);
box9=new Box(600,840,30,30);

box10=new Box(640,840,30,30);
box11=new Box(640,810,30,30);
box12=new Box(640,780,30,30);
box13=new Box(640,750,30,30);
box14=new Box(640,720,30,30);
box15=new Box(640,690,30,30);


box16=new Box(680,840,30,30);
box17=new Box(680,810,30,30);
box18=new Box(680,780,30,30);
box19=new Box(680,750,30,30);
box20=new Box(680,720,30,30);
box21=new Box(680,690,30,30);

ball1=new Ball(300,600,30,30);
ground1=new Ground(300,860,900,10)
rope=new Rope(ball1.body,{x:300,y:50});
}

function draw(){
background("blue");
Engine.update(engine);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();

box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();

box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();

ball1.display();
ground1.display();
rope.display();
}

function mouseDragged(){
Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
    }


    function mouseReleased(){
        rope.fly();
        gameState = "launched";
    }
    
    function keyPressed(){
        if(keyCode === 32){
           rope.attach(ball1.body);
        }
    }
