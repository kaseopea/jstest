var scope = new Scope();

it("ends the digest when the last watch is clean", function() {
  scope.array = _.range(100);
  scope.watchExecutions = 0;

  _.times(100, function(i) {
  scope.$watch(
    function(scope) {
      scope.watchExecutions++;
      return scope.array[i];
    }, function(newValue, oldValue, scope) {});
  });

  scope.$digest();
  assert.equal(200, scope.watchExecutions);

  scope.array[0] = 420;
  scope.$digest();
  assert.equal(301, scope.watchExecutions);
});


it("correctly handles NaNs", function() {
  scope.number = 0/0; // NaN
  scope.counter = 0;
  scope.$watch(
    function(scope) { return scope.number; },
    function(newValue, oldValue, scope) {
      scope.counter++;
    }
  );
  scope.$digest();
  assert.equal(1, scope.counter);
  scope.$digest();
  assert.equal(1, scope.counter);
});


it("executes $eval'ed function and returns result", function() {
  scope.aValue = 42;
  var result = scope.$eval(function(scope) {
    return scope.aValue;
  });
  assert.equal(42, result);
});

it("passes the second $eval argument straight through", function() {
  scope.aValue = 42;
  var result = scope.$eval(function(scope, arg) {
    return scope.aValue + arg;
  }, 2);
  assert.equal(44, result);
});


it("executes $apply'ed function and starts the digest", function() {
  scope.aValue = 'someValue';
  scope.counter = 0;
  scope.$watch(
    function(scope) {
      return scope.aValue;
    },
    function(newValue, oldValue, scope) {
      scope.counter++;
    }
  );
  scope.$digest();
  assert.equal(1, scope.counter);

  scope.$apply(function(scope) {
    scope.aValue = 'someOtherValue';
  });
  assert.equal(2, scope.counter);
});


it("executes $evalAsync'ed functions even when not dirty", function() {
  scope.aValue = [1, 2, 3];
  scope.asyncEvaluatedTimes = 0;
  scope.$watch(
    function(scope) {
      if (scope.asyncEvaluatedTimes < 2) {
        scope.$evalAsync(function(scope) {
          scope.asyncEvaluatedTimes++;
        });
      }
      return scope.aValue;
  },
  function(newValue, oldValue, scope) { }
  );
  scope.$digest();
  assert.equal(2, scope.asyncEvaluatedTimes);
});
