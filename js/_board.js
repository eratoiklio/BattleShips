// var boat = require("./_boat.js")

class Board {

    constructor(tabOfBoats)
    {
        this.tabOfBoats = tabOfBoats;
        var boardThis = this;

        $("#board").droppable({
            drop: function(event, ui) {
                var thisPos = $(ui.draggable).offset();
                var boardPos = $("#board").offset();
                var x = thisPos.left - boardPos.left;
                var y = thisPos.top - boardPos.top;
                // console.log("x: " + x + " y: " + y);
                boardThis.snap(ui.draggable, x, y);
                const yIndex = parseInt($(ui.draggable).css("top")) / 64; //128px/64
                const xIndex = parseInt($(ui.draggable).css("left")) / 64;
                ui.draggable.data("boat").xIndex = xIndex;
                ui.draggable.data("boat").yIndex = yIndex;
                console.log(ui.draggable.data("boat"));
            }

        });
    }
    shouldRevert(divBoaut)
    {
        // console.log($(divBoaut).css("top"));
        // console.log($(divBoaut).css("left"));
        // console.log($(divBoaut).hasClass("rotated"));
        // console.log($(divBoaut).data("boat").id);
        const draggBoat = $(divBoaut).data("boat");
        // TODO: nie działa - zdebugować
        let revert = false;
        $(this.tabOfBoats).each((index, element) => {
            if (!(element.id == draggBoat.id)) {
                if (element.xIndex == draggBoat.xIndex && element.yIndex == draggBoat.yIndex) {
                    revert = true;
                    return false;
                }
            }
        });
        return revert;

    }
    snap(element, x, y)
    {
        let snapY = y - (y % 64);
        let snapX = x - (x % 64);
        $(element).css({top: snapY, left: snapX});
    }
}
export default Board;
