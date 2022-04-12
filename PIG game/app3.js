/*--------------------------------Play with Computer-------------------------*/

var scores, roundScore, activePlayer, gamePlaying, saveScore1, saveScore2;

init();

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);


document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.jpg';


        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next Player
            nextPlayer();
            document.querySelector('.btn-roll').click();
            var time = function(){
                document.querySelector('.btn-roll').click();
            }
            setInterval(time, 5000);
            
        }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        //Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else {
            //Next player
            nextPlayer();
        }
    }
});



/*document.querySelector('.btn-hold').addEventListener('click', function(){
    if(activePlayer === 0){
        saveScore1 = roundScore;
        roundScore = 0;
        
        scores[0] = saveScore1 + scores[0];
        document.getElementById('score-0').textContent = scores[0];

        activePlayer = 1;
        document.getElementById('current-0').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        

        document.querySelector('.dice').style.display = 'none';
       

    }
    else{
        saveScore2 = roundScore;
        roundScore = 0;
        scores[1] = saveScore2 + scores[1];
        document.getElementById('score-1').textContent = scores[1];

        activePlayer = 0;
        //roundScore = 0;
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.player-0-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
    }
});
*/

function nextPlayer() {
    //Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

// function auto() {

//     // Add 'automatic click' event or something like that
//     // call roll dice function
//     // If it not 1, then add two condition: --
//     //     1. call roll dice function again
//     //     2. call hold function
//     //     These two condition will chosen by computer randomly on the basis of possibility.
//     // If computer rolls 1 times, then after possibility to call hold function decreases to 4 / 10.
//     // If computer rolls 2 times, then after possibility to call hold function increses to 6 / 10.
//     // If computer roll 3 times, then after possibility to call hold function increases to 7 / 10.
//     // If computer roll 4 times or more then, possibility to call hold function increses to 8 / 10.
//     // To calculate possibility use random function.

// }

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}