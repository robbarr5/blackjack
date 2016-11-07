// Generate a card with a suit and number value
function Card(suit, number) {
        this.suit = suit;
        this.number = number;

        //Set return number as card value
        this.getNumber = function(){
        	if (number===11){
            	return "Jack";
        	}else if(number===12){
            	return "Queen";
        	}else if (number===13){
            	return "King";
        	}else if (number===1){
            	return "Ace";
        	}else{
            	return number;
        	}
        };


        //Set return suit as suit type
        this.getSuit = function(){
        	if (suit===1){
            	return "Diamonds";
        	}else if (suit===2){
            	return "Hearts";
        	}else if (suit===3){
            	return "Spades";
        	}else {
            	return "Clubs";
        	}
        };
        this.getValue = function() {
        //Assign card values based on array position	
        // if its a face card, number should be set to 10
        if(number > 10 || number === 0)         {
        	return 10;
        }
        //if the return value is 1 then assign Ace value of 11
        else if (number === 1) {
        	return 11;
        }
        // Otherwise assign original number
        else {
        	return number;
        }
    }; 
}

//Deal cards - generate a random suit and value
var deal = function(){
        var suit = Math.floor(Math.random() * 4) + 1;
        var number = Math.floor(Math.random() * 13) + 1;
        return new Card(suit, number);
}


//Generate initial two cards - to be pulled by both dealer and user
var Hand = function(){
    var card1 = deal();
    var card2 = deal();
    
    var cardArray = [card1, card2];
    
    this.getHand = function(){
    return cardArray;
    };
    this.score = function(){
        var sum = 0;
        var aces = 0;
        for (i = 0; i<cardArray.length; i++) {
        sum += cardArray[i].getValue();
        
        //Check for aces to ensure appropriate value of 1 or 11 is used
        //Log the number of aces and reduce the total sum by 10 if the overall score is greater than 21
        if (cardArray[i].getValue() === 11)
        aces++;
        while (sum > 21 && aces > 0){
        sum -= 10;
        aces--;
        }       
    }
    return sum;
};

    this.printHand = function () {
       string = "";
       
       for (i = 0; i<cardArray.length; i++) {
        string += cardArray[i].getNumber() + " of suit " + cardArray[i].getSuit()+" ";
};
     return string;

};
    //Hit me logic
    //Add in additional card to those originally dealt
    this.hitMe = function(){
        card = deal();
        cardArray.push(card);

};
};


//Dealer logic
//Dealer will always "hit" if their hand value is less than 17

var playAsDealer = function(){
    dealerHand = new Hand();
    while (dealerHand.score() < 17){
        dealerHand.hitMe();
    }
    return dealerHand;
};

var dealer = playAsDealer();
console.log("The dealer's hand is " + dealerHand.printHand() + "and their score is " + dealerHand.score());


//Player interaction logic
//Prompt player to either hit or hold based on their current hand value

var playAsUser = function(){
    playerHand = new Hand();
    
    var decision = confirm("Your hand is " +playerHand.score() + ": Hit OK to hit or Cancel to stand");
    while(decision) {
        playerHand.hitMe();
        decision = confirm("Your cards: " +playerHand.printHand()
        +" Your score: " +playerHand.score() +" "
        +"OK to hit or cancel to stay.");
    }
        return playerHand;
    
}

//Declare winner

var declareWinner = function(userHand, dealerHand){
    var userHand = playerHand.score();
    var dealerHand = dealerHand.score();
    
    if ((userHand > dealerHand || dealerHand > 21) && userHand <= 21){
    console.log('You win!');
    }
    else if ((userHand < dealerHand || userHand > 21) && dealerHand <= 21){
    console.log('You lose!');
}
    else if (userHand === dealerHand || (userHand > 21 && dealerHand > 21)){
    console.log('You tied!');
}
}

declareWinner(playAsUser(),playAsDealer());
//Testing the code
//var newDeal = new Hand();
//console.log("Your hand is " + newDeal.printHand());
//console.log("Your score is " + newDeal.score());
//newDeal.hitMe();
//console.log("Your hand is now "+ newDeal.printHand() + 
//        " and your score is now " + newDeal.score());





