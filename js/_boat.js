class Boat {

    constructor(id) {
    this.id=id;
        $(".boat").draggable();
        $(".boat").each(function(index, element)
        {
            $(element).on("dblclick", function() 
            {
                $(element).toggleClass("rotated");
            });
        });
    }
    setPosition(cord){
        this.coordinates=cord;

    }
}
export default Boat;
