class rope{
    constructor(bodyA,pointB){
    var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:10
    }
    this.rope1=Constraint.create(options)
    World.add(world,this.rope1)
    }
    }