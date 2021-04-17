class Monster{
    constructor(x, y, width, height, angle) {
        var options = {
            'frictionAir':0.005,
            'density':0.02
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("images/Monster-02.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
       rotate(angle);
        
        image(this.image,0,0,this.width,this.height);
        pop();
      }
  }