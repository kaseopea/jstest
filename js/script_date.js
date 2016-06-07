/**
 * Created by vitalyrusov on 26.03.16.
 */
var now = new Date();
console.log(now);
console.log(now.getUTCHours() + ':' + now.getUTCMinutes());

var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
    for (var key in arr) arr[key]++;
}

function walkLength(arr) {
    for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
    var date = new Date();
    for (var i = 0; i < 1000; i++) f(arr);
    return new Date() - date;
}

// bench для каждого теста запустим много раз, чередуя
var timeIn = 0,
    timeLength = 0;
for (var i = 0; i < 100; i++) {
    timeIn += bench(walkIn);
    timeLength += bench(walkLength);
}
console.log( 'Время walkIn: ' + timeIn + 'мс' );
console.log( 'Время walkLength: ' + timeLength + 'мс' );