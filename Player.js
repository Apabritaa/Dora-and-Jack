class Player{
    constructor(x,y,gender){
    var options={
        restitution:0.8,
        friction:0.3,
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,20,20,options)
    this.gender=gender;
this.width=40;
this.height=40;


    World.add(world,this.body);
    if (gender==="girl") {
        this.image=loadImage("Images/girl.png")
    } else {
        this.image=loadImage("Images/boy.png")
    }
    }

    display(){
        var pos=this.body.position;
        push();
        
        imageMode(CENTER);
        if (this.gender==="girl") {
            image(this.image,pos.x,pos.y,50,75);
        } else {
            image(this.image,pos.x,pos.y,75,75);
        }

        pop();
    }
isGirl(){
    if(this.gender==="girl")
    return true;
    else 
    return false;
}

}