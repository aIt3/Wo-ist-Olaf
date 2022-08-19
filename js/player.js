class Player{
    contructor(){
        this.x = 100
        this.y = 250
        this.width = 5 
        this.height = 10 
        this.power = 0
    }

    draw(){
        //wenn ich hier die Variablen aus dem Constructor verwende, wird mir ein Fehler angezeigt - Why?
		image(game.playerImage, 100, 200, 10, 5)    
    }
    power(){
        console.log('power')
        this.y + 10

    }
   


}