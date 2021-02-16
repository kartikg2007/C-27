class SlingShot{
    constructor(bodyX, bodyY){
        var options = {
            bodyA: bodyX,
            bodyB: bodyY,
            length: 20,
            stiffness: 0.05
        }

        this.sling = Matter.Constraint.create(options)
        World.add(world, this.sling)
    }

    display(){

        var pointA = this.sling.bodyA.position
        var pointB = this.sling.bodyB.position

        stroke("red")
        strokeWeight(10)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        
    }
}