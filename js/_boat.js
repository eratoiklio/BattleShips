
    class Boat {
        setBoat(){
            $(".boat").draggable();
            $(".boat").on("dblclick", function() {
                    $(".boat").toggleClass("rotated");
                })
            }
    }
export default Boat;
