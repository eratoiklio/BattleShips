import Coordinates from './_coordinates.js'
import Board from './_board.js'
class GamerBoard extends Board{

    constructor(tabOfBoats)
    {
        super(tabOfBoats);
        // this.tabOfBoats = tabOfBoats;

        $("#gamer_board").droppable({
            drop: function(event, ui) {
                var thisPos = $(ui.draggable).offset();
                var boardPos = $("#gamer_board").offset();
                var x = thisPos.left - boardPos.left;
                var y = thisPos.top - boardPos.top;
                x = (x - x % 64) / 64;
                y = (y - y % 64) / 64;
                ui.draggable.data("tempIndex", new Coordinates(x, y));
            }
        });

        $("button").on("click", () => {
            $(".boat").draggable("disable");
            $(".board").css("display", "inline-block");
        });

    }

    shouldRevert(divBoat)
    {
        const dragBoat = $(divBoat).data("boat");
        const tempIndex = $(divBoat).data("tempIndex");
        let coordtab = [];
        for (let i = 0; i < dragBoat.mast; i++) {
            if (dragBoat.isRotated && typeof tempIndex !== 'undefined') {
                coordtab.push(new Coordinates(tempIndex.x, tempIndex.y + i));
            } else if (typeof tempIndex !== 'undefined') {
                coordtab.push(new Coordinates(tempIndex.x + i, tempIndex.y));
            }
        }
        dragBoat.coord = coordtab.slice();
        for (let i = 0; i < coordtab.length; i++) {
            for (let j = 0; j < this.tabOfBoats.length; j++) {
                if (dragBoat.id == this.tabOfBoats[j].id)
                    continue;
                if (typeof tempIndex === 'undefined' || coordtab[i].x >= this.tabOfBoats[j].privateZone[0].x && this.tabOfBoats[j].privateZone[1].x >= coordtab[i].x && coordtab[i].y >= this.tabOfBoats[j].privateZone[0].y && this.tabOfBoats[j].privateZone[1].y >= coordtab[i].y || typeof tempIndex === 'undefined') {
                    return true;
                }
            }
        }
        if (typeof tempIndex !== 'undefined') {
            let snapX = tempIndex.x * 64;
            let snapY = tempIndex.y * 64;
            $(divBoat).css({top: snapY, left: snapX});
            dragBoat.setPosition(new Coordinates(tempIndex.x, tempIndex.y));
            return false;
        }
    }
    // var shot = {
    //     MISS: 1,
    //     HIT: 2,
    //     SUNK: 3
    // };
    //
    // shotResult(xIndex, yIndex)
    // {
    //     $(tabOfBoats).each((index, element) {
    //         let boatCondition = shot.MISS;
    //         element.hitElement = [];
    //         let isSunk = true;
    //         for (var i = 0; i < element.coord.length; i++) {
    //             if (element.coord[i].x == xIndex && element.coord[i].y == yIndex) {
    //                 boatCondition = shot.HIT;
    //                 element.hitElement[i] = true;
    //             }
    //             else {
    //                 element.hitElement[i]=false;
    //             }
    //             isSunk *= element.hitElement[i];
    //
    //         };
    //         if (element.isSunk) {
    //             boatCondition = shot.SUNK;
    //         }
    //     });
    //     return boatCondition;
    // }

}
export default GamerBoard;