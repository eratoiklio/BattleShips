$(() => {
            $(".boat").draggable();
        $("#board").find("div").droppable({
            drop: function(event, ui) {
                console.log(this.id);
                console.log(ui);
                console.log(event);
            }
        });
        $(".boat").on("dblclick", function() {
            $(".boat").toggleClass("rotated");

        })



});
