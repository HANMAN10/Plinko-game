class Particle {

    constructor(x, y) {
        
        var plinko_options = {
            isStatic: false
        }

        this.body = Bodies.circle(x, y, 10, plinko_options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        stroke(this.color);
        rectMode(CENTER);
        fill(this.color);
        circle(pos.x, pos.y, 10);     
    }
}