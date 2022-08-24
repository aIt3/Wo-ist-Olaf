class Olaf {
    constructor(olafImages) {
        // this.frames = []
        // console.log(olafImages)
        this.olafCoordsX = [200, 520] 
        this.olafCoordsY = [248, 440, 632]  
        this.olafPosX = this.olafCoordsX[floor(random(0, this.olafCoordsX.length))]
        this.olafPosY = this.olafCoordsY[floor(random(0, this.olafCoordsY.length))]
        this.olafWidth = 47.62
        this.olafHeight = 86.1
        this.olafImages = olafImages
        this.olafSteps = 0

        // x und y werte für mögliche olfas eintragen, random herauspicken 
        
        
    }


    draw() {
        image(this.olafImages[frameCount % 3], this.olafPosX, this.olafPosY, this.olafWidth, this.olafHeight)
      //  console.log(this.olafPosX)
        //console.log(this.olafPosX)

        console.log(this.olafSteps)

            

    }
    animate() {
        if(this.olafPosX < 520 || this.olafPosX < 830){
        this.olafPosX += this.olafSteps
        this.olafSteps++
    }else {
        this.olafSteps = 0
    }
       // WENN OLAFPOSX === 200 DANN LAUFE +100 
           //this.olafPosX = this.olafPosX + 1 * 20
        /*
        if(this.randomOlaf < 1 && this.olafPosX < width){
            this.olafPosX = this.olafPosX + 1 * 18
            console.log(this.olafPosX)
            */
    }
       
    checkIfPressed() {
        if (mouseX > this.olafPosX &&
            mouseX < this.olafPosX + this.olafWidth &&
            mouseY > this.olafPosY &&
            mouseY < this.olafPosY + this.olafHeight) {
            
            cursor(CROSS);
            game.score += 1
            game.scoreImages.shift()
            game.olafs.shift()
            console.log(game.score)
            game.olafs


        
    }
    }
   

}