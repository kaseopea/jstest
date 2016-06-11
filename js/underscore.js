/*
 Тесты библиотеки Underscore.js
 */

////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Тесты библиотеки Underscore.js');

function AnimalMaker(name) {
    return {
        speak: function() { console.log("My name is " + name);}
    };
};
var animalNames = ['Smokey', 'Fluffy', 'Trigger'];
var farm = [];

//for ( var i = 0; i < animalNames.length; i++ ) {
//    farm.push(AnimalMaker(animalNames[i]))
//}
_.each(animalNames, function(name) {
    farm.push(AnimalMaker(name));
});

var mapFarm = _.map(animalNames, function(name) {
    return AnimalMaker(name);
});
console.log(farm);
console.log(mapFarm);
//console.log(farm[1].speak());

_.each(farm, function (obj) {
    console.log(obj);
    _.each(obj, function(val, prop) {
        console.log(prop + " ### " + val());
    });
});


var pocketmon = ['Charisaur', 'Bulbazar', 'Twomen'];

var newPocketmon = _.map(pocketmon, function(val) {
    return '- ' + val + ' -'
})

console.log(newPocketmon);