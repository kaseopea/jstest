function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(this.type + " кролик говорит: '" + line + "'");
}
Rabbit.prototype.teeth = "мелкие";

var killerRabbit = new Rabbit('убийственный');
var blackRabbit = new Rabbit('черный');

killerRabbit.teeth = "длинные, острые и окровавленные";

// blackRabbit.speak("Всем капец!");
// killerRabbit.speak("Всем стоять!");

// console.log(blackRabbit.type);
// console.log(Object.getPrototypeOf(blackRabbit));

// console.log(killerRabbit.teeth);
// console.log(blackRabbit.teeth);
// console.log(Rabbit.prototype.teeth);


/////////////////////////////////////////////////////////////////////////////
var map = {};
function storePhi(event, phi) {
    map[event] = phi;
}
storePhi("пицца", 0.069);
storePhi("тронул дерево", -0.081);

Object.prototype.nonsense = "ку";
// for ( var name in map) console.log(name);

delete Object.prototype.nonsense;
// for ( var name in map) console.log(name);

// console.log( "nonsense" in map);
// console.log( "toString" in map);

/////////////////////////////////////////////////////////////////////////////
