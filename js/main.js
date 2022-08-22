const game = new Game() 

function setup(){
    createCanvas(500, 500)
    background('white')
	frameRate(7)

}
function preload() {
	game.preload()
}
function draw(){
    game.draw()

}
// WENN OLAF GEFANGEN WIRD SAG WHOOP

function mousePressed(){
    game.checkIfPressed()
   
}
