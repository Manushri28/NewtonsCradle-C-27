
class Roof {
    constructor(x, y, width, height) {
      var optn = {
          isStatic : true,
          restitution : 0
      }
      this.body = Bodies.rectangle(x, y, width, height, optn);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }
    display(){
      
      fill("grey");
      var pos = this.body.position;
      translate(pos.x, pos.y);
      rectMode(CENTER);   
      rect( 0, 0, this.width, this.height);
    }
  }
  