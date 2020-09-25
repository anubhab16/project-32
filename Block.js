class Block {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':1.5,
            'friction':1,
            'density':3,
          
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body)
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        
      }
      display(){
        
     
     fill("yellow")
       
     if(this.body.speed < 10){
      push();
      translate(this.body.position.x,this.body.position.y)
      rotate(this.body.angle)
      
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height)
        pop();
     }
     else{
       World.remove(world, this.body);
       
       this.Visiblity = this.Visiblity - 5;
       
       
     }
     console.log(this.Visiblity)
   }
   score(){
    if (this.Visiblity < 0 && this.Visiblity >=-105){
      Score++;
     
    
    }
   }
  
      }
      
    
  
  
  
  
  

