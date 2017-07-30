// var boat = require("./_boat.js")

class Board {

    constructor()
    {
        $("#board").find("div").droppable({
            drop: function(event, ui) {

                // console.log(ui);
                //      console.log(event);
                var thisPos = $(ui.draggable).offset();
          var boardPos = $("#board").find("div").offset();
          var x = thisPos.left - boardPos.left;
          var y = thisPos.top - boardPos.top;
          console.log("parent left" +boardPos.left);
          console.log("parent top" +boardPos.top);
          console.log("child left" +thisPos.left);
          console.log("child top" +thisPos.top);
          console.log("x: "+x +" y: "+ y);
                // $(ui.draggable).data("boat");

            }
        });
    }


}
export default Board;
