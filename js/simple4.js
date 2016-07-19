var foo = 'bar';

function bar() {
  var foo = 'baz';

  function baz(foo) {
    foo = 'bam-bam';
    bam = 'yay';
  }

  baz();
  console.log(foo);
}
console.group('Foo');
bar();
console.log(foo);
console.log(bam);
baz();
console.groupEnd();
