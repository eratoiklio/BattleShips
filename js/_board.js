// var boat = require("./_boat.js")

class Board {

    constructor(tabOfBoats)
    {
        this.tabOfBoats =tabOfBoats;
        var boardThis = this;
        this.nrX=""
        $("#board").droppable({
            drop: function(event, ui) {
                var thisPos = $(ui.draggable).offset();
                var boardPos = $("#board").offset();
                var x = thisPos.left - boardPos.left;
                var y = thisPos.top - boardPos.top;
                // console.log("x: " + x + " y: " + y);
                boardThis.snap(ui.draggable, x, y);
            }

        });
    }
    shouldRevert(divBout)
    {
        console.log($(divBout).css("top"));
        console.log($(divBout).css("left"));
        console.log($(divBout).hasClass("rotated"));
        console.log($(divBout).data("boat").id);
        return false;

    }
    snap(element, x, y)
    {
        let snapY = y - (y % 64);
        let snapX = x - (x % 64);
        $(element).css({top: snapY, left: snapX});
    }
}
export default Board;
