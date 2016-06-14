////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Machine = function(power) {
  this._enabled = false;
  this._power = power;

  var self = this;

  this.enable = function () {
    self._enabled = true;
    console.log("Прибор включен!");
  }

  this.disable = function () {
    self._enabled = false;
    console.log("Прибор выключен!");
  }

  this.isEnabled = function () {
    return self._enabled;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
page.title("Класс CoffeeMachine");
var CoffeeMachine = function(power, capacity){
  Machine.apply(this, arguments);

  var WATER_HEAT_CAPACITY = 4200;

  var water_Amount = 0;
  var timerID;
  var self = this;
  var runningNow = false;

  console.log("Создана кофеварка с мощностью " + power + " Ватт.");

  var parentEnable = this.enable;
  this.enable = function() {
    parentEnable();
    this.run();
  }

  //Время готовки кофе
  function getBoilTime() {
    // console.log(typeof waterAmount);
    // console.log(waterAmount * WATER_HEAT_CAPACITY * 80 / power);
    return water_Amount * WATER_HEAT_CAPACITY * 80 / power;
  };

  //Получить мощность кофемашины
  this.power = function() {
    return power;
  };

  //Работа с уровнем воды в кофемашине
  this.waterAmount = function (amount) {
    if(arguments.length) {
      //setter
      if (amount < 0) {
        throw new Error("Значение должно быть положительным.");
      } else if (amount > capacity) {
        throw new Error("Значение должно быть меньше " +  capacity + " мл.");
      } else {
        water_Amount = amount;
        // console.log("Количество воды установлено в значение " + water_Amount + " мл.");
      }
    } else {
      //getter
      return water_Amount;
    };
  };

  //Добавление воды
  this.addWater = function (amount) {
    //capacity
    if (arguments.length) {
      if (amount < 0) throw new Error("Значение воды должно быть положительным.");
      if ((amount + water_Amount) > capacity) {
        water_Amount = capacity;
        console.error("Кофемашина залита водой полностью. Больше не помещается)");
      } else {
        water_Amount += amount;
      }
    }
  };

  function onReady() {
    var time = Math.round(getBoilTime()/60);
    console.log("********** Кофе готов за " + time + " сек! **********");
  };
  this.setOnReady = function (callBack) {
    onReady = callBack;
    // console.log(onReady);
  };

  this.run = function() {
    timerID = setTimeout(function() {
      onReady();
      self.stop();
    }, getBoilTime());
  };

  this.isRunning = function () {
    return !!timerID;
  }

  this.stop = function() {
    clearTimeout(timerID);
    console.log("Кафемашина остановила свою работу!");
  };
};

var machine = new CoffeeMachine(18000, 400);
// console.log("Мощность кофемашины: " + machine.power() + " Ватт");
// console.log("Начальное количество воды в кофеварке: " + machine.waterAmount() + " мл");
// console.log("Машина запущена? " + machine.isRunning());
machine.addWater(300);
console.log("Начальное количество воды в кофеварке: " + machine.waterAmount() + " мл");
// machine.enable();
machine.run();
// console.log("Машина включена? " + machine.isEnabled());
// machine.stop();

page.end();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.enable();
coffeeMachine.waterAmount(150);
// console.log("Машина включена?: " + coffeeMachine.isEnabled());
coffeeMachine.setOnReady(function() {
  var amount = coffeeMachine.waterAmount();
  console.log( '>>>>>> Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});

coffeeMachine.run();
coffeeMachine.disable();
// console.log("Машина включена?: " + coffeeMachine.isEnabled());
page.end();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Fridge = function (power, temperature) {
    Machine.apply(this, arguments);
};

var fridge = new Fridge(16000, 100);
fridge.enable();
