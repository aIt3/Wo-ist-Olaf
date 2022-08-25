class Game {
  constructor() {
    // VARIABLEN FÜR BILDER
    this.scoreImages = []
    this.scoreImage
    this.scoreImageWidth = 105
    this.scoreImageHeight = 139.19
    this.olafs = []
    this.olafImages = []
    this.officeImage
    this.officeWidth = 850.3
    this.officeHeight = 758.96
    //SCORE VARIABLE
    this.score = 1
    //VARIABLE FÜR RANDOM OLAF DER LOSLÄUFT
    this.randomOlaf = 0
    this.gameOver = document.querySelector('.gameOver')
    this.huetteBrennt = document.querySelector('#huetteBrennt')
    this.textBox = document.querySelector('.text')
    this.textBox2 = document.querySelector('.text2')
    //this.playAgain = document.createElement('#playAgain')



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
    for (let i = 0; i < 9; i++) {
      this.scoreImages[i] = loadImage('assets/olafPoint4.png')
    }
    // OFFICE IMAGE
    this.officeImage = loadImage('assets/office2.png')
  }

  draw() {
    console.log(mouseX)

    //console.log(mouseX)
    //console.log(this.huetteBrennt)
    clear()

    if (frameCount % 25 === 0 || frameCount === 0) {
      this.olafs.push(new Olaf(this.olafImages))
      this.randomOlaf = floor(random(0, this.olafs.length))
    }
    this.olafs.forEach(function (o) {
      o.draw()
      o.animate()
    })


    // this.olafs[this.randomOlaf].animate()
    // this.olafs[this.randomOlaf].draw()


    this.olafs = this.olafs.filter(olaf => {
      if (olaf.olafPosX > 490 && olaf.olafPosX < 519) {
        return false
      } else if (olaf.olafPosX > 800 && olaf.olafPosX < 880) {
        return false
      }else if(this.score === 10){
          return false
      } else {
        return true
      }
    })

    //OFFICE IMAGE WIRD ZENTRIERT GEMALT
    push()
    translate((width / 2) - ((this.officeWidth / 2)), ((height / 2) + 90) - (this.officeHeight / 2))
    image(this.officeImage, 0, 0, this.officeWidth, this.officeHeight)
    pop()


    // OLAF SCOREKÖPFE WERDEN GEMALT
    for (let i = 0; i < this.scoreImages.length; i++) {
      image(this.scoreImages[i], 170 + (i * 65), 30, this.scoreImageWidth, this.scoreImageHeight)
    }

    if (this.score === 10){
      this.gameOver.style.visibility="visible"
      this.gameOver.style.opacity="1"
      this.score = 0
    }
    this.huetteBrennt.addEventListener('click', () => {
      this.textBox.innerHTML = '... Sorry I need to go.'
      setTimeout(6000)
      this.gameOver.style.visibility= 'hidden'
      this.gameOver.style.opacity= '0'


    })
    /*
    this.playAgain.addEventListener('click', () => {
      myCanvas.reset()
    })
    */ 



  }



}
