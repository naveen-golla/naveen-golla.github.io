var currentActive = 10;
$(document).ready(function() {
    $("#next").click(function() {
        currentActive = currentActive + 10;
        if (currentActive === 100) {
            $("#next").attr("disabled", "disabled");
        }
        update(currentActive);
        $("#prev").removeAttr("disabled");
        console.log($(".circle").length)

    });
    // 
    $("#prev").click(function() {
        currentActive = currentActive - 10;
        if (currentActive == $(".circle").length) {
            console.log(currentActive)
            $("#prev").attr("disabled", "disabled");
        };
        $("#next").removeAttr("disabled", "disabled");
        update(currentActive)
        console.log(currentActive)
        console.log($(".circle").length)

    });

    function update(currentActive) {
        $('.circle').each(function() {

            if (parseInt($(this).html()) === currentActive) {
                $(this).addClass("active");
                console.log('in if ----' + parseInt($(this).text()))
            } else if (parseInt($(this).html()) > currentActive) {
                $(this).removeClass("active");
                console.log(' in else if------' + parseInt($(this).text()))
            }
            $(".progress").width(($('.active').length - 1) / ($(".circle").length - 1) * 100 + '%')
        });
    }
})