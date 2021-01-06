class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
   this.arra=[]
   this.image2 = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x>270 && this.body.velocity.x>5){
      var position=[this.body.position.x,this.body.position.y];
       
      this.arra.push(position);
    }
   for (var i = 0 ; i<this.arra.length ; i++){
 image(this.image2,this.arra[i][0],this.arra[i][1])


   }
  }
}
