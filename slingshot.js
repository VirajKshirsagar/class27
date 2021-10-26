class SLING{
constructor(a,b,c){
    var option={
        bodyA:a,
        bodyB:b,
        length:c,
        stiffness:0.04
    }
this.ss=Matter.Constraint.create(option)

Matter.World.add(world,this.ss);
}

display(){

    strokeWeight(0)
    line(this.ss.bodyA.position.x,this.ss.bodyA.position.y,
    this.ss.bodyB.position.x,this.ss.bodyB.position.y)
}
}