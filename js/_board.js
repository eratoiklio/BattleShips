var shot = {
    MISS: 1,
    HIT: 2,
    SUNK: 3
};
class Board
{
    constructor(tabOfBoats)
    {
        this.tabOfBoats = tabOfBoats;
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
        return boatCondition;
    }
}
export default Board;
