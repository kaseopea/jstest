var scope = new Scope();

scope.someVal = 10;
scope.someOtherVal = 20;
scope.counter1 = 0;
scope.counter2 = 0;

scope.$watch(function (scope) {
  return scope.someVal;
}, function() {
  console.log('listener 1 fired');
  scope.counter1++;
});

scope.$watch(function (scope) {
  return scope.someOtherVal;
}, function () {
  console.log('listener 2 fired');
  scope.counter2++;
});

scope.$digest();
scope.$digest();
scope.$digest();
scope.$digest();

scope.someVal = 33;
scope.$digest();
