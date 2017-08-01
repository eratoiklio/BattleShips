import Coordinates from './_coordinates.js'
class Boat {

    constructor(id, board, mast) {
    this.id=id;
    this.board=board;
    let tempThis= this;
    this.mast=mast;
    this.startPos= new Coordinates(0,0);
    const isRotated =$("#"+this.id).hasClass("rotated");
    this.privateZone=[ new Coordinates(this.startPos.x-1, this.startPos.y-1), new Coordinates(this.startPos.x+(isRotated?1:this.mast), this.startPos.y+(isRotated?this.mast:1))];

        $(".boat").draggable({revert : function(dropped)
        {
            return tempThis.board.shouldRevert(this);
        }});
        $(".boat").each(function(index, element)
        {
            $(element).on("dblclick", function()
            {
                $(element).toggleClass("rotated");
            });
        });
    }
    setPosition(cord){
        this.startPos=cord;
        const isRotated =$("#"+this.id).hasClass("rotated");
        this.privateZone=[ new Coordinates(this.startPos.x-1, this.startPos.y-1), new Coordinates(this.startPos.x+(isRotated?1:this.mast), this.startPos.y+(isRotated?this.mast:1))];
        console.log(this.privateZone);
    }
}
export default Boat;
