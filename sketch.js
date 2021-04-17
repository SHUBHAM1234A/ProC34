const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,                                             box2,box3,box4,box5,box6,box7,box8;
var box1a,                                                           box2a,box3a,box4a,box5a,box6a,box7a,box8a,box9a;
var box1b,                                                                         box2b,box3b,box4b,box5b,box6b,box7b,box8b;
var                                                                                             monster
var q

var ball,rope,ground;


function setup(){
    createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;



    ground = new Ground(600,690,1200,20);

    ball = new Ball(400,400,227.5,81.625);

    monster = new Monster(1000,500,170,170);

    box1 = new Box(700,645,70,70);
    box2 = new Box(700,645-70,70,70);
    box3 = new Box(700,645-140,70,70);
    box4 = new Box(700,645-210,70,70);
    box5 = new Box(700,645-280,70,70);
    box6 = new Box(700,645-350,70,70);
    box7 = new Box(700,645-420,70,70);
    box8 = new Box(700,645-490,70,70);

    box1a = new Box(770,645,70,70);
    box2a = new Box(770,645-70,70,70);
    box3a = new Box(770,645-140,70,70);
    box4a = new Box(770,645-210,70,70);
    box5a = new Box(770,645-280,70,70);
    box6a = new Box(770,645-350,70,70);
    box7a = new Box(770,645-420,70,70);
    box8a = new Box(770,645-490,70,70);
    box9a = new Box(770,645-560,70,70);

    box1b = new Box(770+70,645,70,70);
    box2b = new Box(770+70,645-70,70,70);
    box3b = new Box(770+70,645-140,70,70);
    box4b = new Box(770+70,645-210,70,70);
    box5b = new Box(770+70,645-280,70,70);
    box6b = new Box(770+70,645-350,70,70);
    box7b = new Box(770+70,645-420,70,70);
    box8b = new Box(770+70,645-490,70,70);
    q = new Box(1000,645,70,70);
    rope = new Rope(ball.body,{x:400,y:-100});
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    ball.display();
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box1a.display();
    box2a.display();
    box3a.display();
    box4a.display();
    box5a.display();
    box6a.display();
    box7a.display();
    box8a.display();
    box9a.display();
   
    box1b.display();
    box2b.display();
    box3b.display();
    box4b.display();
    box5b.display();
    box6b.display();
    box7b.display();
    box8b.display();
    monster.display();
    
    rope.display();
}

function mouseDragged(){

    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}