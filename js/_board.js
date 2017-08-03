import Coordinates from './_coordinates.js'
class Board {

    constructor(tabOfBoats)
    {
        this.tabOfBoats = tabOfBoats;

        $("#board").droppable({
            drop: function(event, ui) {
                var thisPos = $(ui.draggable).offset();
                var boardPos = $("#board").offset();
                var x = thisPos.left - boardPos.left;
                var y = thisPos.top - boardPos.top;
                x = (x - x % 64) / 64;
                y = (y - y % 64) / 64;
                ui.draggable.data("tempIndex", new Coordinates(x, y));
            }
        });

        $("button").on("click", ()=>{
            $(".boat").draggable("disable");

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

}
export default Board;
