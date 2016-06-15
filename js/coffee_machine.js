////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Machine = function (power) {
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
var CoffeeMachine = function (power, capacity) {
    Machine.apply(this, arguments);

    var WATER_HEAT_CAPACITY = 4200;

    var water_Amount = 0;
    var timerID;
    var self = this;


    console.log("Создана кофеварка с мощностью " + power + " Ватт.");

    //Время готовки кофе
    function getBoilTime() {
        // console.log(typeof waterAmount);
        // console.log(waterAmount * WATER_HEAT_CAPACITY * 80 / power);
        return water_Amount * WATER_HEAT_CAPACITY * 80 / power;
    };

    //Получить мощность кофемашины
    this.power = function () {
        return power;
    };

    //Работа с уровнем воды в кофемашине
    this.waterAmount = function (amount) {
        if (arguments.length) {
            //setter
            if (amount < 0) {
                throw new Error("Значение должно быть положительным.");
            } else if (amount > capacity) {
                throw new Error("Значение должно быть меньше " + capacity + " мл.");
            } else {
                water_Amount = amount;
                // console.log("Количество воды установлено в значение " + water_Amount + " мл.");
            }
        } else {
            //getter
            return water_Amount;
        }
        ;
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
        var time = Math.round(getBoilTime() / 60);
        console.log("********** Кофе готов за " + time + " сек! **********");
    };
    this.setOnReady = function (callBack) {
        onReady = callBack;
        // console.log(onReady);
    };

    //Запуск
    this.run = function () {
        if (this._enabled) {
            timerID = setTimeout(function () {
                onReady();
                self.stop();
            }, getBoilTime());
        } else {
            console.error("Сначала нужно включить прибор");
        }

    };

    this.isRunning = function () {
        return !!timerID;
    }

    var parentDisable = this.disable;
    this.disable = function () {
        parentDisable.call(this);
        clearInterval(timerID);
    };

    this.stop = function () {
        clearTimeout(timerID);
        console.log("Кoфемашина остановила свою работу!");
    };
};

var machine = new CoffeeMachine(18000, 400);
// console.log("Мощность кофемашины: " + machine.power() + " Ватт");
// console.log("Начальное количество воды в кофеварке: " + machine.waterAmount() + " мл");
// console.log("Машина запущена? " + machine.isRunning());
machine.addWater(300);
console.log("Начальное количество воды в кофеварке: " + machine.waterAmount() + " мл");
machine.enable();
machine.run();
// console.log("Машина включена? " + machine.isEnabled());
machine.stop();

page.end();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.enable();
coffeeMachine.waterAmount(150);
// console.log("Машина включена?: " + coffeeMachine.isEnabled());
coffeeMachine.setOnReady(function () {
    var amount = coffeeMachine.waterAmount();
    console.log('>>>>>> Готов кофе: ' + amount + 'мл'); // Кофе готов: 150 мл
});

coffeeMachine.run();
coffeeMachine.disable();
// console.log("Машина включена?: " + coffeeMachine.isEnabled());
page.end();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Fridge = function (power, temperature) {
    Machine.apply(this, arguments);
    var MAX_CAPACITY = Math.round(power / 100);
    var food = [];

    this.addFood = function () {
        if (this._enabled) {
            for (var i = 0; i < arguments.length; i++) {
                if (food.length < MAX_CAPACITY) {
                    food.push(arguments[i]);
                } else {
                    //throw new Error("Все не влезает!");
                    console.error("Холодильник заполнен! Все не влезает!");
                }
            }
        } else throw new Error("Холодильник выключен! Не получится добавить еду!");

    };

    this.getFood = function () {
        return food.slice();
    }

    this.filterFood = function (func) {
      var result = [];
        if (food.length > 0) {
          if((typeof food[0]) == 'object') {
            for(var item in food) {
              if(func(food[item])) result.push(food[item]);
            }
          } else {
            result = food.filter(func);
          }

          return result;
        };

    };

    var parentDisable = this.disable;
    this.disable = function () {
      if(food.length == 0) {
        parentDisable();
      } else console.log("Нельзя выключить, в холодильнике есть еда");
    }

    this.removeFood = function (item) {
        if (food.length > 0) {
          if((typeof food[0]) == 'object') {
            for(var i = 0; i < food.length; i++) {
              if(food[i].title === item) {
                delete food.splice(i,1);
                break;
              }
            }
          } else {
            var foundIndex = food.indexOf(item);
            if (foundIndex != -1) food.splice(foundIndex, 1);
          }
        }
        // console.log(typeof food[0]);

    };
};

/*var fridge = new Fridge(500, 100);
 fridge.enable();
 //fridge.addFood("котлета");
 fridge.addFood("сок", "варенье");
 fridge.addFood("мясо", "рыба");
 fridge.addFood("гамбургер", "кола");
 //console.log(fridge.getFood());


 var fridgeFood = fridge.getFood();
 console.log( fridgeFood ); // котлета, сок, варенье
 // добавление элементов не влияет на еду в холодильнике
 fridgeFood.push("вилка", "ложка");
 console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье*/


var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});
console.log(fridge.getFood());

fridge.removeFood("нет такой еды"); // без эффекта
page.end();
// fridge.removeFood("сок"); // без эффекта

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});
console.log(dietItems);
dietItems.forEach(function(item) {
  console.log( item.title ); // сок, зелень
  fridge.removeFood(item.title);
});
console.log( fridge.getFood());
fridge.disable();
