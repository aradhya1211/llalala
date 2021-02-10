class chains{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            lenght : 10
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        
        
    }
    fly(){
        this.chain.bodyA = null;
    }
    display(){
        if(this.chain.bodyA){
        var bodyA = this.chain.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(4);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        pop();
}
    }
}