/**
 * Created by vitalyrusov on 23.03.16.
 */
titler('Алгоритм поиска простых чисел');

var range_start = 2;
var range_end = 10;
var i;

for ( i= range_start; i <= range_end; i++) {
    console.log('[[ ------ Step ' + i + ' ------ ]]');

    //check for simple number 2
    if (i == 2) {
        console.log('>>> Simple Number: ' + i);
        continue;
    } else {

        //other simple numbers
        var check_start = 2;
        var check_end = i;
        var j;
        var ifSimpleCounter = 0;

        for (j = check_start; j <= check_end; j++) {
            //console.log('[i:' + i + '][j:' + j + ']');
            if (i % j == 0) {
                ifSimpleCounter++;
            }
        }

        //console.log(ifSimpleCounter);

        if (ifSimpleCounter == 1) {
            console.log('>>> Simple Number: ' + i);
            //ifSimpleCounter = 0;
        }
    }
}

divider();

nextPrime:
    for (var i = 2; i <= 10; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        console.log( i ); // простое
    }