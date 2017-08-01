class Boat {

    constructor(id, board) {
    this.id=id;
    this.board=board;
    let tempThis= this;
    this.xIndex=-1;
    this.yIndex=-1;
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
        this.coordinates=cord;

    }
}
export default Boat;
