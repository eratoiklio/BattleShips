// var boat = require("./_boat.js")

class Board {

    constructor()
    {
        var boardThis = this;
        $("#board").droppable({
            drop: function(event, ui) {
                var thisPos = $(ui.draggable).offset();
                var boardPos = $("#board").offset();
                var x = thisPos.left - boardPos.left;
                var y = thisPos.top - boardPos.top;
                console.log("x: " + x + " y: " + y);
                boardThis.snap(ui.draggable, x, y);
            }
        });
    }
    snap(element, x, y)
    {
        let snapY = y - (y % 64);
        let snapX = x - (x % 64);
        $(element).css({top: snapY, left: snapX});
    }
}
export default Board;
