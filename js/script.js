svg4everybody();

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

$(".mouse").click(function () {
    $('html, body').animate({
        scrollTop: $(".sec").offset().top
    }, 2000);
});

//SLIDER
var $slide = $(".screen-slide");
var $slider = $(".screen-slider");
var $dots;
var $index = 0;

function dots() {
    for (var i = 0; i < $slide.length; i++) {
        $(".slider-dots").append("<div class=\"slider-dot\"></div>");
    }
    $dots = $(".slider-dot");
}

function slider_classes() {
    if (Math.abs($index) > $slide.length) {
        $index = 0;
    }
    var i = $index;
    $slide.removeClass("screen-slide--far screen-slide--close screen-slide--cntr screen-slide--invis");
    $dots.removeClass("slider-dot--cntr");
    $slide.addClass("screen-slide--invis");
    $slide.eq(i).addClass("screen-slide--far").removeClass("screen-slide--invis");
    $slide.eq(i + 1).addClass("screen-slide--close").removeClass("screen-slide--invis");
    $slide.eq(i + 2).addClass("screen-slide--cntr").removeClass("screen-slide--invis");
    $dots.eq(i + 2).addClass("slider-dot--cntr");
    $slide.eq(i + 3).addClass("screen-slide--close").removeClass("screen-slide--invis");
    $slide.eq(i + 4).addClass("screen-slide--far").removeClass("screen-slide--invis");
    $slider.css({left: '', right: '' });
    if ($slide.eq(1).hasClass("screen-slide--cntr")) {
        $slider.css('left', '230px');
    }
    if ($slide.eq(0).hasClass("screen-slide--cntr")) {
            $slider.css('left', '460px');
    }
    if ($slide.eq($slide.length - 1).hasClass("screen-slide--cntr")) {
        $slider.css('right', '230px');
    }
    if ($slide.eq($slide.length - 2).hasClass("screen-slide--cntr")) {
        $slider.css('right', '115px');
    }
}

function slide_left() {
    if ($index < -1) {
        $index = $slide.length - 2;
    }
    $index--;
    slider_classes();
}

function slide_right() {
    if ($index > $slide.length - 4) {
        $index = -3;
    }
    $index++;
    slider_classes();
}

function slider() {
    dots();
    slider_classes();
    var $drop, $drag;
    $slider.draggable({
        axis: "x",
        start: function () {
            $drag = $slider.offset().left;
        },
        drag: function () {
            $drop = $slider.offset().left;
        },
        revert: function () {
            if ($drop < $drag - 150) {
                slide_right();
                return false;
            }
            else if ($drop > $drag + 150) {
                slide_left();
                return false;
            }
            else {
                return true
            }
        }
    });
    $(".s-button--left").click(function () {
        slide_left();
    });
    $(".s-button--right").click(function () {
        slide_right();
    });
    $(".click-js").click(function () {
        $slide = $(".screen-slide");
    });
    $dots.click(function () {
        $index = $(this).index() - 2;
        slider_classes();
    });
}

slider();


//USER SLIDER

$('.user-slider').slick({
    prevArrow: $('.user-left'),
    nextArrow: $('.user-right')
});
