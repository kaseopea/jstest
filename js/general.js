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