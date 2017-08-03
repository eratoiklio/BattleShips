import Coordinates from './_coordinates.js'
class Boat {

    constructor(id, board, mast) {
        this.id = id;
        this.board = board;
        let tempThis = this;
        this.mast = mast;
        this.startPos = new Coordinates(-1, -1);
        this.isRotated =false;
        $("#" + this.id).data("rotated", this.isRotated);
        this.privateZone = [
            new Coordinates(this.startPos.x - 1, this.startPos.y - 1),
            new Coordinates(this.startPos.x + (this.isRotated
                ? 1
                : this.mast), this.startPos.y + (this.isRotated
                ? this.mast
                : 1))
        ];

        $("#" + this.id).draggable({
            revert: function(dropped) {
                return tempThis.board.shouldRevert(this);
            }
        });
        $("#" + this.id).on("dblclick", () => {
            switch(this.mast)
            {
                case 1:
                $("#" + this.id).toggleClass("rotatedmast1");
                $("#" + this.id).toggleClass("mast1");
                break;
                case 2:
                $("#" + this.id).toggleClass("rotatedmast2");
                $("#" + this.id).toggleClass("mast2");
                break;
                case 3:
                $("#" + this.id).toggleClass("rotatedmast3");
                $("#" + this.id).toggleClass("mast3");
                break;
                case 4:
                $("#" + this.id).toggleClass("rotatedmast4");
                $("#" + this.id).toggleClass("mast4");
                break;
            }

            this.isRotated=!this.isRotated;
            $("#" + this.id).data("rotated", this.isRotated);

        });

    }
    setPosition(cord) {
        this.startPos = cord;
        this.privateZone = [
            new Coordinates(this.startPos.x - 1, this.startPos.y - 1),
            new Coordinates(this.startPos.x + (this.isRotated
                ? 1
                : this.mast), this.startPos.y + (this.isRotated
                ? this.mast
                : 1))
        ];
    }
}
export default Boat;
