
const game = new Game() 

function setup(){
    let myCanvas = createCanvas(1000, 1000)
	frameRate(5)
    myCanvas.parent('sketch-holder')
    myCanvas.style('display', 'block');

}
function preload() {
	game.preload()
}
function draw(){
    game.draw()

}
// WENN OLAF GEFANGEN WIRD SAG WHOOP

function mousePressed(){
    for(let i = 0; i < game.olafs.length; i++ ){
    game.olafs[i].checkIfPressed()
    }
   
}