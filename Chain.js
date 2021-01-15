class chain{
    constructor(bodyA,pointB){
    var a={
        bodyA:bodyA,
        pointB:pointB,
        length:150,
        stiffness:1.8
    }
    this.pointB=pointB
    this.chain=Constraint.create(a)
    World.add(world,this.chain)
    }
    display(){
    if(this.chain.bodyA){
    var pa=this.chain.bodyA.position
    var pb=this.pointB
    line(pa.x,pa.y,pb.x,pb.y)
    }
    }
}