# Card Game

### Objective
The objective of the game is to be the first player to get rid of all 13 cards by playing various combinations.
 
 
A game involves at least two players but no more than four.
Assume all players will play on the same screen.
You may use whichever language you'd like however, JavaScript is preferred.
 
 
### Game Rules
 
The ranking of the cards from highest to lowest are: 2 A K Q J 10 9 8 7 6 5 4 3.  
The cards are also ranked based on their suits. 
The ranking from highest to lowest are: Hearts, Diamonds, Clubs, Spades.
 
The person who holds the lowest card will begin the inaugural game.
The winner of the previous game will begin the following game.
 
Valid card plays are; Singles, Pairs (two cards of same value), Trips (3 cards of same value), Runs (3-12 consecutive cards), Chops, and Bombs.
Players must follow the trend of play i.e. if a pair is played the subsequent player(s) may not play trips; they must play a higher pair.
If a player plays a 3 card run the subsequent player must play a higher 3 card run. They may not play a 4 card run.
If a player is unable, or unwilling, to beat the previous play they may pass their turn for that round.
A round is considered complete when all players have had the option to play.
 
Chops will beat a single 2.
They consist of three consecutive pairs. 
A player may beat another chop with a higher chop.
 
Bombs will beat a single 2, a pair of 2's, and a chop. 
From lowest to highest they consist of; four consecutive pairs, quads (four cards of same value), and five consecutive pairs. 
 
An automatic win occurs if a player has 6 pairs, holds all 2's, or has a 13 card run.
 

## Logic Programming steps
1. Initials vars
	- player hands
	- player action hands
	- set deck

2. shuffle deck
3. deal cards to hands
4. pick begining person
	- Check for last won, person that last won goes first
	- If it is a first game, person with lowest card goes first
5. ask which cards to play first person
6. ask second person
7. evaluate cards
    - check to see if the trend is being followed
	- give error if it is not
8. More logic needed after this step


## Frontend design idea
Javascript cards library already exists for graphivs
https://github.com/einaregilsson/cards.js

Potential use for this graphics fronend while designing the backend

## Issues that need to be worked on
- Frontend integration
- Game logic for card plays
- Win logic


## Further Previous references for games

I created a game using the card methodology and HTML  Here: 

![](https://github.com/ilya0/Project1/blob/master/readme%20files/Main%20setup%20front%20page.png)

Link to [game](http://ilya0.github.io/Project1)

Link to [Trello](https://trello.com/b/0pPnXkD1/project1-pvp)

