var currentActive = 1;

$(document).ready(function() {

    $("#next").click(function() {
        currentActive++;
        if (currentActive > $(".circle").length) {
            currentActive = $(".circle").length
        } else if (currentActive === $(".circle").length) {
            $("#next").attr("disabled", "disabled");
        }
        $("#prev").removeAttr("disabled");
        update(currentActive)
    });
    // 
    $("#prev").click(function() {
        currentActive--;
        if (currentActive < 1) {
            currentActive = 1
        } else if (currentActive == 1) {
            $("#prev").attr("disabled", "disabled");
        }
        $("#next").removeAttr("disabled", "disabled");
        update(currentActive)
    });
    const active = $('.active')

    function update(currentActive) {
        $('.circle').each(function() {
            if (parseInt($(this).html()) === currentActive) {
                $(this).addClass("active");
                console.log(currentActive)
            } else if (parseInt($(this).html()) >= currentActive) {
                $(this).removeClass("active");
                console.log(currentActive)
            }
        });
    }
})