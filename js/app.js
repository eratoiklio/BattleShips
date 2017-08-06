import Board from "./_board.js";
import AiBoard from "./ai_board.js";
import Boat from "./_boat.js";
$(() => {

    const tabOfBoats = [];
    const board = new Board(tabOfBoats);
    $(".mast1").each(function(index, element) {
        let boat = new Boat(element.id, board, 1);
        tabOfBoats.push(boat);
        // console.log(boat.id);
        $(element).data("boat", boat);

    });
    $(".mast2").each(function(index, element) {
        let boat = new Boat(element.id, board, 2);
        tabOfBoats.push(boat);
        // console.log(boat.id);
        $(element).data("boat", boat);

    });
    $(".mast3").each(function(index, element) {
        let boat = new Boat(element.id, board, 3);
        tabOfBoats.push(boat);
        // console.log(boat.id);
        $(element).data("boat", boat);

    });
    $(".mast4").each(function(index, element) {
        let boat = new Boat(element.id, board, 4);
        tabOfBoats.push(boat);
        // console.log(boat.id);
        $(element).data("boat", boat);

    });
    const aiBoats = [];
    let id = 1;
    for (let i = 0; i < 4; i++) {
        aiBoats.push(new Boat("aiBoat" + id, null, 1));
        id++;
    }
    for (let i = 0; i < 3; i++) {
        aiBoats.push(new Boat("aiBoat" + id, null, 2));
        id++;
    }
    for (let i = 0; i < 2; i++) {
        aiBoats.push(new Boat("aiBoat" + id, null, 3));
        id++;
    }
    aiBoats.push(new Boat("aiBoat" + id, null, 4));
    const aiBoard = new AiBoard(aiBoats);
    aiBoard.setAllAiBoats();
    console.log(aiBoard.aiSetBoats);
});
