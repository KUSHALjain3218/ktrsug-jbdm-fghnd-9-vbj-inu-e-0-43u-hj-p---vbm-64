class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1=loadImage("sprites/sling1.png")
        this.image2=loadImage("sprites/sling2.png")
        this.image3=loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA=body;
    }
    display(){
        push();
        image(this.image2,175,95,50,80);
        image(this.image1,200,100,50,120);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
            stroke(0,0,0);
            strokeWeight(12);
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y+13);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y+13);
            image(this.image3,pointA.x-28,pointA.y-12,20,30);
         }
         else{stroke(0,0,0);
            strokeWeight(12);
            line(pointA.x+20, pointA.y+3, pointB.x+20, pointB.y+13);
            line(pointA.x+20, pointA.y+3, pointB.x-30, pointB.y+13);
            image(this.image3,pointA.x+20,pointA.y-15,20,30);
        }
        }
       pop(); 
    }
    
}