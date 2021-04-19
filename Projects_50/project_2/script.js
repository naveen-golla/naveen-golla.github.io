var currentActive = 1;
$(document).ready(function() {
    $("#next").click(function() {
        currentActive++;
        if (currentActive === $(".circle").length) {
            $("#next").attr("disabled", "disabled");
        }
        update(currentActive)
        $("#prev").removeAttr("disabled");
    });
    // 
    $("#prev").click(function() {
        currentActive--;
        if (currentActive == 1) {
            console.log(currentActive)
            $("#prev").attr("disabled", "disabled");
        };
        $("#next").removeAttr("disabled", "disabled");
        update(currentActive)
    });


    function update(currentActive) {
        $('.circle').each(function() {

            if (parseInt($(this).text()) === currentActive) {
                $(this).addClass("active");
                console.log('in if ----' + parseInt($(this).text()))
            } else if (parseInt($(this).text()) > currentActive) {
                $(this).removeClass("active");
                console.log(' in else if------' + parseInt($(this).text()))
            }
            $(".progress").width(($('.active').length - 1) / ($(".circle").length - 1) * 100 + '%')
        });
    }
})