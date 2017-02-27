
var wincounter = [{p1win:0},
                  {p1win:0}];
var lastgamewinner;

// need to create a temp repository of total card stack
var resetdeck = ["2h52","ah51","kh50","qh49","jh48","10h47","9h46","8h45","7h44","6h43","5h42","4h41","3h40",
            "2d39","ad38","kd37","qd36","jd35","10d34","9d33","8d32","7d31","6d30","5d29","4d28","3d27",
            "2c26","ac25","kc24","qc23","jc22","10c21","9c20","8c19","7c18","6c17","5c16","4c15","3c14",
            "2s13","as12","ks11","qs10","js9","10s8","9s7","8s6","7s5","6s4","5s3","4s2","3s1",

];
var deck = ["2h","ah","kh","qh","jh","10h","9h","8h","7h","6h","5h","4h","3h",
            "2d","ad","kd","qd","jd","10d","9d","8d","7d","6d","5d","4d","3d",
            "2c","ac","kc","qc","jc","10c","9c","8c","7c","6c","5c","4c","3c",
            "2s","as","ks","qs","js","10s","9s","8s","7s","6s","5s","4s","3s",

];
// var deck = ["2h","ah","kh","qh","jh","10h","9h","8h","7h","6h","5h","4h","3h",
//             "2d","ad","kd","qd","jd","10d","9d","8d","7d","6d","5d","4d","3d",
//             "2c","ac","kc","qc","jc","10c","9c","8c","7c","6c","5c","4c","3c",
//             "2s","as","ks","qs","js","10s","9s","8s","7s","6s","5s","4s","3s",

// ];
var playdeck = [];

// player hands
var p1hand = [];
var p2hand = [];

// need to create a repository of in game cards

var p1action = [];
var p2action = [];

// rating of how the cards play against each other


//Rules
//The ranking of the cards from highest to lowest are: 2 A K Q J 10 9 8 7 6 5 4 3.
//The cards are also ranked based on their suits.
//The ranking from highest to lowest are: Hearts, Diamonds, Clubs, Spades.


// starting game

var begingame = function(){
  //The person who holds the lowest card will begin the inaugural game.
  // need to find the lowest car in both hands
  // need to add a counter for the cardgames played and create a var to hold the last person played
}
//The winner of the previous game will begin the following game.


// playing game
// Valid card plays are; Singles, Pairs (two cards of same value), Trips (3 cards of same value), Runs (3-12 consecutive cards), Chops, and Bombs.
// Players must follow the trend of play i.e. if a pair is played the subsequent player(s) may not play trips; they must play a higher pair.
// If a player plays a 3 card run the subsequent player must play a higher 3 card run. They may not play a 4 card run.
// If a player is unable, or unwilling, to beat the previous play they may pass their turn for that round.
// A round is considered complete when all players have had the option to play

// valid card plays

// single - 2d
// pair of the same value - 2d,2k
//  tripple - 2d,2k,2h
// runs 3-12 consecutive 2d,3k,4h,5d,6k




// steps to run the game
// init vars
// shuffle deck
// deal cards to hands
// pick begining person
// ask which cards to play first person
// ask second person
// evaluate cards
    // check to see if the trend is being followed




    function shuffle(deck) {
        //Fisher yates shuffle
        var i = deck.length;
        if (i == 0) return;
        while (--i) {
            var j = Math.floor(Math.random() * (i + 1));
            var tempi = deck[i];
            var tempj = deck[j];
            deck[i] = tempj;
            deck[j] = tempi;
        }
    }


function deal(deck,amount,player){

  if (player === "player1"){

    for(i = 0; i<amount; i++){
      p1hand.push(deck[0])
      deck.shift()
    }

    } else {
      for(i = 0; i<amount; i++){
      p2hand.push(deck[0])
      deck.shift()

    }
  }
}

function playercheck(){
  //takes p1hand and p2hand and find the lowest card in the hands
// finds the lowest card
}




