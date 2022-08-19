class Game {
    constructor(){
        this.player = new Player()
        this.playerImage
    }
    preload() {
        this.playerImage = loadImage('/assets/stone.png')
    }
    draw(){
        this.player.draw()

    }
}