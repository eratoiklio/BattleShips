import GamerBoard from "./_gamer_board.js";
import AiBoard from "./_ai_board.js";
import Boat from "./_boat.js";
import Coordinates from "./_coordinates.js";
import shot from "./_board.js";
class Game
{

    constructor()
    {
        const tabOfBoats = [];
        this.gamerBoard = new GamerBoard(tabOfBoats, this, "gamer_board");
        $(".mast1").each((index, element) => {
            let boat = new Boat(element.id, this.gamerBoard, 1);
            tabOfBoats.push(boat);
            $(element).data("boat", boat);

        });
        $(".mast2").each((index, element) => {
            let boat = new Boat(element.id, this.gamerBoard, 2);
            tabOfBoats.push(boat);
            $(element).data("boat", boat);

        });
        $(".mast3").each((index, element) => {
            let boat = new Boat(element.id, this.gamerBoard, 3);
            tabOfBoats.push(boat);
            $(element).data("boat", boat);

        });
        $(".mast4").each((index, element) => {
            let boat = new Boat(element.id, this.gamerBoard, 4);
            tabOfBoats.push(boat);
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
        this.aiBoard = new AiBoard(aiBoats, this,"ai_board");
        this.aiBoard.setAllAiBoats();
        console.log(this.aiBoard.aiSetBoats);
        $(".endSetting").on("click", () => {
            $(".boat").draggable("disable");
            $(".board").css("display", "inline-block");
            console.log(this);
            $(".endSetting").remove();
            this.aiTurn();
        });
        // TODO: sprawdzenie czy gracz rozstawił statki
    }


    gamerTurn()
    {
        $("#ai_board").on('click', (event)=>{ this.aiBoard.getShot(event)});
    }
    playerShotResult(shotResult)
    {
        if(shotResult==3 || this.aiBoard.win())
        {
            var winAlert= $('<div class="alert winAlert">Wygrałeś</wygrałeś>');
            $("#main").prepend(winAlert);
        }
        else {
            this.aiTurn();
        }
    }
    aiTurn()
    {
        $("#ai_board").off('click');
        let aimCoord=this.aiBoard.aim();
        var aimAlert= $('<div class="alert aimAlert">').text("strzał na kordynaty x: "+aimCoord.x + " y:" + aimCoord.y);
        // var confirmBtn=$('<button class="confirmBtn">Zatwierdz</button>');
        // aimAlert.append(confirmBtn);
        // confirmBtn.on('click', ()=>{
        //     console.log("kliknięto zatwierdz");
        //     $(this).parent.remove();
        // });
        $("#main").prepend(aimAlert);
        var aimTimer=setTimeout(()=>{console.log("mineły 1,5sek");
    $(aimAlert).remove();},1500);
        this.aiBoard.checkedBoard[aimCoord.x][aimCoord.y] = this.gamerBoard.shotResult(aimCoord.x, aimCoord.y);
        console.log(this.aiBoard.checkedBoard[aimCoord.x][aimCoord.y]);
        if (this.aiBoard.checkedBoard[aimCoord.x][aimCoord.y] == shot.SUNK && this.gamerBoard.win()) {
            var lostAlert= $('<div class="alert winAlert">Wygrałeś</wygrałeś>');
            $("#main").prepend(lostAlert);
        }
        else {
            this.gamerTurn();
        }

    }

}
export default Game;
