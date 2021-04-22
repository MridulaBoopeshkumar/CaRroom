class Black extends BaseClass{
    constructor(x,y, radius){
        
        super(x,y,radius)
        this.point = 2;

    }

    display(){
        if(this.body.position.x<=100&&this.body.position.y<=100){
            console.log("BLACK1 scored")
            World.remove(world,this.body);
            score = score+this.point;

        }

       else if(this.body.position.x<=100&&this.body.position.y>=490){
            console.log("BLACK2 scored wrong ")
           Matter.Body.setPosition(this.body, {x: 302, y: 298});
            score= score-this.point;
            fill("black");
        super.display();
        }
        else if(this.body.position.x>=495&&this.body.position.y<=100){
            console.log("BLACK1 scored")
            World.remove(world,this.body);
            score= score+this.point;
        }
        else if(this.body.position.x>=495&&this.body.position.y>=490){
            console.log("BLACK2 scored wrong ")
            Matter.Body.setPosition(this.body, {x: 302, y: 298});
            score = score-this.point;
             fill("black");
         super.display();
        }
        else{ 
            fill("black");
        super.display();
    }
       
    }

}
