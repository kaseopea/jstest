////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Question 1. Scope');
(function() {
    //"use strict";
    var a = b = 5;
})();
console.log("Q: var a = b = 5    A: b = " + b);


////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Question 2. Native Methods');
String.prototype.repeatify = String.prototype.repeatify || function(times) {
    var str = '';
    for (var i = 1; i <= times; i++) {
        str = str + this + " ";
    }
    return str;
}
console.log('hello'.repeatify(3));


////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Question 3. Hoisting');
function test() {
    var a;
    function foo() {
        return 2;
    }
    console.log(a);
    console.log(foo());
    a = 1;
}
test();


////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Question 4. How \'this\' works in JavaScript');
var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};
console.log("obj.prop.getFullname(): " + obj.prop.getFullname());
var testvar = obj.prop.getFullname;
console.log("testvar = obj.prop.getFullnam; testvar(): " + testvar());



////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Question 5. call() and apply()');
console.log("testvar.call(obj.prop): " + testvar.call(obj.prop));

////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Question 6. Events Handling');
document.write('<ul><li class="item">Lorem ipsum dolor sit ametporibus veniam.</li><li class=\"item\">Alias autem corporis dolor dolorem eveniet impedtur voluptatem!</li><li class="item">Accusamus libero nostrum sequi, suscipitveniam. Architecto, fuga ipsa ipsum odit quo ut velit.</li> <li class="item">Ab architecto aspernatur cupiditate dolores eum, iure provident quo unde!</li><li class="item">Beatae culpa dolorem est illum expedita ipsam possimus, quis sed vero voluptas voluptatibus!</li><li class="item">Ad cum eius et harum illo ipsum laborum magnam incidunt quasi.</li><li class="item">Alias amet, assumenda atque beatae cumque distinctio ducimus ex exercitationem fugiat ipsam, iure labore!</li><li class="item">Aperiam ea enim eveniet iste magnam nesciunt ratione sed, tempore veniam! Dolorum ea ipsam iusto modi, pariatur ut.</li><li class="item">A accusantium, aperiam, at autem consequatur consequuntur corporis cum debitis dicta earum eius enim eum eveniet ex exercitationem laudantium.</li><li class="item">Beatae modi praesentium voluptatem. Ad asperiores minus necessitatibus nesciunt officiis recusandae tenetur!</li></ul>');

//Чтобы работало нужно в цикле вместо var использовать let (вопрос относится к теме замыканий - closures )
var items = document.querySelectorAll('.item');
/*
for (let i = 0, max = items.length; i < max; i++) {
    var element = items[i];
    element.addEventListener('click', function () {
        console.log("You clicked on element number: #" + i);
    });
}
 */
for (let i = 0, max = items.length; i < max; i++) {
    var element = items[i];
    element.addEventListener('click', (function (n) {
        return function() {
            console.log("You clicked on element number: #" + n);
        }
    })(i));
}

////////////////////////////////////////////////////////////////////////////////////////////////////
page.title('Question 7');

var arr = ['1', '2', '3'];
console.log(arr.map(parseFloat));
console.log(arr.map(parseInt));
console.log(arr.map(function(str) {
    return parseInt(str,10);
}));

console.log(arr.map(unary(parseInt)));

function unary(fn) {
    console.assert(typeof fn === 'function');
    return function (arg) {
        return fn.call(null, arg);
    }
}