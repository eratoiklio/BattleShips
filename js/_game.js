import GamerBoard from "./_gamer_board.js";
import AiBoard from "./_ai_board.js";
import Boat from "./_boat.js";
import Coordinates from "./_coordinates.js";
class Game
{

    constructor()
    {
        const tabOfBoats = [];
        this.gamerBoard = new GamerBoard(tabOfBoats, this);
        $(".mast1").each((index, element)=> {
            let boat = new Boat(element.id, this.gamerBoard, 1);
            tabOfBoats.push(boat);
            // console.log(boat.id);
            $(element).data("boat", boat);

        });
        $(".mast2").each((index, element) =>{
            let boat = new Boat(element.id, this.gamerBoard, 2);
            tabOfBoats.push(boat);
            // console.log(boat.id);
            $(element).data("boat", boat);

        });
        $(".mast3").each((index, element) =>{
            let boat = new Boat(element.id, this.gamerBoard, 3);
            tabOfBoats.push(boat);
            // console.log(boat.id);
            $(element).data("boat", boat);

        });
        $(".mast4").each((index, element) =>{
            let boat = new Boat(element.id, this.gamerBoard, 4);
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
        this.aiBoard= new AiBoard(aiBoats, this);
        this.aiBoard.setAllAiBoats();
        console.log(this.aiBoard.aiSetBoats);
    }

    aiTurn()
    {
        let aimCoord;
        do
        {
            aimCoord = this.aiBoard.aim();
            console.log(aimCoord);
        }
        while (!aimCoord instanceof Coordinates)
        ;
        alert(aimCoord.x + " " + aimCoord.y);
        this.aiBoard.checkedBoard[aimCoord.x][aimCoord.y] = this.gamerBoard.shotResult(aimCoord.x, aimCoord.y);
        console.log(this.aiBoard);
        // }
        //
    }
}
export default Game;
