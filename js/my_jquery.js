(function () {
    $ = function(selector) {

        //Remove new
        if (!(this instanceof $)) {
            return new $(selector);
        }

        var elements = document.querySelectorAll(selector);

        Array.prototype.push.apply(this, elements);
       /* for (var i = 0; i < elements.length; i++) {
            this[i] = elements[i];
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

    var getText = function (el) {
        var txt = "";
        $.each(el.childNodes, function(i, childNode) {
            if(childNode.nodeType === Node.TEXT_NODE) {
                txt += childNode.nodeValue;
            } else if (childNode.nodeType === Node.ELEMENT_NODE) {
                txt += getText(childNode);
            }
        });

        return txt;
    }

    $.extend($.prototype, {
        html: function(newHtml) {
            if( arguments.length) {
                //set
                $.each(this, function (i, el) {
                    el.innerHTML = newHtml;
                });
                return this;
            } else return this[0] && this[0].innerHTML;
        },
        val: function(newVal) {
            if(arguments.length) {
                $.each(this, function (i, el) {
                    el.val(newVal);
                });
                return this;
            } else return this[0] && this[0].value;
        },
        text: function(newText) {
            if(arguments.length) {
                //setter
                this.html("");
                return $.each(this, function (i, el) {
                    var textNode = document.createTextNode(newText);
                    el.appendChild(textNode);
                });
            } else return this[0] && getText(this[0]);
        },
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

var sc = new $('#scripts');
//console.log(sc);
//sc.html('Cool-cool stuff');

document.write('<input id="testInput" value="200">');

var inp = new $('#testInput');
//console.log(inp);
//console.log(inp.val());

//console.log(sc);
//console.log(sc.text());