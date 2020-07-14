class Box{
    constructor(x,y,color){
    var boxoptions = {
        restitution:0.4,
        friction:0.4,
        density:1.4
    }
    this.body = Bodies.rectangle(x,y,50,50,boxoptions);
    this.color = color;
    if (this.color==="pink"){
        this.image = loadImage("pink.png");
    }
    if (this.color==="red"){
        this.image = loadImage("red.png");
    }
    if (this.color==="purple"){
        this.image = loadImage("purple.png");
    }
    if (this.color==='blue'){
        this.image = loadImage("blue.png");
    }
    World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image( this.image,this.body.position.x,this.body.position.y, 50, 50);
        pop();
    }
}