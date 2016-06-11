////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Write a function, funcCaller, that takes a func (a function) and an arg (any data type).\n' +
    'The function returns the func called with arg(as an argument).');

var funcCaller = function ( func, arg ) {
    return func(arg);
};

////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Write a function, firstVal, that takes an array, arr, and a function, func, and calls func with\n' +
    'the first index of the arr, the index # and the whole array.');
var firstVal = function ( arr, func) {
    return func(arr[0], 0, arr);
};


////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Change firstVal to work not only with arrays but also objects. Since objects are not ordered,\n' +
    'you can use any key-value pair on the object.');

var firstVal = function ( list, func) {
    if(Array.isArray(list)) {
        func(arr[0], 0, arr);
    } else {
        var propArr = Object.keys(list);
        func(list(propArr[0]), propArr[0], list);
    }

};
////////////////////////////////////////////////////////////////////////////////////////////////////
titler('Extra Credit] Write a function, once, (see: http://underscorejs.org/#once) that takes a function and returns\n' +
    'a version of that function which can only be called once. [Hint: you need a closure] You probably don\'t want\n' +
    'to be able to double charge someone\'s credit card.');

var chargeCreditCard = function(num, price){
    //charges credit card for a certain price
    console.log('Wooohooo!!!');
    console.log(num);
    console.log(price);
};
var once = function (func) {
    var executed = false;
    var exec = function (num,price) {
        if (!executed) {
            func(num,price);
            executed = true;
        } else {
            executed = false;
        }

    }
    return exec;
}
var processPaymentOnce = once(chargeCreditCard);
processPaymentOnce(123456789012, 200);
processPaymentOnce(999777889018, 500);