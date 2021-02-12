class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:30
        }
        this.body=Constraint.create(options)
        this.pointB=pointB
        World.add(world,this.body);
    }

    fly(){
        this.body.bodyA=null
    }
    reattach(body1){
        this.body.bodyA=body1
    }
    display(){
        if(this.body.bodyA){
            var pos=this.body.bodyA.position
            push()
            line(pos.x,pos.y,this.pointB.x,this.pointB.y)
            pop()
        }
    }
}