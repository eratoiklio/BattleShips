import Coordinates from './_coordinates.js';
import Boat from './_boat.js';

class AiBoard {

    constructor(aiBoats)
    {
        this.aiBoats = aiBoats;
        this.aiSetBoats = [];
    }
    setAiBoat(boat)
    {
        boat.isRotated = Math.random() >= 0.5;
        //boat.startPos = new Coordinates(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
        boat.setPosition(new Coordinates(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)));

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
        for (let i = 0; i < coordtab.length; i++) {
            for (let j = 0; j < this.aiSetBoats.length; j++) {
                if (boat.privateZone[1].y>9 || boat.privateZone[1].x>9 || coordtab[i].x >= this.aiBoats[j].privateZone[0].x && this.aiBoats[j].privateZone[1].x >= coordtab[i].x && coordtab[i].y >= this.aiBoats[j].privateZone[0].y && this.aiBoats[j].privateZone[1].y >= coordtab[i].y) {
                    {
                        return true;
                    }

                }
            }
        }
        this.aiSetBoats.push(boat);
        return false;
    }
    setAllAiBoats()
    {
        for (var i = 0; i < this.aiBoats.length; i++) {
            let rev;
            do
            {
                this.setAiBoat(this.aiBoats[i]);
                rev = this.shouldRevert(this.aiBoats[i]);
            }while(rev);
        }
    }
}
export default AiBoard;
