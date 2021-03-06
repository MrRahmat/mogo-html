$(function() {
    var header = $("#header"),
        introHeight = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    // Проверка прокручена ли начальная страница при обновлении страницы
    checkScroll(scrollOffset);

    // Проверка прокручена ли начальная страница
    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    // Присвоение/удаление класса для шапки
    function checkScroll(scrollOffset){
        
        if( scrollOffset >= introHeight ) {
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    }

    // Реализация скрола до секций при клике в навигации
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var sectionId = $(this).data("scroll"),
            sectionOffset = $(sectionId).offset().top;
            
        // Присвоение/удаление класса ссылкам навигации
        $("#nav a").removeClass("active");
        $(this).addClass("active");
            
        $("html, body").animate({
            scrollTop: sectionOffset
        }, 700);
    });

    //Реализация меню
    $("#nav-toggle").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    //Аккордион
    $("[data-collapse").on("click", function (event) {
        event.preventDefault();
        
        var blockId = $(this).data('collapse');

        $(blockId).slideToggle();
        $(this).toggleClass("active");
    });

    // Слайдер
    $("[data-slider").slick({
        infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});