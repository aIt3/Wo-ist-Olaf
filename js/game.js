let numOfFrames = 4;
let olafPosX = 80
let olafPosY = 120
let olafWidth = 103.42
let olafHeight = 215

class Game {
    constructor(){
        this.olaf = new Olaf()
        this.score = 0
        this.frames = []
        this.olafPosX = 25
        this.olafPosY = 25
        this.olafWidth = 103.42
        this.olafHeight = 215
        this.olafImage
        
    }
    preload() {
        for(let i = 1; i < numOfFrames; i++){
          // später noch assets folder hinzufügen
          let filename = 'assets/'+ 'olaf'+i+'.png';
          let frame = loadImage(filename)
          this.frames.push(frame)
        }
    }
    draw(){
        clear()
        this.olaf.draw()
        image(this.frames[frameCount % 3], olafPosX, olafPosY, olafWidth, olafHeight)
      

    }
   
}
// WENN OLAF GEFANGEN WIRD
function mousePressed(){
    if(mouseX > olafPosX && 
       mouseX < olafPosX+olafWidth &&
       mouseY > olafPosY && 
       mouseY < olafPosY+olafHeight){
      console.log('whoop')
    }
}