var scope = new Scope();

scope.someVal = 10;
scope.someOtherVal = 20;
scope.counter1 = 0;
scope.counter2 = 0;
scope.array = _.range(100);
scope.watchExecutions = 0;

scope.$watch(function (scope) {
  scope.watchExecutions++;
  return scope.someVal;
}, function() {
  console.log('listener 1 fired');
  scope.counter1++;
});

scope.$watch(function (scope) {
  scope.watchExecutions++;
  return scope.someOtherVal;
}, function () {
  console.log('listener 2 fired');
  scope.counter2++;
});

// _.times(100, function (i) {
//   scope.$watch(function (scope) {
//     scope.watchExecutions++;
//     return scope.array[i];
//   }, function () {})
// })

scope.$digest();
console.log(scope.watchExecutions);

scope.$digest();
scope.$digest();
scope.$digest();

scope.someVal = 33;
scope.$digest();


scope.asyncEvaluated = false;
scope.asyncEvaluatedImmediately = false;

scope.$watch(
  function(scope) {
    return scope.aValue;
  }, function(newValue, oldValue, scope) {
    scope.$evalAsync(function(scope) {
      scope.asyncEvaluated = true;
    });
    scope.asyncEvaluatedImmediately = scope.asyncEvaluated;
  }
);

scope.$watchGroup([
function(scope) { return scope.aValue; },
function(scope) { return scope.anotherValue; }
], function(newValues, oldValues, scope) {
gotNewValues = newValues;
gotOldValues = oldValues;
});
scope.$digest();
