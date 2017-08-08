import Coordinates from './_coordinates.js';
import Boat from './_boat.js';
import Board from './_board.js';

class AiBoard extends Board {

    constructor(tabOfBoats)
    {
        super(tabOfBoats);
        // this.tabOfBoats = tabOfBoats;
        this.aiSetBoats = [];
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
            //console.log(x);
            //    console.log(y);

        });
    }
    setAiBoat(boat)
    {
        boat.isRotated = Math.random() >= 0.5;
        //boat.startPos = new Coordinates(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
        if (boat.isRotated)
            boat.setPosition(new Coordinates(Math.floor(Math.random() * 10), Math.floor(Math.random() * (10 - boat.mast))));
        else
            boat.setPosition(new Coordinates(Math.floor(Math.random() * (10 - boat.mast)), Math.floor(Math.random() * 10)));

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
    // var shot = {
    //     MISS: 1,
    //     HIT: 2,
    //     SUNK: 3
    // };
    // shotResult(xIndex, yIndex)
    // {
    //     $(tabOfBoats).each((index, element) {
    //         let boatCondition = shot.MISS;
    //         element.hitElement = [];
    //         let isSunk = true;
    //         for (var i = 0; i < element.coord.length; i++) {
    //             if (element.coord[i].x == xIndex && element.coord[i].y == yIndex) {
    //                 boatCondition = shot.HIT;
    //                 element.hitElement[i] = true;
    //             }
    //             else {
    //                 element.hitElement[i]=false;
    //             }
    //             isSunk *= element.hitElement[i];
    //
    //         };
    //         if (element.isSunk) {
    //             boatCondition = shot.SUNK;
    //         }
    //     });
    //     return boatCondition;
    // }
}
export default AiBoard;
