class stones{
    constructor(x,y,r){
        var options = {
            "restitution":0,
            "isStatic":false,
            "friction":1,
            "density":1.2
        };
        this.r = r;
        this.x = x;
        this.y = y;
        this.image = loadImage("images/stone.png");
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world, this.body);
    };
    display(){
        var Pos=this.body.position;	
        
		push()
		translate(Pos.x, Pos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
    }
}