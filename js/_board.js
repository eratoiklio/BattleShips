// var boat = require("./_boat.js")


     class Board{
        setBoard()
        {    $("#board").find("div").droppable({
                drop: function(event, ui) {
                    // console.log(this.id);
                    // console.log(ui);
                    // console.log(event);

                }
            });}
    //
    // // new Boat();
     }
     export default Board;
