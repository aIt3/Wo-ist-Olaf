class Game {
    constructor(){
        this.olaf = new Olaf(100, 100)
        this.score = 0
        this.olafs = []
     

        for(let i = 0; i < 9; i++){
            this.olafs.push(new Olaf(100+(i*10), 100))
        }
        console.log(this.olafs)
    }

    preload() {
        this.olaf.preload()
   
    }

    draw(){
        clear()
        this.olaf.draw()
        this.olaf.animate()

      
        
       

        for(let i = 0; i < this.olafs.length; i++){
            this.olafs[i].draw()
            
        }


        


       
      

    }
   
   
}
