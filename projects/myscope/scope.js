// Steps
// 1. Register watchers
// 2. Make digest loop
// 3. Check if value has changed

function Scope() {
  this.$$watchers = [];
}

// init for watcherObj
function initWatcherObj() {}

// $watch metod
Scope.prototype.$watch = function (watchFunc, listenerFunc, equalValueFlag) {
  var _this = this;

  var watcherObj = {
    watcher: watchFunc,
    listener: listenerFunc || function () {},
    lastVal: initWatcherObj
  };
  _this.$$watchers.push(watcherObj);
};


// $digest method
Scope.prototype.$digest = function () {
  var _this = this;
  var newVal, oldVal;

  _.forEach(this.$$watchers, function (watcherObj) {
    newVal = watcherObj.watcher(_this);
    oldVal = watcherObj.lastVal;

    if (newVal !== oldVal) {
      watcherObj.lastVal = newVal;
      oldVal = (oldVal === initWatcherObj) ? newVal : oldVal;
      watcherObj.listener(newVal, oldVal, _this);
    }


  });

}
