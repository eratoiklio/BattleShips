import Coordinates from './_coordinates.js';
import Boat from './_boat.js';
import Board from './_board.js';
import shot from './_board.js';

class AiBoard extends Board {

    constructor(tabOfBoats, game)
    {
        super(tabOfBoats, game);
        // this.tabOfBoats = tabOfBoats;
        this.aiSetBoats = [];
        this.checkedBoard = [];
        for (var i = 0; i < 10; i++) {
            this.checkedBoard[i] = new Array(10);
        }

        this.divBoard = $("#ai_board");
        this.divBoard.on("click", (event) => {
            this.getShot(event)
        });
    };
    getShot(event) {
        var x;
        var y;
        if (event.pageX || event.pageY) {
            x = event.pageX;
            y = event.pageY;
        } else {
            x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        x -= event.currentTarget.offsetLeft;
        y -= event.currentTarget.offsetTop;
        let xIndex = (x - x % 64) / 64;
        let yIndex = (y - y % 64) / 64;
        console.log(this.shotResult(xIndex, yIndex));
        var hitResultDiv = $('<div>');

        if (this.shotResult(xIndex, yIndex) == 1) {
            hitResultDiv.css({"display":"inline-block","background-image": "url(assets/miss.png)", "height": "64px", "width": "64px", "position":"absolute", "top": yIndex*64, "left":xIndex*64});

        } else if (this.shotResult(xIndex, yIndex) == 2) {
             hitResultDiv.css({"display":"inline-block","background-image": "url(assets/hit.png)", "height": "64px", "width": "64px","position":"absolute", "top": yIndex*64, "left":xIndex*64})

        } else {
            // potrzebuje statku , zeby wiedzieć ilu masztopwiec i jaka rotacja:(
            hitResultDiv.css({"display":"inline-block","background-image": "url(assets/sunk.png)", "height": "64px", "width": "64px","position":"absolute", "top": yIndex*64, "left":xIndex*64})

        }
        $("#ai_board").append(hitResultDiv);

    }

    setAiBoat(boat)
    {
        boat.isRotated = Math.random() >= 0.5;
        if (boat.isRotated)
            boat.setPosition(new Coordinates(Math.floor(Math.random() * 10), Math.floor(Math.random() * (10 - boat.mast + 1))));
        else
            boat.setPosition(new Coordinates(Math.floor(Math.random() * (10 - boat.mast + 1)), Math.floor(Math.random() * 10)));

        }
    shouldRevert(boat)
    {

        let coordtab = [];
        for (let i = 0; i < boat.mast; i++) {
            if (boat.isRotated) {
                coordtab.push(new Coordinates(boat.startPos.x, boat.startPos.y + i));
            } else {
                coordtab.push(new Coordinates(boat.startPos.x + i, boat.startPos.y));
            }
        }
        boat.coord = coordtab.slice();
        for (let i = 0; i < coordtab.length; i++) {
            for (let j = 0; j < this.aiSetBoats.length; j++) {
                if (coordtab[i].x >= this.aiSetBoats[j].privateZone[0].x && this.aiSetBoats[j].privateZone[1].x >= coordtab[i].x && coordtab[i].y >= this.aiSetBoats[j].privateZone[0].y && this.aiSetBoats[j].privateZone[1].y >= coordtab[i].y) {
                    return true;
                }
            }
        }
        this.aiSetBoats.push(boat);
        return false;
    }
    setAllAiBoats()
    {
        for (var i = 0; i < this.tabOfBoats.length; i++) {
            let rev;
            do
            {
                this.setAiBoat(this.tabOfBoats[i]);
                rev = this.shouldRevert(this.tabOfBoats[i]);
            }
            while (rev) ;
            }
        }
    aim()
    {
        let indexX = Math.floor(Math.random() * 10);
        let indexY = Math.floor(Math.random() * 10);

        for (let i = 0; i < this.checkedBoard.length; i++)
            for (var j = 0; j < this.checkedBoard.length; j++) {
                if (this.checkedBoard[i][j] == 1 || this.checkedBoard[i][j] == 2 || this.checkedBoard[i][j] == this.checkedBoard[i][j] == 3)
                    return true;
                }
            return new Coordinates(indexX, indexY);
        }

}
export default AiBoard;
