$(window).scroll(function(){
    if($(window).scrollTop() > 0) {
        $('.navbar').css('background', 'rgba(0, 0, 0, 0.5)');
    } else {
        $('.navbar').css('background', 'transparent');
    }
});
