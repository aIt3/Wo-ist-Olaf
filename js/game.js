class Game {
    constructor(){
        this.olaf = new Olaf()
        this.score = 0
        this.olafPosX = 25
        this.olafPosY = 25
        this.olafWidth = 103.42
        this.olafHeight = 215

       
        
    }
    preload() {
        this.olaf.preload()
   
    }
    draw(){
        clear()
        this.olaf.draw()
        //image(game.frames[frameCount % 3], this.olafPosX, this.olafPosY, this.olafWidth, this.olafHeight)
        //image(this.frames[frameCount % 3], this.olafPosX, this.olafPosY, this.olafWidth, this.olafHeight)
      

    }
    checkIfPressed(){
        if(mouseX > this.olafPosX && 
            mouseX < this.olafPosX+this.olafWidth &&
            mouseY > this.olafPosY && 
            mouseY < this.olafPosY+this.olafHeight){
           console.log('whoop')
         }
    }
   
}
