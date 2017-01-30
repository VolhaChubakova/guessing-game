class GuessingGame {

   constructor() {

    this.number=0;
    this.min=0;
    this.max=0; 

    }      
        setRange(min, max) {
            this.min=min;
            this.max=max;                
            }

        guess() {

        const number=this.number;
       	const game = new GuessingGame();
                	
      	game.setRange(this.min, this.max);
        
       

        while ( this.min <= this.max) {

            if (Math.ceil(result) == number) { 
                return number;
                }

            else if (result < number) {
                 return game.greater();
                 }
        
            else { 
                  return game.lower();
                 }
          
             var result= Math.ceil( (this.min + this.max)/2 );
        }

          return null;
      }
      
    lower() {
        var result= Math.ceil( (this.min + this.max)/2 );
        return this.max=Math.ceil(result-1);	 
            }

    greater() {
        var result= Math.ceil( (this.min + this.max)/2 );
        return  this.min=Math.ceil(result+1); 
            }

}

module.exports = GuessingGame;
