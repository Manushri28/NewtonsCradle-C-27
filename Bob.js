class Bob {
    constructor(x, y, r) {
  
      this.body = Bodies.circle(x, y, r, {isStatic : false});
      this.r = r;
  
      World.add(world, this.body);
    }
    display(){
      
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("aqua");
      strokeWeight(2);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  }