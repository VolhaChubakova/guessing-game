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


        while ( this.min <= this.max) 
        {
          
         let result= (this.min + this.max)/2;
         
         if (result == number) { 
                return number;
            }

         else if (result < number) {
            return game.greater();
         }
        
         else { 
          return game.lower();
         }

         return null;

        }
      }
      


    lower() {
         let result=(this.min+this.max)/2;
    		 return this.max=result-1;   	 
            }

    greater() {
                 let result= (this.min+this.max)/2;
               return  this.min=result+1; 


             }

}

module.exports = GuessingGame;
