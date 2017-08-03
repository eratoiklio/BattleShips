import Board from "./_board.js";
import Boat from "./_boat.js";
$(() => {

    const tabOfBoats = [];
    const board =new Board(tabOfBoats);
    $(".mast1").each(function(index, element) {
        let boat = new Boat(element.id, board,1);
        tabOfBoats.push(boat);
        // console.log(boat.id);
        $(element).data("boat", boat);

    });
    $(".mast2").each(function(index, element) {
        let boat = new Boat(element.id, board,2);
        tabOfBoats.push(boat);
        // console.log(boat.id);
        $(element).data("boat", boat);

    });
    $(".mast3").each(function(index, element) {
        let boat = new Boat(element.id, board,3);
        tabOfBoats.push(boat);
        // console.log(boat.id);
        $(element).data("boat", boat);

    });
    $(".mast4").each(function(index, element) {
        let boat = new Boat(element.id, board,4);
        tabOfBoats.push(boat);
        // console.log(boat.id);
        $(element).data("boat", boat);

    });

});
