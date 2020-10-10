class roof {
    constructor(){
    var options={
    isStatic:true,
    friction:0.4,
    density:1
    }
    this.body=Bodies.rectangle(400,70,600,40,options)
    World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,600,40) 
}
}