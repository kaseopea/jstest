////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Code 1. Алгоритм поиска простых чисел');

var range_start = 2;
var range_end = 10;
var i;

for ( i= range_start; i <= range_end; i++) {
    //console.log('[[ ------ Step ' + i + ' ------ ]]');

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

var quackers = { username: 'Duck', tagline: 'Yippeee!', noises: noiseArray };
var dog = {
    username: 'FDog',
    tagline: 'Yippeee!',
    noises: noiseArray
};
var bee = {};
bee.username = 'DBee';
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


////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Code 4. Nesting');

var friends = [];
friends.push(animals[2].username, animals[3].username);
console.log(friends);

var relationships = {};
relationships.friends = friends;

var matches = [];
relationships.matches = matches;

relationships.matches.push(myFarm[0].username);

console.log(animals);
for ( var i in animals) {
    animals[i].relationships = relationships;
}
console.log(animals);


////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Code 5. Scope');
var expect = chai.expect;
it('a function has access to its own local scope variables',
    function () {
        var fn = function () {
            var name = 'inner';
            ACTUAL = name;
        };
        fn();

        expect(ACTUAL === 'inner').to.be.true;
    }
);

/* Почитать подробнее про тесты, полезные знания. Mocha и Chai.*/

////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Code 6. Closure');

var closureAlert = function() {
    var x = 0;
    var alerter = function() {
        alert(++x);
        //console.log(++x);
    };
    //console.log(alerter());
    return alerter;
}

var funcShooter1 = closureAlert();
var funcShooter2 = closureAlert();

//funcShooter1();
//funcShooter1();
//funcShooter1();

///////////////////////////////////////////////
var  closureTimer = function() {
    var x = 'Help! I\'m stuck in a closure';
    var alerter = function() {
        alert(x);
    };
    setTimeout(alerter, 2000);
    console.log('will still run right after');
}
//closureTimer();

///////////////////////////////////////////////
var add = function (num) {
    var num1 = num;
    var addtoNum1 = function(num2) {
        return num1 + num2;
    };
    return addtoNum1;
}

var add5 = add(5);
//console.log(add5);
console.log(add5(2));
console.log(add5(3));

///////////////////////////////////////////////
var nonsense = function(string) {
    var string = string;
    var blab = function () {
        console.log(string);
    };
    //return setTimeout(blab, 2000);
    return blab;
}
var blabLater = nonsense('blah blah blah');
blabLater();
var blagAgainLater = nonsense('cool cool cool-T');
blagAgainLater();

///////////////////////////////////////////////
var lastNameTrier = function(firstname) {
    var firstName = firstname;

    var trier = function (lastname) {
        console.log(firstName + " " + lastname);
    }

    return trier;
}

var firstNameFarmer = lastNameTrier('Farmer');
firstNameFarmer('Brown');
firstNameFarmer('Jane');
firstNameFarmer('Lynne');

var firstNameKate = lastNameTrier("Katrina");
firstNameKate('Uychaco');
firstNameKate('Smith');

var storyWriter = function() {
    var story = '';
    return {
        addWords: function (text) {
            story = story + " " + text;
            return story;
        },
        nextLine: function() {
            story += '\n\n';
            return story;
        },
        tellStory: function(){
            console.log(story);
            return story;
        },
        erase: function () {
            story = '';
            console.log('Sad-sad story has been erased (');
            return story;
        }
    }
}
var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lovely cow.');
farmLoveStory.addWords('It was a friend face.');
farmLoveStory.nextLine();
farmLoveStory.addWords('It was a friend face. There was once a lovely cow.');
farmLoveStory.addWords('It was a friend face.');
divider();
farmLoveStory.tellStory();
divider();
farmLoveStory.erase();
farmLoveStory.tellStory();