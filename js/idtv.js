//Fibonachi numbers
function calcFib(x) {
    if (!calcFib.cache[x]) {
        if (x > 1) {
            calcFib.cache[x] = calcFib(x - 1) + calcFib(x - 2);

        } else {
            calcFib.cache[x] = x;
        }
    }

    return calcFib.cache[x];
}
calcFib.cache = {};

for ( var i = 0; i < 450; i++) {
    console.log( (i + 1) + '. Fib = ' + calcFib(i));
}