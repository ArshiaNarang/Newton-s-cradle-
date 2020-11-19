class Bob {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:1,
          friction:0,
          density:0.8
      }
      this.bob = Bodies.circle(x,y,r,options)
      this.x=x
      this.y=y 
      this.r = r
      World.add(world,this.bob) 
    }
    display(){
      var angle = this.bob.angle;
      push();
      translate(this.bob.position.x, this.bob.position.y);
      rotate(angle);
      ellipseMode(RADIUS);
      ellipse(0, 0,this.r,this.r);
      pop();
    }
  };
