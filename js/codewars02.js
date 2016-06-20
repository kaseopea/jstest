var c1 = { name: "Bob", scores: [10, 65] };
// var c2 = { name: "Bill", scores: [90, 5] };
var c2 = { name: "Bill"};
var c3 = { name: "Charlie", scores: [40, 55] };

function winner(candidates) {
  var winner = "";
  var currentWinner = 0;
  if ( candidates.length === 3) {
    for ( var i = 0; i < candidates.length; i++) {
      var valid = true;
      var player = candidates[i];

      //checks
      if (!player.scores) return false;
      if ((player.scores.length > 2) || (player.scores.length < 1)) return false;
      if (!player.name) return false;
      var playerScore = player.scores.reduce(function(a,b) { return a+b;});
      if ( playerScore > 100) return false;
      var validScores = player.scores.every(function(val, i , arr) { return val % 5 == 0;});
      if (!validScores) return false;

      if (valid) {
        var win = 100 - playerScore;
        var currentWinnerScore = 100 - candidates[currentWinner].scores.reduce(function(a,b) { return a+b;} );
        if ( currentWinnerScore > win) {
          currentWinner = i;
        }
      } else {
        continue;
      }

    }
    winner = candidates[currentWinner].name;
  } else return false;
  return winner;
}


console.log(winner([c1, c2, c3])); // Returns "Bill"
