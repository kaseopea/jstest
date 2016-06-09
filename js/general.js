/**
 * Created by vitalyrusov on 23.03.16.
 */
function divider() {
    console.log('******************************************************************************************************************************');
}
function titler(text) {
    var words = text.split(' ');
    var line = '';
    var countW = 0;
    var wordsPerLine = 20;
    console.log("\n\n");
    divider();
    for ( var i = 0; i < words.length; i++) {
        line += words[i].trim() + ' ';
        if (words[i].trim() == '\n') countW = 0;
        if (countW == wordsPerLine) {
            line += '\n';
            countW = 0;
        }
        countW++;
    }
    console.log("Task > ");
    console.log(text);
    divider();
}