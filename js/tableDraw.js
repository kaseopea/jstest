var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function rowHeights(rows) {
//     console.log(rows);
    return rows.map(function(row){
        return row.reduce(function(max,cell){
           return Math.max(max,cell.minHeight()); 
        },0);
    });
}

function colWidth(rows) {
    return rows[0].map(function(_,i) {
        return rows.reduce( function(max,row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
}

function drawTable(rows) {
    //console.log(rows);
    var heights = rowHeights(rows);
    var widths = colWidth(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function(block) {
            return block[lineNo];
        }).join(" ");
    }

    function drawRow(row,rowNum) {
        var blocks = row.map(function(cell,colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
        });

        return blocks[0].map(function(_,lineNo){
            return drawLine(blocks,lineNo);
        }).join("\n");

    }
    return rows.map(drawRow).join("\n");
}



/////////////////////////////////////////////////////////////////
function repeat(string, times) {
    var result = "";
    for ( var i = 0; i < times; i++) {
        result += string;
    }
    return result;
}

function TextCell(text) {
    console.log("Text: " + text + " Type: " + typeof text);
    this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width,line) {
        return Math.max(width, line.length);
    }, 0);
}
TextCell.prototype.minHeight = function() {
    return this.text.length;
}

TextCell.prototype.draw = function(width, heights) {
    var result = [];
    for (var i = 0; i < heights; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var rows = [];
for (var i = 0; i < 5; i++) {
    var row = [];
    for (var j = 0; j < 5; j++) {
        if ((j + i) % 2 == 0)
            row.push(new TextCell("##"));
        else
            row.push(new TextCell("  "));
    }
    rows.push(row);
}

// console.log(drawTable(rows));

///////////////////////////////////////////////////////////////////////////////////////////////
function UnderlinedCell(inner){
    this.inner = inner;
}

UnderlinedCell.prototype.minWidth = function() {
    return this.inner.minWidth();
}

UnderlinedCell.prototype.minHeight = function() {
    return this.inner.minHeight() + 1;
}

UnderlinedCell.prototype.draw = function(width, height){
    return this.inner.draw(width, height - 1).concat([repeat("-", width)]);
}

/////////////////////////////////////////////////////////////////////////////////////////////
function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name) {
        return new UnderlinedCell(new TextCell(name));
    });
    var result;
//     var i = 0;

    var body = data.map(function(row,i) {
//         console.log("Step i: " + i);
//         console.log(row);
//         console.log("keys length: " + keys.length);
        return keys.map(function(name) {
//             console.log("Step j: " + j);
//             console.log(typeof name + " — " + name);          
//             console.log(row);
//             console.log(keys);
            var value = row[name];
//             console.log(value);
           return new TextCell(String(row[name])); 
        });
    });

//     console.log(headers);
    result = [headers].concat(body);
//     console.log(result);
    return result;
}

// console.log(drawTable(dataTable(MOUNTAINS)));

/////////////////////////////////////////////////////////////////////////////////////////////////////////
var pile = {
    element: ["скорлупа", "кожура", "червяк"],
    get height() {
        return this.element.length;
    },
    set height(value) {
        console.log( "Игнорируем попытку задать высоту", value);
    }
}

// console.log(pile.height);
// pile.height = 100;

/////////////////////////////////////////////////////////////////////////////////////////////////////////

Object.defineProperty(TextCell.prototype, "heightProp", {
    get: function() { return this.text.length;}
});

var cell = new TextCell("да\nну\nну");
// console.log(cell.heightProp);

cell.heightProp = 100;
// console.log(cell.heightProp);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
function RTextCell(text) {
    TextCell.call(this.text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function (width, height) {
    var result = [];

    for ( var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(repeat(" ", width - line.length + line));
    }
    return result;
};
function dataTable2(data) {
    var keys = Object.keys(data[0]); 
    var headers = keys.map(function(name) {
        return new UnderlinedCell(new TextCell(name));
    });
    var result;

//     console.log(keys.length);
//     console.log(data.length);

    var body = data.map(function(row, i) {
//         console.log("Step i: " + i);
//         console.log(row);
//         console.log("keys length: " + keys.length);
        return keys.map(function(name, j) {
            console.log("Step j: " + j);
            console.log(typeof name + " — " + name);          
//             console.log(row);
//             console.log(keys);
            var value = String(row[name]);
            console.log("Value: " + value + " " + typeof value);
            if (typeof row[name] == "number") {
                return new RTextCell(value); 
            } else {
                return new TextCell(value); 
            };
        },0);
        
    },0);
    result = [headers].concat(body);
    return result;
}
console.log(drawTable(dataTable(MOUNTAINS)));
console.log("--------------------------------------------------------------------------------");
console.log(drawTable(dataTable2(MOUNTAINS)));