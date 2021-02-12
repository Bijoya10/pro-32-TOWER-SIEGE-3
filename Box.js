class Box{
    constructor(x,y,width,height){
        var options={
            friction:1,
            density:0.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.image=loadImage("box.png")
        World.add(world,this.body);
        this.visibility=255;
    }
    display(){

        if(this.body.speed<7){
            var pos=this.body.position
            push()
            translate(pos.x,pos.y)
            rotate(this.body.angle)
            fill('#2EB5E0')
            imageMode(CENTER)
            image(this.image,0,0,this.width,this.height)
            pop()
        }else{
            
            World.remove(world,this.body)
            push()
            this.visibility=this.visibility-5;
            tint(255,this.visibility)
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
            pop()
        }
    }
}