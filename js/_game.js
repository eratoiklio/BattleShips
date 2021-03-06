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
        this.aiBoard = new AiBoard(aiBoats, this, "ai_board");
        this.aiBoard.setAllAiBoats();
        console.log(this.aiBoard.aiSetBoats);
        $(".endSetting").on("click", () => {
            $(".boat").draggable("disable");
            $(".board").css("display", "inline-block");
            $(".endSetting").remove();
            this.aiTurn();
        });
        // TODO: sprawdzenie czy gracz rozstawił statki
    }

    gamerTurn()
    {
        $("#ai_board").on('click', (event) => {
            this.aiBoard.getShot(event)
        });
    }
    playerShotResult(shotResult)
    {
        if (shotResult == 3 && this.aiBoard.win()) {
            var winAlert = $('<div class="alert winAlert">Wygrałeś</wygrałeś>');
            $(".board").off("click");
            let confirmBtn = $('<button class="confirmBtn">OK</button>');
            winAlert.append(confirmBtn);
            confirmBtn.on("click", function() {
                $(this).parent().remove();
            });
            $("#main").append(winAlert);

        } else {
            this.aiTurn();
        }
    }
    aiTurn()
    {
        $("#ai_board").off('click');
        let aimCoord = this.aiBoard.aim();
        var aimAlert = $('<div class="alert aimAlert">').text("strzał na kordynaty x: " + aimCoord.x + " y:" + aimCoord.y);
        // var confirmBtn=$('<button class="confirmBtn">Zatwierdz</button>');
        // aimAlert.append(confirmBtn);
        // confirmBtn.on('click', ()=>{
        //     console.log("kliknięto zatwierdz");
        //     $(this).parent.remove();
        // });
        $("#main").append(aimAlert);
        var aimTimer = setTimeout(() => {
            $(aimAlert).remove();
        }, 1000);
        this.aiBoard.checkedBoard[aimCoord.x][aimCoord.y] = this.gamerBoard.shotResult(aimCoord.x, aimCoord.y);
        // console.log(this.aiBoard.checkedBoard[aimCoord.x][aimCoord.y]);
        // console.log("wynik strzału ai"+(this.aiBoard.checkedBoard[aimCoord.x][aimCoord.y] == 3));
        // console.log("czy wygrane"+this.gamerBoard.win());
        if (this.aiBoard.checkedBoard[aimCoord.x][aimCoord.y] == 3 && this.gamerBoard.win()) {
            var lostAlert = $('<div class="alert lostAlert">przegrałeś</div>');
            let confirmBtn = $('<button class="confirmBtn">OK</button>');
            lostAlert.append(confirmBtn);
            confirmBtn.on("click", function() {
                $(this).parent().remove();
            });
            $(".board").off("click");
            $("#main").append(lostAlert);
        } else {
            this.gamerTurn();
        }

    }

}
export default Game;
