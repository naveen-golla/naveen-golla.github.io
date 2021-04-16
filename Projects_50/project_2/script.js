var currentActive = 1;

$(document).ready(function() {

    $("#next").click(function() {
        currentActive++;
        // if (currentActive > $(".circle").length) {
        //     currentActive = $(".circle").length
        // }

        if (currentActive === $(".circle").length) {
            $("#next").attr("disabled", "disabled");
        }
        update(currentActive)
        $("#prev").removeAttr("disabled");
    });
    // 
    $("#prev").click(function() {
        currentActive--;
        // if (currentActive < 1) {
        //     currentActive = 1
        //     console.log(currentActive)
        // }
        if (currentActive == 1) {
            console.log(currentActive)
            $("#prev").attr("disabled", "disabled");
        };
        $("#next").removeAttr("disabled", "disabled");
        update(currentActive)
    });
    const active = $('.active')

    function update(currentActive) {
        $('.circle').each(function() {

            if (parseInt($(this).text()) === currentActive) {
                $(this).addClass("active");

                console.log(parseInt($(this).text()))
            } else if (parseInt($(this).text()) > currentActive) {
                console.log(parseInt($(this).text()))
                $(this).removeClass("active");

            }
            // console.log(parseInt($(this).text()))
        });
    }
})