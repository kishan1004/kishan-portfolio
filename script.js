$(window).on("scroll",function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 80){
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
})

$(document).ready(function(){
 new Typed('#type-it',{
        strings: ['Freelancer', 'Designer', 'Developer'],
        typeSpeed: 100,
        loop: true
    });
 });

 