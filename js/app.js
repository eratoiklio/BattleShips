import Board from "./_board.js";
import Boat from "./_boat.js";
$(() => {

    const tabOfBoats = [];
    const board =new Board(tabOfBoats);
    $(".boat").each(function(index, element) {
        let boat = new Boat(element.id, board);
        tabOfBoats.push(boat);
        // console.log(boat.id);
        $(element).data("boat", boat);

    });
    
});
