// var boat = require("./_boat.js")
import Coordinates from './_coordinates.js'
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
                const isRotated = $(ui.draggable).hasClass("rotated");
                // console.log("x: " + x + " y: " + y);
                boardThis.snap(ui.draggable, x, y, isRotated);

                let yIndex = parseInt($(ui.draggable).css("top")) / 64; //128px/64
                let xIndex = parseInt($(ui.draggable).css("left")) / 64;
                if (isRotated) {
                    yIndex -= 1;
                    xIndex += 1;
                }
                ui.draggable.data("boat").setPosition(new Coordinates(xIndex, yIndex));
            //    console.log(ui.draggable.data("boat"));
            }

        });
    }
    shouldRevert(divBoat)
    {
        // console.log($(divBoaut).css("top"));
        // console.log($(divBoaut).css("left"));
        // console.log($(divBoaut).hasClass("rotated"));
        // console.log($(divBoaut).data("boat").id);
        const dragBoat = $(divBoat).data("boat");
        // TODO: nie działa - zdebugować
        let revert = false;
        $(this.tabOfBoats).each((index, element) => {
            if (!(element.id == dragBoat.id)) {
                console.log(dragBoat);
                if (dragBoat.startPos.x+(dragBoat.isRotated?0:dragBoat.mast) >= element.privateZone[0].x && element.privateZone[1].x >= dragBoat.startPos.x && dragBoat.startPos.y >= element.privateZone[0].y && element.privateZone[1].y >= dragBoat.startPos.y) {
                    revert = true;
                    return false;
                 }
            }
        });
        return revert;

    }
    snap(element, x, y, isRotated)
    {
        let snapY = y - (y % 64);
        let snapX = x - (x % 64);
        if (isRotated) {
            snapY += 64;
            snapX -= 64;
        }
        $(element).css({top: snapY, left: snapX});
    }
}
export default Board;
