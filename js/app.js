import GamerBoard from "./_gamer_board.js";
import AiBoard from "./_ai_board.js";
import Boat from "./_boat.js";
$(() => {

    const tabOfBoats = [];
    const gamerBoard = new GamerBoard(tabOfBoats);
    $(".mast1").each(function(index, element) {
        let boat = new Boat(element.id, gamerBoard, 1);
        tabOfBoats.push(boat);
        // console.log(boat.id);
        $(element).data("boat", boat);

    });
    $(".mast2").each(function(index, element) {
        let boat = new Boat(element.id, gamerBoard, 2);
        tabOfBoats.push(boat);
        // console.log(boat.id);
        $(element).data("boat", boat);

    });
    $(".mast3").each(function(index, element) {
        let boat = new Boat(element.id, gamerBoard, 3);
        tabOfBoats.push(boat);
        // console.log(boat.id);
        $(element).data("boat", boat);

    });
    $(".mast4").each(function(index, element) {
        let boat = new Boat(element.id, gamerBoard, 4);
        tabOfBoats.push(boat);
        // console.log(boat.id);
        $(element).data("boat", boat);

    });
    const aiBoats = [];
    let id = 1;
    aiBoats.push(new Boat("aiBoat" + id, null, 4));
    id++;
    for (let i = 0; i < 2; i++) {
        aiBoats.push(new Boat("aiBoat" + id, null, 3));
        id++;
    }
    for (let i = 0; i < 3; i++) {
        aiBoats.push(new Boat("aiBoat" + id, null, 2));
        id++;
    }
    for (let i = 0; i < 4; i++) {
        aiBoats.push(new Boat("aiBoat" + id, null, 1));
        id++;
    }
    const aiBoard = new AiBoard(aiBoats);
    aiBoard.setAllAiBoats();
    console.log(aiBoard.aiSetBoats);



});
