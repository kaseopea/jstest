////////////////////////////////////////////////////////////////////////////////////////////////////
//page.title('Closure Exercise');

var make = {};

var tags = [ 'a', 'div', 'span', 'form', 'h1', 'h2', 'h3', 'h4'];
for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    (function (tag) {
        make[tag] = function () {
            return document.createElement(tag);
        };
    })(tags[i]);

    /*make[tag] = function () {
        return document.createElement(tag);
    };*/
}

var h1 = make.h1();
h1.innerHTML = 'Hello World';

//console.log(h1);
//document.body.appendChild(h1);

////////////////////////////////////////////////////////////////////////////////////////////////////
//page.title('Reference test');
var me = {
    name: {
        first: "Vitaly"
    }
}

name = me.name;
delete me.name;
//console.log(name.first);
//page.end();

////////////////////////////////////////////////////////////////////////////////////////////////////
var a = {};
for (var i = 0; i < 3; i++) {

    //a[i] = function() {alert(i)};
    (function(j){
        a[j] = function(){ alert(j)};
    })(i);

}
//a[0]();
//a[1]();
//a[2]();

////////////////////////////////////////////////////////////////////////////////////////////////////
var Person = function (name) {
    this.name = name;
}
Person.prototype.isPerson = true;
Person.prototype.speak = function () {
    console.log('Hello! ' + this.name);
    console.log(arguments);
};

var DOT = function(obj, prop) {
    //console.log(obj.__proto__.__proto__);
    //console.log(obj.hasOwnProperty(prop));
    if(obj.hasOwnProperty(prop)) {
        //console.log(obj);
        //console.log("hasOwnProperty \"" + prop +"\": " + obj[prop]);
        return obj[prop];
    } else if (obj.__proto__) {
        return DOT(obj.__proto__, prop);
    }
}

var DOTCALL = function (obj, prop, args) {
    var fn = DOT(obj, prop);

    if(fn) {
        return fn.apply(obj, args);
    }
}

//var person = new Person('Smith');
//DOT(person, 'name');
//DOT(person, 'isPerson');
//DOTCALL(obj, propName, args);
//DOTCALL(person, 'speak', [1,2,3]);

////////////////////////////////////////////////////////////////////////////////////////////////////
var Person = function (name) {
    this.name = name;
}
Person.prototype.speak = function () {
    console.log('Hello!');
}

var NEW = function (constructor, args) {
    var obj = {};
    obj.__proto__ = constructor.prototype;
    constructor.apply(obj, args);
    return obj;
}

var person = NEW(Person, ['name']);
//person.speak();

////////////////////////////////////////////////////////////////////////////////////////////////////
var Dog = function () {

};
var pup = new Dog();
//console.log(pup);
//console.log("Pup is " + typeof pup);
//
//console.log("pup.__proto__: " + pup.__proto__);
//console.log("pup.prototype: " + pup.prototype);
//page.end();
////////////////////////////////////////////////////////////////////////////////////////////////////
var Animal = {
    init: function(name) {
        this.name = name;
    },
    eats: function() {
        return this.name + " is eating";
    }
}

var Chordate = Object.create(Animal, {
    has_spine: { value: true}
});
var Mammal = Object.create(Chordate, {
    has_hair: { value: true }
});

var m = Object.create(Mammal);
m.init('dog');

//console.log(m);
//console.log("m " + typeof m);
//console.log("m.__proto__: " + m.__proto__);

////////////////////////////////////////////////////////////////////////////////////////////////////
var Person = function (name) {
    this.name = name;
}

var Female = function (name) {
    this.name = name;
}
var INSTANCEOF = function (obj, constructor) {
    if (obj.__proto__ === constructor.prototype) {
        return true;
    } else if (obj.__proto__) {
        return INSTANCEOF(obj.__proto__, constructor);
    } else {
        return false;
    }
    return result;
}
var person = new Person('Alexis');

console.log(person);
console.log(person.__proto__);
console.log(person.__proto__.__proto__);
console.log(person.__proto__.__proto__.__proto__);
page.end();
console.log("person - Person: " + INSTANCEOF(person,Person));
console.log("person - Female: " + INSTANCEOF(person,Female));