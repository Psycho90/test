//MOBILE NAVIGATION MENU
var $list = $(".menu--js");
$(".burger").click(function () {
    for (i = 0; i <= $list.length; i++) {
        var plus = 50;
        $list.css("top", function () {
            return plus += 30;
        });
    }
    if ($(".burger").hasClass('fa-bars')) {
        $(this).addClass("fa-times");
        $(this).removeClass("fa-bars");
    }
    else {
        $(this).addClass("fa-bars");
        $(this).removeClass("fa-times");
    }

    $list.fadeToggle("slow");
})

//MOUSE SCROLL

$(".mouse").click(function(){
    $('html, body').animate({
        scrollTop: $(".sec").offset().top
    }, 2000);
})