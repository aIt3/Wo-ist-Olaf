class Olaf{
    constructor(olafPosX, olafPosY){
        this.frames = []
        this.olafPosX = olafPosX
        this.olafPosY = olafPosY
        this.olafWidth = 103.42
        this.olafHeight = 215
      

    }

    preload() {
        for(let i = 1; i < 4; i++){
          // später noch assets folder hinzufügen
          let filename = 'assets/'+ 'olaf'+i+'.png';
          let frame = loadImage(filename)
          this.frames.push(frame)
        }
    }

    draw() {
        image(this.frames[frameCount % 3], this.olafPosX, this.olafPosY, this.olafWidth, this.olafHeight)
    }
    animate(){
        if(this.olafPosX < width){
        this.olafPosX = this.olafPosX + 1*18
        console.log(this.olafPosX)
         }
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