class Olaf{
    constructor(){
        this.frames = []
        this.olafPosX = 25
        this.olafPosY = 25
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



   
   
}