var c1 = { name: "Bob", scores: [10, 65] };
var c2 = { name: "Bill", scores: [90, 5] };
var c3 = { name: "Charlie", scores: [40, 55] };

function winner(candidates) {
  var winner = "";
  var results = [];
  if ( candidates.length === 3) {
    for ( var i = 0; i < candidates.length; i++) {
      var valid = true;
      var player = candidates[i];
      console.log(candidates[i]);

      if ((player.scores.length != 2) || (player.scores.length != 1)) valid = false;
      if (!player.name) valid = false;

      console.log(valid);
    }

  } else return false;
  return winner;
}


winner([c1, c2, c3]); // Returns "Bill"
