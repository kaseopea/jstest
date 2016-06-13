(function () {
    $ = function(selector) {
        var arrLike = {};
        var elements = document.querySelectorAll(selector);

        Array.prototype.push.apply(this, elements);
       /* for (var i = 0; i < elements.length; i++) {
            this[i] = elements[i];
            //arrLike.push.apply(this,elements[i]);
        }
        this[length] = elements.length;*/
        return this;
    };

            $.extend = function (target, object) {
                for( var prop in object) {
                    if (object.hasOwnProperty(prop)) target[prop] = object[prop];
                };
                return target;
            };

            //Static Methods
            var isArrayLike = function (obj) {
                if(typeof obj.length === "number") {
                    if(obj.length === 0) {
                        return true;
                    } else if(obj.length > 0) {
                        return (obj.length - 1) in obj;
                    }
                };
                return false;
            };

            $.extend($, {
                isArray: function(obj) {
                    return Object.prototype.toString.call(obj) === "[object Array]";
                },
                each: function(collection, cb){
                    if(isArrayLike(collection)) {
                        for ( var i = 0; i < collection.length; i++) {
                            var value = collection[i];
                            cb.call(value, i, value);
                        }
                    } else {
                        for ( var prop in collection) {
                            if(collection.hasOwnProperty(prop)) {
                                var value = collection[prop];
                                cb.call(value, prop, value);
                            };
                        };
                    };
                    return collection;
        },
        makeArray: function(arr){
            var array = [];
            $.each(arr, function(i, value) {
                array.push(value);
            });

            return array;

        },
        proxy: function(fn, context){
            return function () {
                return fn.apply(context, arguments);
            }
        }
    });


    $.extend($.prototype, {
        html: function(newHtml) {
            if( arguments.length) {
                //set
                $.each(this, function (i, el) {
                    this[el[i]].innerHTML = newHtml;
                });
                return this;
            } else {
                //get
            }
        },
        val: function(value) {},
        text: function(string) {},
        find: function(el) {},
        next: function() {},
        prev: function() {},
        parent: function() {},
        children: function() {},
        attr: function(attr, val) {},
        css: function(style, val) {},
        width: function() {},
        hide: function() {},
        show: function() {}
    })
})();


var dog = {
    name: 'Fido',
    speak: function(words) {
        return this.name + ' says ' + words;
    }
}

var speakProxy = $.proxy(dog.speak, dog);
//console.log(speakProxy('woof!'));

var sc = new $('#scripts li');
console.log(sc);
sc[0].html('')