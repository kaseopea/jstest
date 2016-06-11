/** -----------------------------------
Сумма диапазонов
 ----------------------------------- */

//console.log(sum(range(1,10)));
//divider();
//console.log(sum(range2(20,0,-5)));
 
function range(num1, num2) {
	var start = (num1 < num2) ? num1 : num2;
	var end = (num1 < num2) ? num2 : num1;
	var output = [];
	
	for ( var i = start; i<=end; i++ ) {
		output.push(i);
	}
	console.log(output);
	return output;
}

function range2(num1, num2, step) {
	var start = num1;
	var end = num2;
	var output = [];
	
	if (step == null) step = 1;
	
	if (step > 0) {
		for ( var i = start; i <= end; i+=step)
			output.push(i);
		
	} else {
		for ( var i = start; i >= end; i+=step)
			output.push(i);
	}
	
	console.log(output);
	return output;
}

function sum(numbers) {
	var sum = 0;
	
	for (var i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}
page.divider();


/** -----------------------------------
Реверс массива
 ----------------------------------- */
var testarr1 = ['1', '2', '3', '4', '5'];
var testarr2 = ['A', 'B', 'C', 'D', 'E'];
//console.log(testarr1);
//console.log(reverseArray(testarr1));
//console.log(reverseArrayInPlace(testarr1));
//divider();
//console.log(testarr1);
//console.log(reverseArray(testarr2));
//console.log(reverseArrayInPlace(testarr2));
//divider();

function reverseArray(arr) {
	var reversed = [];
	for (var i = arr.length-1; i >= 0; i--) {
		reversed.push(arr[i]);
	}
	return reversed;
}

function reverseArrayInPlace(arr) {
	for ( var i = 0; i < Math.floor(arr.length/2); i++) {
		var old = arr[i];
        arr[i] = arr[arr.length - 1 -i];
        arr[arr.length - 1 -i] = old;
	}
	return arr;
}

/** -----------------------------------
 Списки
 ----------------------------------- */
page.divider();
var list = {
    value:1,
    rest: {
        value:2,
        rest: {
            value: 3,
            rest: {
                value: 4,
                rest: {
                    value:5,
                    rest: null
                }
            }
        }
    }
}
var arr1 = ['1', '2', '3', '4', '5'];
var arr2 = ['A', 'B', 'C', 'D', 'E'];

//console.log(arrayToList(arr1));
//console.log(arrayToList(arr2));

// console.log(listToArray(list));
// divider();
// console.log(prepend(20, list));
// divider();
// console.log(nth(list, 2));
// divider();

function arrayToList(arr) {
    var list = null;
    for ( var i = arr.length - 1; i >=0 ; i--) {
        list = { value: arr[i], rest: list };
    }
    return list;
}

function listToArray(list) {
    var arr = [];
    var i = 1;
    for ( var node = list; node; node = node.rest ) {
        arr.push(node.value);
        i++;
    }
    return arr;
}

function prepend(value, list) {
    return { value: value, rest: list};
}

function nth(list, n) {
    // Написать рекурсивную версию
    if(!list) return undefined;
    else if ( n == 0 ) return list.value;
    else return nth(list.rest, n - 1);
}


/** -----------------------------------
 Глубокое сравнение
 ----------------------------------- */
var obj = {
	here: {is: "an"},
	object: 2
};

//tests
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

//
console.log(Object.keys(obj));

//
function deepEqual( obj1, obj2) {
	var equal;
	return equal;
}