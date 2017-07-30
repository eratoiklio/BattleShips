import Board from "./_board.js";
import Boat from "./_boat.js";
$(() => {
    new Board();
    $(".boat").each(function(index, element){
        let boat = new Boat(element.id);
        console.log(boat.id);
        $(element).data("boat", boat);
    });


});
