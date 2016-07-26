var domElement = {
    type: null,
    innerHTML: null,
    content: null,
    attributes: [],
    children: null,
    parent: null,

    // init method
    init: function(element) {
        var regex = new RegExp('^[a-z0-9]+$', 'i');
        if ((typeof element === 'string') && regex.test(element)) {

            this.type = element;
            this.attributes = [];

            //innerHTML
            Object.defineProperty(this, 'innerHTML', {
                get: function () {
                    var elAtts, elContent, childrenInnerHTML = '';
                    if (this.attributes.length) {
                        elAtts = this.attributes.reduce(function(a, b) {
                            return a + ' ' + b.name + '="' + b.value + '"'
                        }, '');
                    } else {
                        elAtts = '';
                    }

                    if (this.children.length) {

                        //todo: case we have a children
                        console.log(this.children);
                        _.forEach(this.children, function (item) {
                            childrenInnerHTML += item.innerHTML;
                        });
                        elContent = childrenInnerHTML;

                    } else {
                        elContent = this.content;
                    }

                    return '<' + this.type + elAtts +'>' + elContent + '</' + this.type + '>';
                }
            });

            // Contents property
            this.innerContents = '';
            Object.defineProperty(this, 'content', {
               set: function (value) {
                    if (!this.children.length) {
                        this.innerContents = value;
                    } else {
                        throw new Error('You can\'t add content to element that have children');
                    }
               },
                get: function() {
                    return this.innerContents;
                }
            });

            // Parent / Child stuff;
            this.children = [];
            this.parent = null;

            return this;
        } else {
            throw new Error('Not a valid domElement');
        }
    },

    // append child method
    appendChild: function(element) {
        var parentEl = this; //head
        var childEl = element; //meta

        childEl.parent = parentEl;
        parentEl.children.push(childEl);

        //console.log(childEl);
        //console.log(parentEl);
        return this;
    },

    // add attribute method
    addAttribute: function (attrName, attrValue) {
        var attr, attrNameRegex, attrValueRegex;
        var _this = this;

        /*console.group('domElement ' + _this.type);
        console.log('Object:', this);
        console.log('Type: ' + _this.type);
        console.log(typeof _this.attributes);
        console.groupEnd();*/

        //assume that if we have a type property - it's valid
        if (_this.type) {

            // todo: more tests for attrValueRegex

            attrNameRegex = /^[a-z0-9-]+$/i;
            attrValueRegex = /^[a-z0-9:#%_;\.\/\'"()-\s\[\]]+$/ig;
            if (_.isString(attrName) && _.isString(attrValue) && attrNameRegex.test(attrName) && attrValueRegex.test(attrValue)) {

                attr = {
                    name: attrName,
                    value: attrValue
                };

                _this.attributes.push(attr);
                _this.attributes.sort( function(a,b) {
                    return a.name > b.name;
                });

                return _this;

            } else {
                throw new Error('Invalid params for attribute');
            }

        } else {
            throw new Error('You should define element type first to add attr');
        }

    },

    // remove attribute method
    removeAttribute: function(attr) {
        var _this = this;
        var i, attrItem;

        //console.log("attr name: " + attr);
        //console.log(_this.attributes);
        //_.forEach(_this.attributes, function(attr) {
        //    console.log('>>>>>>>  ' + attr.name);
        //});

        for (i = 0; i < _this.attributes.length; i++) {
            attrItem = _this.attributes[i];
            //console.log(attrItem);
            if (attrItem.name === attr) {
                //console.log('FOUND: ' + attrItem.name + ' - INDEX: ' + i);
                _this.attributes.splice(i, 1);
                continue;
            }
        }
        //console.log('\n\n');
        //_.forEach(_this.attributes, function(attr) {
        //    console.log('>>>>>>>  ' + attr.name);
        //});

        return _this;
    }
};



var div = Object.create(domElement)
    .init('div')
    .addAttribute('data-style', 'font-size: 42px')
    .addAttribute('class', 'panel')
    .addAttribute('id', 'panelCool');

div.content = 'Cool content';
console.log(div.innerHTML);
//console.log(div.attributes);
//_.forEach(div.attributes, function(attr) {
//    console.log('> ' + attr.name);
//});


console.log('\n\n');

var span = Object.create(domElement)
    .init('span')
    .addAttribute('style', 'color: #fff')
    .addAttribute('class', 'span-panel')
    .addAttribute('id', 'alert')
    .removeAttribute('style');

//console.log(span.attributes);
//
//_.forEach(span.attributes, function(attr) {
//    console.log('> ' + attr.name);
//});



/*
var meta = Object.create(domElement)
    .init('meta')
    .addAttribute('charset', 'utf-8')
    .appendChild(span);

var span = Object.create(domElement)
    .init('span')
    .addAttribute('class', 'testspan_for_head')
    .appendChild(span);

var head = Object.create(domElement)
    .init('head')
    .appendChild(meta)
    .appendChild(span);

console.log('\n\n');
console.log('This is head from the bottom: ', head);
console.log(head.innerHTML);*/


var meta = Object.create(domElement)
    .init('meta')
    .addAttribute('charset', 'utf-8');

var head = Object.create(domElement)
    .init('head')
    .appendChild(meta)

var div = Object.create(domElement)
    .init('div')
    .addAttribute('style', 'font-size: 42px; color: #fff');

div.content = 'Hello, world!';

var body = Object.create(domElement)
    .init('body')
    .appendChild(div)
    .addAttribute('id', 'myid')
    .addAttribute('bgcolor', '#012345');

var root = Object.create(domElement)
    .init('html')
    .appendChild(head)
    .appendChild(body);

console.log(root.innerHTML);

document.write(root.innerHTML);