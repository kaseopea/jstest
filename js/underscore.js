/*
 Тесты библиотеки Underscore.js
 */

////////////////////////////////////////////////////////////////////////////////////////////////////
//page.title('Write a function called checkValue that searches an array for a value. It takes an array and a value and returns true if the value exists in the array, otherwise it returns false.')
var helloArr = ['bonjour', 'hello', 'hola'];
var checkValue = function(array, value) {
    var found = 0;
    var searh = _.map(array, function(val) {
        if (val == value) found++;
    })
    var result = (found > 0) ? true : false;
    return result;
}
//console.log(helloArr);
//console.log("privet: " + checkValue(helloArr, 'privet'));
//console.log("hola: " + checkValue(helloArr, 'hola'));
//page.end();



////////////////////////////////////////////////////////////////////////////////////////////////////
//page.title('Rewrite checkValue using _.each.');

var checkValueEach = function (array, value) {
    var found = 0;
    _.each(array, function (val) {
        if (val == value) found++;
    });
    return(found > 0) ? true : false;
}
//console.log(helloArr);
//console.log("privet: " + checkValueEach(helloArr, 'privet'));
//console.log("hola: " + checkValueEach(helloArr, 'hola'));
//page.end();



////////////////////////////////////////////////////////////////////////////////////////////////////
//page.title('Write a loop that pushes all the values in an object to an array');
var testObj = {two: 2, four: 4, three: 3, twelve: 12};
var output = [];
_.each(testObj, function (val) {
    output.push(val);
});

//console.log(testObj);
//console.log(output);
//page.end();



////////////////////////////////////////////////////////////////////////////////////////////////////
//page.title('Use _.map to mimic the previous behavior');
var output = _.map(testObj, function (val) {
    return val;
})
//console.log(output);
//page.end();



////////////////////////////////////////////////////////////////////////////////////////////////////
//page.title('Use _.filter to return all the even numbers in an array.');
var evens = _.filter(output, function (num) {
    return num % 2 == 0;
})
//console.log(evens);
//page.end();



////////////////////////////////////////////////////////////////////////////////////////////////////
//page.title('Use _.reduce to multiply all the values in an array.');

var testArray = [1,2,3,4,5,6,7,8,9,10];
var multi = _.reduce(testArray, function (memo, num) {
    return memo * num;
},1);
//console.log(multi);
//page.end();



////////////////////////////////////////////////////////////////////////////////////////////////////
//page.title('Use _.reduce to concatenate all strings in an array.');

var test = ['x','y','z'];
var string = _.reduce(test, function (memo, char) {
    return memo + char;
}, '');
//console.log(test);
//console.log(string);
//page.end();



////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Write a function that takes an array of names and congratulates them. Make sure to use _.reduce as part of the function.');

var names = ['Steve', 'Sally', 'George', 'Gina'];
var congratulations = function (names) {
    var who = _.reduce(names, function (memo, name) {
        return memo + ', ' + name;
    }, '');
    who = who.substring(1,who.length);

    return 'Congratulations ' + who + '!';
}
console.log(congratulations(names));
page.end();



////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('_.pluck takes an object and a property name and returns the property name\'s value.\n' +
    'Write your own version called myPluck.');
var testObj = {
    name: 'test',
    val: [1,2,3]
};
var myPluck = function(obj, propName){
    return obj[propName];
}

console.log(myPluck(testObj, 'test'));
page.end();


////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Use _.filter to return all strings in an array that start with the letter \'Z\'.');
var names = ['Steve', 'Zally', 'George', 'Zina'];
var namesZ =[];
var search = _.each(names, function (name) {
    var firstLetter = name.split('');
    if(firstLetter[0].toLowerCase() == 'z') namesZ.push(name);
});
console.log(names);
console.log(namesZ);
page.end()

////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Use _.where on your farm animals from the lecture slides to return all animals who contain the value 3 at the property name space.');

var farmObj = [ {speak: function(){console.log('My name is ' + name);}, name: "Tiger", space: 7},
    {speak: function(){console.log('My name is ' + name);}, name: "Tiger2", space: 1},
    {speak: function(){console.log('My name is ' + name);}, name: "Tiger3", space: 3},
    {speak: function(){console.log('My name is ' + name);}, name: "Tiger4", space: 3} ];
var result = _.where(farmObj,{ space: 3});

console.log(testObj);
console.log(result);
page.end();


/*
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
_.each(animalNames, function(name, i) {
    farm.push(AnimalMaker(name));
    console.log((i+1) + ". " + name);
});

var mapFarm = _.map(animalNames, function(name) {
    return AnimalMaker(name);
});

_.each(farm, function (obj) {
    //console.log(obj);
    _.each(obj, function(val, prop) {
        console.log(prop + " ### " + val);
    });
});
var pocketmon = ['Charisaur', 'Bulbazar', 'Twomen'];
var newPocketmon = _.map(pocketmon, function(val) {
    return '- ' + val + ' -'
})
console.log(newPocketmon);*/
