// var boat = require("./_boat.js")

class Board {

    constructor()
    {
        var boardThis=this;
        $("#board").droppable({
            drop: function(event, ui) {
                var thisPos = $(ui.draggable).offset();
                var boardPos = $("#board").offset();
                var x = thisPos.left - boardPos.left;
                var y = thisPos.top - boardPos.top;
                console.log("x: " + x + " y: " + y);
                boardThis.snapX(ui.draggable, x);
                boardThis.snapY(ui.draggable, y);
            }
        });
    }
    // TODO: fix
    snapX(element, x)
    {

        if (x > 576) {
            $(element).css({left: 576, position: 'absolute'});
        } else if (x > 512) {
            $(element).css({left: 512, position: 'absolute'});
        } else if (x > 448) {
            $(element).css({left: 448, position: 'absolute'});
        } else if (x > 384) {
            $(element).css({left: 384, position: 'absolute'});
        } else if (x > 320) {
            $(element).css({left: 320, position: 'absolute'});
        } else if (x > 256) {
            $(element).css({left: 256, position: 'absolute'});
        } else if (x > 192) {
            $(element).css({left: 192, position: 'absolute'});
        } else if (x > 128) {
            $(element).css({left: 128, position: 'absolute'});
        } else if (x > 64) {
            $(element).css({left: 64, position: 'absolute'});
        }
        else if (x > 0) {
            $(element).css({left: 0, position: 'absolute'});
        }
    }
    // TODO: fix
    snapY(element, y)
    {

        if (y > 576) {
            $(element).css({top: 576, position: 'absolute'});
        } else if (y > 512) {
            $(element).css({top: 512, position: 'absolute'});
        } else if (y > 448) {
            $(element).css({top: 448, position: 'absolute'});
        } else if (y > 384) {
            $(element).css({top: 384, position: 'absolute'});
        } else if (y > 320) {
            $(element).css({top: 320, position: 'absolute'});
        } else if (y > 256) {
            $(element).css({top: 256, position: 'absolute'});
        } else if (y > 192) {
            $(element).css({top: 192, position: 'absolute'});
        } else if (y > 128) {
            $(element).css({top: 128, position: 'absolute'});
        } else if (y > 64) {
            $(element).css({top: 64, position: 'absolute'});
        }
        else if (y > 0) {
            $(element).css({top: 0, position: 'absolute'});
        }
    }

}
export default Board;
