class Polygon{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:0.6,
            density:1.5
        }
        this.body=Bodies.polygon(x,y,5,20,options)
        World.add(world,this.body);
    }

    display(){
        var body=this.body
        var pos=this.body.position
        push()
        stroke("#00A8A8");
        fill("#00A8A8")
        strokeWeight(3)
        line(body.vertices[0].x,body.vertices[0].y,body.vertices[1].x,body.vertices[1].y)
        line(body.vertices[1].x,body.vertices[1].y,body.vertices[2].x,body.vertices[2].y)
        line(body.vertices[2].x,body.vertices[2].y,body.vertices[3].x,body.vertices[3].y)
        line(body.vertices[3].x,body.vertices[3].y,body.vertices[4].x,body.vertices[4].y)
        line(body.vertices[4].x,body.vertices[4].y,body.vertices[0].x,body.vertices[0].y)
        pop()
    }
}