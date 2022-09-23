var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

$(document).ready(function(){
    $(window).scroll(function(){
        let otop= $('.section-3').offset().top - window.innerHeight;
        if($(window).scrollTop()>otop){
            $('.navbar').addClass('sticky');
    
        }else{
            $('.navbar').removeClass('sticky');
        }
        
    });

});
