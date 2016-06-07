// -----------------------------------------
// Task 1 Треугольник в цикле
// -----------------------------------------
var treeSize = 7;
var line = '';

//for (var line = "#"; line.length <= treeSize; line += "#") console.log(line);

// -----------------------------------------
// Task 2 FizzBuzz
// -----------------------------------------
var startNumber = 1;
var endNumber = 100;
var i, out;
for (i = startNumber; i<=endNumber; i++) {
    var out = '';
    
    if (i%3 == 0 ) out += 'Fizz';
    if (i%5 == 0) out += 'Buzz';
    //console.log(out || i);
}

// -----------------------------------------
// Task 3
// -----------------------------------------
var size_rows = 8;
var size_columns = 16;
var board = '';

for (var y = 0; y < size_rows; y++ ) {
    for (var x = 0; x < size_columns; x++ ) {
        if ((x+y)%2 == 0)
            board += ' ';
        else
            board += '*';
    }
    board += '\n';
}
console.log(board);