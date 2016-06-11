/**
 * Created by vitalyrusov on 25.03.16.
 */
page.title('Считаем бобы');


countMyChar('My father is a fucker in the circus', 'a');

function countMyChar(stroka, findchar) {
	var count = 0;
	for( var i = 0; i < stroka.length - 1; i++ ) {
		if (stroka.charAt(i) === findchar) {
			count++;
		}
	}
	console.log(count);
}

page.divider();