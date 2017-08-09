import Coordinates from './_coordinates.js';
import Boat from './_boat.js';
import Board from './_board.js';

class AiBoard extends Board {

    constructor(tabOfBoats)
    {
        super(tabOfBoats);
        // this.tabOfBoats = tabOfBoats;
        this.aiSetBoats = [];
        this.checkedBoard=[];
        this.divBoard = $("#ai_board");
        this.divBoard.on("click", (event) => {
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
            x = (x - x % 64) / 64;
            y = (y - y % 64) / 64;
            console.log(this.shotResult(x, y));


        });
    }
    setAiBoat(boat)
    {
        boat.isRotated = Math.random() >= 0.5;
        if (boat.isRotated)
            boat.setPosition(new Coordinates(Math.floor(Math.random() * 10), Math.floor(Math.random() * (10 - boat.mast+1))));
        else
            boat.setPosition(new Coordinates(Math.floor(Math.random() * (10 - boat.mast+1)), Math.floor(Math.random() * 10)));

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
            let indexX = Math.floor(Math.random()*10);
            let indexY = Math.floor(Math.random()*10);

            for(let i=0; i<this.checkedBoard.length;i++)
            for (var j = 0; j < this.checkedBoard.length; j++) {
                if(this.checkedBoard[i][j]==shot.MISS ||this.checkedBoard[i][j]==shot.HIT||this.checkedBoard[i][j]==this.checkedBoard[i][j]==shot.SUNK)
                return true;
            }
            return new Coordinates(indexX, indexY);
        }

}
export default AiBoard;
