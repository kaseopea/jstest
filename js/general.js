var Template = function() {
    return {
        title: function (title) {
            this.divider();
            console.log("[Task]");
            console.log(title);
            console.log('\n');
            //this.divider();
        },
        divider: function () {

            console.log('**************************************************************************');
        },
        end: function () {
            console.log('__________________________________________________________________________');
            console.log('\n\n');
        }
    }
};
var page = Template();

var JSConsole = function(elementId) {
  var self = this;
  var cons = $('#' + elementId);

  cons.addClass('jsconsole');
  cons.append('<div class="jsconsole-content"></div>');
  cons.append('<div class="jsconsole-service"></div>');

  var services = $('#' + elementId + ' .jsconsole-service');
  var content = $('#' + elementId + ' .jsconsole-content');

  // Clear console link
  services.append('<a href="#" id="' + elementId + '_clear">Clear console</a>');
  var clearBtn = $('#' + elementId + '_clear');
  clearBtn.on('click', function() {
    content.empty();
  });

  function htmlEntities(str) {
    return String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  return {
    write: function(text) {
      var result = htmlEntities(text.toString());
      content.append('<p class="line">' + result + '</p>');
      content.scrollTop = content.scrollHeight;
      // return '<pre>' + result + '</pre>';
    },
    success: function(text) {
      var result = htmlEntities(text.toString());
      content.append('<p class="success">' + result + '</p>');
    },
    warn: function(text) {
      var result = htmlEntities(text.toString());
      content.append('<p class="warn">' + result + '</p>');
    },
    hr: function() {
      content.append('<p class="hr">–</p>');
    },
    error: function(text) {
      var result = htmlEntities(text.toString());
      content.append('<p class="error">' + result + '</p>');
    }
  }


}

// var cons1 = new JSConsole('console1');
