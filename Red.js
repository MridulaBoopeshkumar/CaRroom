class Red extends BaseClass{
  constructor(x,y, radius){
      
      super(x,y,radius)
      this.point = 10 ;

  }

  display(){
    if(this.body.position.x<=100&&this.body.position.y<=100){
       
        World.remove(world,this.body);
        
    }

   else if(this.body.position.x<=100&&this.body.position.y>=490){
        
       Matter.Body.setPosition(this.body, {x: 302, y: 298});
       
        fill("red");
    super.display();
    }
    else if(this.body.position.x>=495&&this.body.position.y<=100){
      
        World.remove(world,this.body);
    }
    else if(this.body.position.x>=495&&this.body.position.y>=490){
      
        Matter.Body.setPosition(this.body, {x: 302, y: 298});
        
         fill("red");
     super.display();
    }
    else{ 
        fill("red");
    super.display();
}
   
}

}

