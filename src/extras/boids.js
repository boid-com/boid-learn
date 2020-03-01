var flock
var setup
var swarm = function(sketch) {


  sketch.setup = function(){
    sketch.frameRate(22)
   
     function populationscale() {
       document.getElementById('boids').clientHeight
       document.getElementById('boids').clientHeight
     }
   
     window.onresize = resize
     var height = window.innerHeight - 20
     var width = window.innerWidth - 20
     var boidMult = 1
   
     if (sketch.windowWidth < 1000) {
       boidMult = 0.2
     }
     console.log(window.innerWidth)
     console.log(boidMult)
   
     var canvas = sketch.createCanvas(window.innerWidth, sketch.windowHeight)
     canvas.parent('boids')
     flock = new Flock()
   
     function resize() {
       sketch.resizeCanvas(window.innerWidth, sketch.windowHeight)
     }
     // Add an initial set of boids into the system
     for (var i = 0; i < 2 * boidMult; i++) {
       flock.addBoid(new Boid(width / 2, height / 5, 5))
     }
     for (var i = 0; i < 2 * boidMult; i++) {
       flock.addBoid(new Boid(width / 2, height / 5, 2))
     }
   }
   
   function draw() {
     sketch.background(250)
     flock.run()
   }
   
   // Add a new boid into the System
   function mousePressed() {
     flock.addBoid(new Boid(mouseX, mouseY))
   }
   
   function Boid(x, y, sizeMult) {
     this.acceleration = sketch.createVector(0, 0)
     this.velocity = sketch.createVector(sketch.random(-1, 1), sketch.random(-1, 1))
     this.position = sketch.createVector(x, y)
     this.r = 2.0
     this.maxspeed = 4 // Maximum speed
     this.maxforce = 0.05 // Maximum steering force
   
     this.run = function(boids) {
       this.flock(boids)
       this.update()
       this.borders()
       this.render()
     }
   
     this.applyForce = function(force) {
       // We could add mass here if we want A = F / M
       this.acceleration.add(force)
     }
   
     // We accumulate a new acceleration each time based on three rules
     this.flock = function(boids) {
       var sep = this.separate(boids) // Separation
       var ali = this.align(boids) // Alignment
       var coh = this.cohesion(boids) // Cohesion
       // Arbitrarily weight these forces
       sep.mult(1.7)
       ali.mult(1.2)
       coh.mult(1.2)
       // Add the force vectors to acceleration
       this.applyForce(sep)
       this.applyForce(ali)
       this.applyForce(coh)
     }
   
     // Method to update location
     this.update = function() {
       // Update velocity
       this.velocity.add(this.acceleration)
       // Limit speed
       this.velocity.limit(this.maxspeed)
       this.position.add(this.velocity)
       // Reset accelertion to 0 each cycle
       this.acceleration.mult(0)
     }
   
     // A method that calculates and applies a steering force towards a target
     // STEER = DESIRED MINUS VELOCITY
     this.seek = function(target) {
       var desired = p5.Vector.sub(target, this.position) // A vector pointing from the location to the target
       // Normalize desired and scale to maximum speed
       desired.normalize()
       desired.mult(this.maxspeed)
       // Steering = Desired minus Velocity
       var steer = p5.Vector.sub(desired, this.velocity)
       steer.limit(this.maxforce) // Limit to maximum steering force
       return steer
     }
   
     this.render = function() {
       console.log('render function')
       sketch.frameRate(15)
       // Draw a triangle rotated in the direction of velocity
       var theta = this.velocity.heading() + radians(90)
       sketch.fill('#089cfc')
       stroke(10000)
       push()
       translate(this.position.x, this.position.y)
       rotate(theta)
       beginShape()
       // ellipse(0, 0, 10 * sizeMult, 10 * sizeMult)
       // ellipse(0, -25 * sizeMult / 5, 5 * sizeMult, 5 * sizeMult)
       // // line(0, 0, 0, -13)
       // triangle(30, 75, 58, 20, 86, 75)
       vertex(0, -this.r * 2)
       vertex(-this.r * 2, this.r * 10)
       vertex(this.r * 2, this.r * 10)
   
       endShape(CLOSE)
   
       pop()
     }
   
     // Wraparound
     this.borders = function() {
       if (this.position.x < -this.r) this.position.x = width + this.r
       if (this.position.y < -this.r) this.position.y = height + this.r
       if (this.position.x > width + this.r) this.position.x = -this.r
       if (this.position.y > height + this.r) this.position.y = -this.r
     }
   
     // Separation
     // Method checks for nearby boids and steers away
     this.separate = function(boids) {
       var desiredseparation = 25.0
       var steer = sketch.createVector(0, 0)
       var count = 0
       // For every boid in the system, check if it's too close
       for (var i = 0; i < boids.length; i++) {
         var d = p5.Vector.dist(this.position, boids[i].position)
         // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
         if (d > 0 && d < desiredseparation) {
           // Calculate vector pointing away from neighbor
           var diff = p5.Vector.sub(this.position, boids[i].position)
           diff.normalize()
           diff.div(d) // Weight by distance
           steer.add(diff)
           count++ // Keep track of how many
         }
       }
       // Average -- divide by how many
       if (count > 0) {
         steer.div(count)
       }
   
       // As long as the vector is greater than 0
       if (steer.mag() > 0) {
         // Implement Reynolds: Steering = Desired - Velocity
         steer.normalize()
         steer.mult(this.maxspeed)
         steer.sub(this.velocity)
         steer.limit(this.maxforce)
       }
       return steer
     }
   
     // Alignment
     // For every nearby boid in the system, calculate the average velocity
     this.align = function(boids) {
       var neighbordist = 50
       var sum = sketch.createVector(0, 0)
       var count = 0
       for (var i = 0; i < boids.length; i++) {
         var d = p5.Vector.dist(this.position, boids[i].position)
         if (d > 0 && d < neighbordist) {
           sum.add(boids[i].velocity)
           count++
         }
       }
       if (count > 0) {
         sum.div(count)
         sum.normalize()
         sum.mult(this.maxspeed)
         var steer = p5.Vector.sub(sum, this.velocity)
         steer.limit(this.maxforce)
         return steer
       } else {
         return sketch.createVector(0, 0)
       }
     }
   
     // Cohesion
     // For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
     this.cohesion = function(boids) {
       var neighbordist = 50
       var sum = sketch.createVector(0, 0) // Start with empty vector to accumulate all locations
       var count = 0
       for (var i = 0; i < boids.length; i++) {
         var d = p5.Vector.dist(this.position, boids[i].position)
         if (d > 0 && d < neighbordist) {
           sum.add(boids[i].position) // Add location
           count++
         }
       }
       if (count > 0) {
         sum.div(count)
         return this.seek(sum) // Steer towards the location
       } else {
         return sketch.createVector(0, 0)
       }
     }
   }
   
   // The Flock (a list of Boid objects)
   
   function Flock() {
     // An array for all the boids
     this.boids = [] // Initialize the array
   
     this.run = function() {
       for (var i = 0; i < this.boids.length; i++) {
         this.boids[i].run(this.boids) // Passing the entire list of boids to each boid individually
       }
     }
   
     this.addBoid = function(b) {
       this.boids.push(b)
     }
   }
}

function initialize() {
  return new p5(swarm, "boids");
}

export default initialize