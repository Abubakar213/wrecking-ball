
class Rope{
	constructor(body,anchor)
	{
		
		var options1={ bodyA:body,			 
			pointB:anchor, 
			stiffness:1,
			length:200
			
		};
		
		this.bodyA=body
		this.pointB=anchor
		this.rope=Constraint.create(options1);
		World.add(world,this.rope);
	}

	attach(body){
		this.rope.bodyA=body;
	}

	fly()
	{
		this.rope.bodyA=null;
	}

	display()
	{
        
		if(this.rope.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB
            push();
			strokeWeight(2);		
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
		}
	}
}


















