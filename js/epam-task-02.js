// Task 1
//
// Создайте 3 переменные   x = 6, y = 15, и z = 4:
// Выполните и отобразите результат следующих операций для этих переменных:
// · x += y - x++ * z ;
// · z = -- x - y * 5 ;
// · y /= x + 5 % z ;
// · z = x++ + y * 5 ;
// · x = y - x++ * z ;

var x = 6;
var y = 15;
var z = 4;
// console.log(x += y - x++ * z );
// console.log( z = -- x - y * 5 );
// console.log( y /= x + 5 % z );
// console.log( z = x++ + y * 5 );
// console.log( x = y - x++ * z );

// page.end();


// Task 2
//
// Вычислите среднее арифметическое трех целочисленных значений и выведите его на экран.
// console.log("Среднее арифметическое трех целочисленных значений");
// console.log( ( x + y + z ) / 3 );
// page.end();


// Task 3
//
// Напишите программу расчета объема - V и площади поверхности - S цилиндра.
// Объем V цилиндра радиусом - r и высотой – h, вычисляется по формуле: V = πr 2 h.
// Площадь S поверхности цилиндра вычисляется по формуле: S = 2π rh + 2π r 2 = 2π r (r+ h).
// Результаты расчетов выведите на экран.

var cylinderVolume = function (radius, height) {
    return Math.PI * Math.pow(radius, 2) * height;
}

var cylinderSurfaceArea = function (radius, height) {
  //2 π r(h+ r)
  return 2 * Math.PI * radius * (radius + height) ;
}
//Tests
// console.log("Объем цилиндра: " + cylinderVolume(1,2));
// console.log("Площадь поверхности: " + cylinderSurfaceArea(1,2));
// page.end();


//
// task 1
//
// Дано два числа A и B где (A<B).
// Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В.
// Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.

var sumRange = function (start, end) {
  var sum = 0;
  for ( var i = start; i <= end; i++) {
    sum += i;
  }
  // console.log(sum);
  return "Сумма чисeл в диапазоне [" + start + ".." + end + "] - " + sum;
}

var oddNumbersRange = function (start, end) {
  var numbers = [];
  var first = ( start % 2 == 0 ) ? (start + 1) : (start);
  for ( var i = first; i <= end; i += 2) {
    numbers.push(i);
  }
  return "Нечетные числа в диапазоне [" + start + ".." + end + "] - " + numbers.toString();
}

// console.log(sumRange(10,20));
// console.log(oddNumbersRange(10,20));
// page.end();


// Task 2
// Напишите программу, которая будет рассчитывать и выводить на экран количество возможных вариантов доставки товара. Для решения задачи, используйте факториал N!, рассчитываемый с помощью цикла do-while .
//
var possibleDeliveryOptions = function (number) {
  var factorial = 1;
  var counter = number;
  do {
      if (counter == 0) {
          break;
      }
      factorial *= counter;
      counter -= 1;
  }
  while (counter > 0);
  return factorial;
}

// console.log("Количество возможных вариантов доставки товара: " + possibleDeliveryOptions(5));
// page.end();

// Task 3
// Используя циклы нарисуйте в браузере с помощью пробелов (&nbsp) и звездочек (*):
// · Прямоугольник
// · Прямоугольный треугольник
// · Равносторонний треугольник
// · Ромб.

var drawRectangle = function (width, height) {
  var output = '';
  for ( var i = 0; i < width; i++) {
    for ( var j = 0; j < height; j++) {
      if ( insideRectangle(i,j,width, height)) {
        output += "*";
      } else {
        output += " ";
      }
    }
    output += "\n";
  }
  return output;

  function insideRectangle(i,j,width, height) {
    return i == 0 || i == width - 1 || j == 0 || j == height - 1;
  }
}

var triangleEqual = function (size) {
  var output = '';
  for( var i = (size / 2) + 1; i <= size; i++ ) {
    for( var j = 0; j <= i; j++) {
      if ( j < size - i + 1) {
        output += " ";
      } else {
        output += "*";
      }
    }
    output += "\n";
  }
  return output;
}

var triangleRight = function (size) {
  var count = 1;
  var output = '';
  for ( var i = 1; i <= size; i++) {
    for ( var j = 1; j <= count; j++ ) {
      output += "*";
    }
    output += "\n";
    count++;
  }
  return output;
}

var rhombus = function (size) {
  var output = '';
  var middle = Math.floor(size / 2);
  for( var i = -middle; i <= middle; i++) {
    // console.log(i);
    var stars = size - (Math.abs(i)*2);
    // console.log(stars);
    output += renderLine(stars, size);
  }

  function renderLine ( stars, size ) {
    var sides = Math.floor((size - stars) / 2);
    var output = '';

    output += renderSide(sides);
    output += renderStar(stars);
    output += renderSide(sides);
    // console.log(output);
    return output + "\n";

    function renderStar(stars) {
      var output = '';
      for ( var i = 0; i < stars; i++ ) {
        output += "*";
      }
      return output;
    }

    function renderSide (size) {
      var output = '';
      for ( var i = 0; i < size; i++ ) {
        output += " ";
      }
      return output;
    }
  }
  return output;
}

// console.log(drawRectangle(10,20));
// console.log(triangleEqual(21));
// console.log(triangleRight(10));
// console.log(rhombus(21));
// page.end();


// Task 1
// Требуется: Создать массив размерностью N элементов, заполнить его произвольными целыми значениями. Вывести наибольшее значение массива, наименьшее значение массива, общую сумму элементов, среднее арифметическое всех элементов, вывести все нечетные значения.

var RandomArray = function (size) {
  var array = [];
  for (var i = 0 ; i < size; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return {
    render: function() {
      return array;
    },
    minimum: function () {
      return Math.min.apply(Math, array);
    },
    maximum: function () {
      return Math.max.apply(Math, array);
    },
    sum: function () {
      return array.reduce( function (a,b) {
        return a + b;
      });
    },
    arithmeticMean: function () {
      return array.reduce( function (a,b) {
        return a + b;
      }) / array.length;
    },
    oddNumbers: function () {
      var odds = [];
      for( var i = 0; i < array.length; i ++) {
        if (array[i] % 2 != 0) {
          odds.push(array[i]);
        }
      }
      return odds;
    }

  };
}

var myArray = new RandomArray(12);
// console.log("Случайный массив: ");
// console.log(myArray.render());
// console.log("Минимальное значение: " + myArray.minimum());
// console.log("Максимальное значение: " + myArray.maximum());
// console.log("Сумма элементов: " + myArray.sum());
// console.log("Среднее арифметическое всех элементов: " + myArray.arithmeticMean());
// console.log("Нечетные номера: " + myArray.oddNumbers().toString());
// page.end();



// Tasks 2
// Требуется: Создать двумерный массив элементов размерностью 5х5 и заполнить его произвольными целочисленными значениями.  По главной диагонали все числа со знаком (-) заменить на 0, а числа со знаком (+) на число 1.

var multiArray = function(size) {
  var array = [];
  for ( var i = 0; i < size; i++ ) {
    var arr = [];
    for ( var j = 0; j < size; j++) {
      arr.push(Math.round(-10 + Math.random() * 20));
    }
    array.push(arr);
  }
  return array;
}

function processArray(array) {
  var arr = array;
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (j == i) {
          arr[i][j] = (array[i][j] <= 0) ?  0 : 1;
          break;
        }
      }
    }
    return arr;
}

var array = multiArray(5);
console.log(array);
console.log(processArray(array));

page.end();
