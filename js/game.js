class Game {
    constructor() {
        // VARIABLEN FÜR BILDER
        this.scoreImages = []
        this.scoreImage
        this.scoreImageWidth = 75
        this.scoreImageHeight = 99.42
        this.olafs = []
        this.olafImages = []
        this.officeImage
        this.officeWidth = 796.3
        this.officeHeight = 710.74
        //SCORE VARIABLE
        this.score = 0
        //VARIABLE FÜR RANDOM OLAF DER LOSLÄUFT
        this.randomOlaf =0

        // Array erzeugen mit X,Y Positon der jweilige Olaf
        // immer wenn neuer Olaf erstellt wird nimm random X/Y aus Array
    }

    preload() {
        // OLAF BILDER WERDEN IN ARRAY GEPUSHT
        for (let i = 1; i < 4; i++) {
            let filename = 'assets/' + 'olaf' + i + '.png';
            let frame = loadImage(filename)
            this.olafImages.push(frame)
        }
        /*
        // OLAF OBJEKTE WERDEN AUF SCREEN PLATZIERT
        for (let i = 0; i < 3; i++) {
            this.olafs.push(new Olaf(this.olafImages))

        }*/
        
        // OLAF KÖPFE FÜR SCORE         
        for (let i = 0; i < 9; i++){
                this.scoreImages[i] = loadImage('assets/olafPoint.png')
        }
        // OFFICE IMAGE
        this.officeImage = loadImage('assets/office.png')
    }

    draw() {
        //console.log(mouseX)
        console.log(this.olafs)
        clear()   
     
          if(frameCount % 20 === 0 || frameCount === 0){
            this.olafs.push(new Olaf(this.olafImages))
            this.randomOlaf = floor(random(0, this.olafs.length))
          }
          this.olafs.forEach(function (o){
            o.draw()
            o.animate()
          })

        
        // this.olafs[this.randomOlaf].animate()
         // this.olafs[this.randomOlaf].draw()


          this.olafs = this.olafs.filter(olaf => {
            if(olaf.olafPosX === 500){
                return false 
            }else if (olaf.olafPosX === 845){
                return false 
            }else {
                return true
            }
          })

           //OFFICE IMAGE WIRD ZENTRIERT GEMALT
      push()
      translate((width/2)-(796.3/2), (height/2)-(710.74/2))
      image(this.officeImage,0, 0, this.officeWidth, this.officeHeight)
      pop()


        // OLAF SCOREKÖPFE WERDEN GEMALT
        for (let i = 0; i < this.scoreImages.length;i++){
            image(this.scoreImages[i], 300+(i*40) ,70, this.scoreImageWidth, this.scoreImageHeight)
          }

          

    }
  
 

}
