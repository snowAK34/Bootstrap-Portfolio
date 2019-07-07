$(document).ready(function() {
    $(".app-desc").hide();

    $("#img1").on("click", function(){$("#desc1").toggle()});
    $("#img2").on("click", function(){$("#desc2").toggle()});
    $("#img3").on("click", function(){$("#desc3").toggle()});
    $("#img4").on("click", function(){$("#desc4").toggle()});
    $("#img5").on("click", function(){$("#desc5").toggle()});
    $("#img6").on("click", function(){$("#desc6").toggle()});

    $("#pagepiling").pagepiling({
        normalScrollElements: '.pp-scrollable'
    });
    
    $("#front-page").t({
        speed: 125,
        delay: 0,
    });
    $('#front-page').find('.t-caret').css({opacity:0});
});