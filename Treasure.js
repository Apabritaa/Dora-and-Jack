class Treasure{
    constructor(x,y){
        var options={
            isStatic:true
            
        }
        this.body=Bodies.rectangle(x,y,80,80,options)
        this.width=30;
        this.height=30; 
        World.add(world,this.body);
        this.image=loadImage("Images/treasure.png")
        }
    
        display(){
            var pos=this.body.position;
            push();
           
            imageMode(CENTER);
            image(this.image,pos.x,pos.y,this.width,this.height);
            pop();
        }
}