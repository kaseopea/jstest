/**
 * Created by vitalyrusov on 25.03.16.
 */
function showMessage(from, text) { // параметры from, text
    text = text || 'текст не передан';
    from = "** " + from + " **"; // здесь может быть сложный код оформления
    console.log(from + ': ' + text);
}

//showMessage('Маша', 'Привет!');
//showMessage('Маша');

divider();

function min(a,b) {
    //if (a>b) {
    //    console.log(b);
    //} else console.log(a);

    console.log((a<b) ? a:b);

}

min(2, 5);
min(3, -1);
min(1, 1);

divider();

function pow(x,n) {
    var res = x;
    for(var i=1;i<n;i++) res*=x;
    console.log(res);
}

pow(3, 2);
pow(3, 3);
pow(1, 100);