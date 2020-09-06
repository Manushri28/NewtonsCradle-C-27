const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var roofObj;
var string1, string2, string3, string4, string5;

function setup(){
    var canvas = createCanvas(800,630);
    engine = Engine.create();
    world = engine.world;
    
    bob1 = new Bob(265, 500, 20);
    bob2 = new Bob(304, 500, 20);
    bob3 = new Bob(350, 500, 20);
    bob4 = new Bob(385, 500, 20);
    bob5 = new Bob(427, 500, 20);
        
    roofObj = new Roof(350, 200, 350, 20)

    string1 = new Chain(bob1.body, roofObj.body, -20*4, 0);
    string2 = new Chain(bob2.body, roofObj.body, -20*2, 0);
    string3 = new Chain(bob3.body, roofObj.body, 0, 0);
    string4 = new Chain(bob4.body, roofObj.body,  20*2, 0);
    string5 = new Chain(bob5.body, roofObj.body,  20*4, 0);
}

function draw(){
    background(250,128,114);

    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    string1.display();
    string2.display();
    string3.display();
    string4.display();
    string5.display();
    
    roofObj.display();

}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(bob1.body, bob1.body.position, {x:10, y:-65});
    }
}