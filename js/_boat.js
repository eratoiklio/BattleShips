import Coordinates from './_coordinates.js'
class Boat {

    constructor(id, board, mast) {
        this.id = id;
        this.board = board;
        let tempThis = this;
        this.mast = mast;
        this.startPos = new Coordinates(0, 0);
        this.isRotated = $("#" + this.id).hasClass("rotated");
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
            $("#" + this.id).toggleClass("rotated");
        });

    }
    setPosition(cord) {
        this.startPos = cord;
        this.isRotated = $("#" + this.id).hasClass("rotated");
        this.privateZone = [
            new Coordinates(this.startPos.x - 1, this.startPos.y - 1),
            new Coordinates(this.startPos.x + (this.isRotated
                ? 1
                : this.mast), this.startPos.y + (this.isRotated
                ? this.mast
                : 1))
        ];
        // console.log(this.privateZone);
    }
}
export default Boat;
