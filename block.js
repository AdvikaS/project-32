class Block  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.visibility = 255;

    }
    display()  {
        //rectMode(CENTER)
        //fill(171,247,247)
        //rect(this.body.position.x,this.body.position.y,this.width,this.height)

        //push();

        //if((this.body.speed)<3)
        //{
 //           super.display();
   //     }
     //   else
       // {
         //  World.remove(world,this.body);
        //}

        //pop();
        if(this.body.speed<6){
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width, this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility -5
            tint(255,this.visibility);
            rect(999,999,this.width,this.height);
            pop();
        }
     































        

    }
}