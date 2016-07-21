// Steps
// 1. Register watchers
// 2. Make digest loop
// 3. Check if value has changed
// 4. Setting initial value for lastVal
// 5. Dirty Check
// 6. Digest while any watcher is dirty
// 7. TTL limit, infinit loop protection
// 8. Short-circuit optimization
// 9. Value-based optimization
// 10. Check for NaNs
// 11. Asyn Queue
// 12. Scope Phases
// 13. Post digest
// 14. Exceptions
// 15. Remove watcher
// 16. Watch group method

function Scope() {
    //watchers array
    this.$$watchers = [];

    // Short-circuit optimization
    this.$$lastDirtyWatch = null;

    // Async Queue
    this.$$asyncQueue = [];

    // Phases
    this.$$phase = null;

    // Post Digest
    this.$$postDigestQueue = [];
}

// init for watcherObj. It's always unique
function initWatcherObj() {}

// $watch metod
Scope.prototype.$watch = function(watchFunc, listenerFunc, equalValueFlag) {
    var _this = this;
    var watcherObj = {
        watcher: watchFunc,
        listener: listenerFunc || function() {},
        equalValueFlag: !!equalValueFlag,
        lastVal: initWatcherObj
    };
    this.$$watchers.unshift(watcherObj);
    this.$$lastDirtyWatch = null;

    // Watch destroyer
    return function(watcherObj) {
        var index = _.indexOf(_this.$$watchers, watcherObj);
        if (index >= 0) {
            _this.$$watchers.splice(index, 1);
            _this.$$lastDirtyWatch = null;
        }
    }
};

Scope.prototype.$digest = function() {
    var ttl = 10;
    var dirty;
    this.$$lastDirtyWatch = null;
    this.$beginPhase('$digest phase');
    do {
        //async
        while (this.$$asyncQueue.length) {
            try {
                var task = this.$$asyncQueue.shift();
                var context = task.scope;
                var exp = task.expression;
                context.$eval(exp);
            } catch (e) {
                console.error(e);
            }
        }

        dirty = this.$digestOnce();
        if ((dirty || this.$$asyncQueue.length) && !ttl) {
            throw 'Reached TTL limit';
        }
        ttl--;
    } while (dirty || this.$$asyncQueue.length);
    this.$endPhase();

    // Post digest
    while (this.$$postDigestQueue.length) {
        try {
            this.$$postDigestQueue.shift()();
        } catch (e) {
            console.error(e);
        }

    }
};

// $digest method
Scope.prototype.$digestOnce = function() {
    var _this = this;
    var newVal, oldVal, dirty;
    var dirty = false;

    _.forEachRight(this.$$watchers, function(watcherObj) {
        try {
            if (watcherObj) {
                newVal = watcherObj.watcher(_this);
                oldVal = watcherObj.lastVal;

                if (!_this.$areEqual(newVal, oldVal, watcherObj.equalValueFlag)) {
                    _this.$$lastDirtyWatch = watcherObj;
                    watcherObj.lastVal = (watcherObj.equalValueFlag) ? _.cloneDeep(newVal) : newVal;
                    oldVal = (oldVal === initWatcherObj) ? newVal : oldVal;
                    watcherObj.listener(newVal, oldVal, _this);
                    dirty = true;
                } else if (_this.$$lastDirtyWatch === watcherObj) {
                    return false;
                }
            }
        } catch (e) {
            console.error(e);
        }
    });
    return dirty;
};

// Are values equal method
Scope.prototype.$areEqual = function(newVal, oldVal, equalValueFlag) {
    if (equalValueFlag) {
        return _.isEqual(newVal, oldVal);
    } else {
        return newVal === oldVal || (_.isNumber(newVal) && _.isNumber(oldVal) && _.isNaN(newVal) && _.isNaN(oldVal));
    }
};

// Eval method
Scope.prototype.$eval = function(expression, args) {
    try {
        return expression(this, args);
    } catch (e) {
        console.error(e);
    }
};

// Apply method
Scope.prototype.$apply = function(expression) {
    try {
        this.$beginPhase('$apply phase');
        return this.$eval(expression);
    } finally {
        this.$endPhase();
        this.$digest();
    }
}

//Eval Async method
Scope.prototype.$evalAsync = function(expression) {
    var _this = this;
    if (!_this.$$phase && !_this.$$asyncQueue.length) {
        setTimeout(function() {
            if (_this.$$asyncQueue.length) {
                _this.$digest();
            }
        }, 0);
    }
    this.$$asyncQueue.push({
        scope: this,
        expression: expression
    });
}

// Phases method
Scope.prototype.$beginPhase = function(phaseName) {
    if (this.$$phase) {
        throw this.$$phase + ' is already running';
    }
    this.$$phase = phaseName;
}
Scope.prototype.$endPhase = function() {
    this.$$phase = null;
}

// Post digest method
Scope.prototype.$postDigest = function(expression) {
    this.$$postDigestQueue.push(expression);
}

// Watch Group method
// Scope.prototype.$watchGroup = function( watchersArray, listenerFunc) {
//   var _this = this;
//   _.forEach(watchersArray, function (watcherFunc) {
//     _this.$watch(watcherFunc, listenerFunc);
//   })
// }

Scope.prototype.$watchGroup = function(watchFns, listenerFn) {
    var self = this;
    var oldValues = new Array(watchFns.length);
    var newValues = new Array(watchFns.length);
    var changeReactionScheduled = false;
    var firstRun = true;

    if (watchFns.length === 0) {
        var shouldCall = true;
        self.$evalAsync(function() {
            if (shouldCall) {
                listenerFn(newValues, newValues, self);
            }
        });
        return function() {
            shouldCall = false;
        };
    }

    function watchGroupListener() {
        if (firstRun) {
            firstRun = false;
            listenerFn(newValues, newValues, self);
        } else {
            listenerFn(newValues, oldValues, self);
        }
        changeReactionScheduled = false;
    }
    var destroyFunctions = _.map(watchFns, function(watchFn, i) {
        return self.$watch(watchFn, function(newValue, oldValue) {
            newValues[i] = newValue;
            oldValues[i] = oldValue;
            if (!changeReactionScheduled) {
                changeReactionScheduled = true;
                self.$evalAsync(watchGroupListener);
            }
        });
    });
    return function() {
        _.forEach(destroyFunctions, function(destroyFunction) {
            destroyFunction();
        });
    };
};
