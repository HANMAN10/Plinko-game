class Plinko {

    constructor(x, y) {
        
        var plinko_options = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, 10, plinko_options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        stroke("black");
        strokeWeight(2);
        fill("red");
        circle(pos.x, pos.y, 10);     
    }
}