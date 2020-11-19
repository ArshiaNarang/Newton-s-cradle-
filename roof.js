class Roof{
    constructor(x,y,w,h){
        var options = {
           isStatic:true  
        }
        this.x=x
        this.y=y
        this.w=w
        this.h=h 
        this.roof=Bodies.rectangle(x,y,w,h,options)
        World.add(world, this.roof);
    }
    
    display(){
        var angle = this.roof.angle;
      push();
      translate(this.roof.position.x, this.roof.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0,this.w,this.h);
      pop();
          
    }
}
           
            
           
        
 
