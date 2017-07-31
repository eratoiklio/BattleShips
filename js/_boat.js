class Boat {

    constructor(id, board) {
    this.id=id;
    this.board=board;
    let tempThis= this;
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
