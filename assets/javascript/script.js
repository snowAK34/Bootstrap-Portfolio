$(document).ready(function() {
    $("#pagepiling").pagepiling();
    
    $("#front-page").t({
        speed: 125,
        delay: 0,
    });
    $('#front-page').find('.t-caret').css({opacity:0});
    
    $("#in-touch").t({
        delay: 0,
    });
});