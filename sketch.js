const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ground,poly;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var state="onSling"

function setup(){
    createCanvas(800,500);

    engine=Engine.create()
    world=engine.world

    ground=new Ground(500,350,300,20)

    box1=new Box(380,200,30,30)
    box2=new Box(420,200,30,30)
    box3=new Box(460,200,30,30)
    box4=new Box(500,200,30,30)
    box5=new Box(540,200,30,30)
    box6=new Box(580,200,30,30)
    box7=new Box(620,200,30,30)

    box8=new Box(400,170,30,30)
    box9=new Box(440,170,30,30)
    box10=new Box(480,170,30,30)
    box11=new Box(520,170,30,30)
    box12=new Box(560,170,30,30)
    box13=new Box(600,170,30,30)

   

    poly=new Polygon(200,200)
    rope=new Slingshot(poly.body,{x:200,y:200})
}

function draw(){
    background("#C4DBE0");
    Engine.update(engine)
    fill("#0C6980")
    textSize(20)
    text("Press space for another chance",300,50)
    ground.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    



    rope.display()
    poly.display()

}

function mouseDragged(){
    if(state==="onSling")
        Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    rope.fly();
    state="offSling"
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(poly.body,{x:100,y:100})
        rope.reattach(poly.body)
        state="onSling"
    }
}