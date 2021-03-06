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
        var _this = this;
        var innerContents = '';

        if (_.isString(element) && regex.test(element)) {

            _this.type = element;
            _this.attributes = [];

            //innerHTML
            Object.defineProperty(this, 'innerHTML', {
                get: function () {
                    var elAtts, elContent, childrenInnerHTML = '';

                    // Prepare Attributes
                    if (_this.attributes.length) {
                        elAtts = _this.attributes.reduce(function(a, b) {
                            return a + ' ' + b.name + '="' + b.value + '"'
                        }, '');
                    } else {
                        elAtts = '';
                    }

                    // Prepare children
                    // todo: Make children work with content
                    // todo: Children can be nested on output?

                    if (_this.children.length) {
                        _.forEach(_this.children, function (item) {
                            childrenInnerHTML += item.innerHTML;
                        });
                        elContent = childrenInnerHTML;
                    } else {
                        elContent = _this.content;
                    }

                    // output
                    return '<' + _this.type + elAtts +'>' + elContent + '</' + _this.type + '>';
                }
            });

            // Contents property
            Object.defineProperty(this, 'content', {
               set: function (value) {
                    if (!this.children.length) {
                        innerContents = value;
                    } else {
                        console.error('You can\'t add content to element that have children');
                    }
               },
                get: function() {
                    return innerContents;
                }
            });

            // Parent/Child stuff;
            this.children = [];
            this.parent = null;

            return this;
        } else {
            console.error('Not a valid domElement');
        }
    },

    // append child method
    appendChild: function(element) {
        var parentEl = this; //head
        var childEl = element; //meta

        childEl.parent = parentEl;
        parentEl.children.push(childEl);

        // todo: check if it is enough

        return this;
    },

    // add attribute method
    addAttribute: function (attrName, attrValue) {
        var attr, attrNameRegex, attrValueRegex;
        var _this = this;

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
                console.error('Invalid params for attribute');
            }

        } else {
            console.error('You should define element type first to add attr');
        }

    },

    // remove attribute method
    removeAttribute: function(attr) {
        var _this = this;
        var i, attrItem;

        for (i = 0; i < _this.attributes.length; i++) {
            attrItem = _this.attributes[i];
            if (attrItem.name === attr) {
                _this.attributes.splice(i, 1);
                continue;
            }
        }

        return _this;
    }
};




// Tests
console.log('Task 2 ***********************************\n\n');

var meta = Object.create(domElement)
    .init('meta')
    .addAttribute('charset', 'utf-8');

var head = Object.create(domElement)
    .init('head')
    .appendChild(meta)

var div = Object.create(domElement)
    .init('div')
    .addAttribute('style', 'font-size: 42px; color: #fff');

div.content = 'Hello, mad-mad world!';

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
//document.write(root.innerHTML);

// todo: more test cases
var divInner = Object.create(domElement)
    .init('div')
    .addAttribute('style', 'border: 5px solid green');
var div = Object.create(domElement)
    .init('div')
    .addAttribute('style', 'border: 10px solid red;')
    .appendChild(divInner);

var root = Object.create(domElement)
    .init('div')
    .appendChild(div);
console.log(root.innerHTML);
document.write(root.innerHTML);