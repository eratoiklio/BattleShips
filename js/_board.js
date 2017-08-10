export var shot = {
    MISS: 1,
    HIT: 2,
    SUNK: 3
};
class Board
{
    constructor(tabOfBoats, game, id)
    {
        this.id=id;
        this.tabOfBoats = tabOfBoats;
        this.game=game;
    }
    shotResult(xIndex, yIndex)
    {
        let boatCondition = shot.MISS;
        $(this.tabOfBoats).each((index, element) => {
            for (var i = 0; i < element.coord.length; i++) {
                if (element.coord[i].x == xIndex && element.coord[i].y == yIndex) {
                    boatCondition = shot.HIT;
                    element.hitElement[i] = true;

                    let isSunk = element.hitElement.every((element, index, array) => {
                        return element;
                    });
                    if (isSunk)
                        boatCondition = shot.SUNK;
                    return false;
                }
            }
        });

        // var shotResult = this.shotResult(xIndex, yIndex);
        var hitResultDiv = $('<div>');

        if (boatCondition == 1) {
            hitResultDiv.css({
                "display": "inline-block",
                "background-image": "url(assets/miss.png)",
                "height": "64px",
                "width": "64px",
                "position": "absolute",
                "top": yIndex*64,
                "left": xIndex*64
            });

        } else if (boatCondition == 2) {
            hitResultDiv.css({
                "display": "inline-block",
                "background-image": "url(assets/hit.png)",
                "height": "64px",
                "width": "64px",
                "position": "absolute",
                "top": yIndex*64,
                "left": xIndex*64
            })

        } else {
            // potrzebuje statku , zeby wiedzieć ilu masztopwiec i jaka rotacja:(
            hitResultDiv.css({
                "display": "inline-block",
                "background-image": "url(assets/sunk.png)",
                "height": "64px",
                "width": "64px",
                "position": "absolute",
                "top": yIndex*64,
                "left": xIndex*64
            })

        }
        $("#" + this.id).append(hitResultDiv);

        return boatCondition;
    }
    // TODO: funkcja sprawdzająca czy wszystkie sataki zatopione zwraca tru lub false
}
export default Board;
