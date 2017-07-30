// var boat = require("./_boat.js")

class Board {

    constructor()
    {
        $("#board").find("div").droppable({
            drop: function(event, ui) {
                console.log(this.id);
                // console.log(ui);
                //      console.log(event);
                  let tabShip =$(ui.draggable).data("boat");
                  console.log(tabShip);
            }
        });
    }


}
export default Board;
