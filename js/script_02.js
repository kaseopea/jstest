/**
 * Created by vitalyrusov on 23.03.16.
 */
////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Code 1. Алгоритм поиска простых чисел');

var range_start = 2;
var range_end = 10;
var i;

for ( i= range_start; i <= range_end; i++) {
    console.log('[[ ------ Step ' + i + ' ------ ]]');

    //check for simple number 2
    if (i == 2) {
        console.log('>>> Simple Number: ' + i);
        continue;
    } else {

        //other simple numbers
        var check_start = 2;
        var check_end = i;
        var j;
        var ifSimpleCounter = 0;

        for (j = check_start; j <= check_end; j++) {
            //console.log('[i:' + i + '][j:' + j + ']');
            if (i % j == 0) {
                ifSimpleCounter++;
            }
        }


        if (ifSimpleCounter == 1) {
            console.log('>>> Simple Number: ' + i);
        }
    }
}

divider();
/*
nextPrime:
    for (var i = 2; i <= 10; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        //console.log( i ); // простое
    }
*/
////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Code 2. Array Exercises');

var animal =  { username: 'DaffyDuck', tagline: 'Yippeee!', noises: [] };

var noiseArray = ["honk"];
noiseArray.unshift("quack");
noiseArray.push("sneeze");
noiseArray[noiseArray.length] = "wroom";
console.log(noiseArray);
console.log("Length of noiseArray: " + noiseArray.length);
console.log("Last element: " + noiseArray[noiseArray.length-1]);

var animals = [];
animals.push(animal);

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: noiseArray };
var dog = {
    username: 'FFuck',
    tagline: 'Yippeee!',
    noises: noiseArray
};
var bee = {};
bee.username = 'DPIS';
bee.tagline = 'Yippeee!';
bee.noises = noiseArray;

animals[animals.length] = quackers;
animals.push(dog, bee);
//console.log(animals);
//console.log(animals.length);

////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Code 3. eFarmony Functions');

var AnimalTestUser = function (username) {
    var args = [];
    if (arguments.length > 1) {
        for (
            var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
    }
    return {
        username: username,
        otherArgs: args
    }
};

var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );

var AnimalCreator = function(username, species, tagline,noises) {
    return {
        username: username,
        species: species,
        tagline: tagline,
        noises: noises,
        friends: []
    }
};

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);

var cow = AnimalCreator('Moo', 'cow', 'Moo!Moo!Moo!', ['bacccc', 'gg', 'chewchewchew']);
var llama = AnimalCreator('Zeny', 'llama', 'It\'s wheeps!', ['baalll', 'rr', 'bahbahbah']);
var addFriend = function(animalObj, friendObj) {
    //return animalObj.friends.push(friendObj);
    return animalObj.friends.push(friendObj.username);
}
addFriend(sheep, cow);
addFriend(sheep, llama);
addFriend(cow, sheep);
addFriend(llama, sheep)

var myFarm = [];
myFarm.push(sheep, cow, llama)

var addMatchesArray = function (arr) {
    for ( var i = 0; i < arr.length; i++ ) {
      arr[i]['matches'] = [];
    };
    return arr;
};
addMatchesArray(myFarm);
console.log(myFarm);

var giveMatches = function(arr) {
    for ( var i = 0; i < arr.length; i++ ) {
        arr[i].matches.push(arr[i].friends[arr[i].friends.length - 1]);
    }
    return arr;
};

giveMatches(myFarm);
console.log(myFarm);