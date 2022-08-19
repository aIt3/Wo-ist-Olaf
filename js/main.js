const game = new Game() 

function setup(){
    createCanvas(1200, 500)
    background('white')
}
function preload() {
	game.preload()
}
function draw(){
    game.draw()

}
function keyPressed() {
	if (keyCode === 32) {
		game.player.power()
	}
}
