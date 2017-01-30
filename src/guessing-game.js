class GuessingGame {
    constructor() {

    this.number=null;
    }

    setRange(min, max) {

    	while (min==0){
            var start=0;
         	  var end=max;
    	} 
    	   		
       }

    guess() {

    	const game = new GuessingGame();
    	game.setRange(min, max);


        let middle= (start + end) / 2;

        
       while (result != number )

        {

        if (result==middle) {
              result==number;
              return number;
            }
       	if (result<middle){
       		game.lower();
       	}

        else if (result>middle){
       		game.greater();
       	}
	
        return number;
        }
      	
    }

    lower() {
    	   start=start; 
    		end=result-1;   	          
        }

    greater() {
    	start=result+1; 
    	end=end;
    }

}

module.exports = GuessingGame;
