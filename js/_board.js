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
                // const isRotated = $(ui.draggable).hasClass("rotated");
                // console.log("x: " + x + " y: " + y);
                boardThis.snap(ui.draggable, x, y);

                let yIndex = parseInt($(ui.draggable).css("top")) / 64; //128px/64
                let xIndex = parseInt($(ui.draggable).css("left")) / 64;
                // if (isRotated) {
                //     yIndex -= 1;
                //     xIndex += 1;
                // }
                ui.draggable.data("boat").setPosition(new Coordinates(xIndex, yIndex));
                //    console.log(ui.draggable.data("boat"));
            }

        });
    }
    // shouldRevert(divBoat)
    // {
    //
    //     const dragBoat = $(divBoat).data("boat");
    //     let revert = false;
    //     $(this.tabOfBoats).each((index, element) => {
    //         if (!(element.id == dragBoat.id)) {
    //             if (dragBoat.startPos.x+(dragBoat.isRotated?0:dragBoat.mast) >= element.privateZone[0].x
    //             && element.privateZone[1].x >= dragBoat.startPos.x
    //             && dragBoat.startPos.y >= element.privateZone[0].y
    //             && element.privateZone[1].y >= dragBoat.startPos.y) {
    //                 revert = true;
    //                 return false;
    //              }
    //         }
    //     });
    //     return revert;
    //
    // }

    shouldRevert(divBoat)
    {
        const dragBoat = $(divBoat).data("boat");
        let coordtab = [];
        for (let i = 0; i < dragBoat.mast; i++) {
            if (dragBoat.isRotated) {
                coordtab.push(new Coordinates(dragBoat.startPos.x, dragBoat.startPos.y + i));
            } else {
                coordtab.push(new Coordinates(dragBoat.startPos.x + i, dragBoat.startPos.y));
            }
        }
        for (let i = 0; i < coordtab.length; i++) {
            for (let j = 0; j < this.tabOfBoats.length; j++) {
                if(dragBoat.id==this.tabOfBoats[j].id)
                    continue;
                if(coordtab[i].x>=this.tabOfBoats[j].privateZone[0].x && this.tabOfBoats[j].privateZone[1].x>=coordtab[i].x &&
                coordtab[i].y>=this.tabOfBoats[j].privateZone[0].y && this.tabOfBoats[j].privateZone[1].y>=coordtab[i].y){
                    return true;
                }
            }
        }
        return false;

    }
    snap(element, x, y)
    {
        let snapY = y - (y % 64);
        let snapX = x - (x % 64);
        // if (isRotated) {
        //     snapY += 64;
        //     snapX -= 64;
        // }
        $(element).css({top: snapY, left: snapX});
    }
}
export default Board;
