function action_button_height(){
    $('.action-unit .action-btn a').css({'padding': '15px 0'});
    var bos = $('.action-unit .action-btn').height() - $('.action-unit .action-btn a').height();
    $('.action-unit .action-btn a').css({'padding': bos / 2 + 'px 0'});
}

function image_sandbox_width_height(){
    $('.image-container, .folio-image-container').each(function () {

        var height = $(this).find('img').height();
        var width = $(this).find('img').width();
        $(this).find('.sandbox').css({'width': width + 'px', 'height': height + 'px'});

    });
}




function check_for_active_class () {
    if($('.sf-menu li > ul li a').hasClass('active')){
        $('.sf-menu li > ul li a.active').parents('ul').prev('a').addClass('active');
    }
}


$(window).load(function () {
    image_sandbox_width_height();
    action_button_height();
    check_for_active_class ();
    $(window).resize(function(){
        action_button_height();  
        image_sandbox_width_height();
    });


    /*
     * Custom Scroll Bar for recent post/news
     */
    $(".posts").mCustomScrollbar({
        scrollButtons:{
            enable:true,
        }
    });
});
$(document).ready(function () {

    $('.image-container').hover(function () {
        var pos = $(this).width() - $(this).find('.zoom').width() * 3;
        var exatpos = pos / 2;
        $(this).find('.zoom').css({'left': exatpos + 'px'});
        $(this).find('.link').css({'right': exatpos + 'px'});
    }, function () {
        $(this).find('.zoom').css({'left': '0'});
        $(this).find('.link').css({'right': '0'});
    });

	/*
     * sequence.js slider
     */
	var options = {
        nextButton: true,
        prevButton: true,
        animateStartingFrameIn: true,
        autoPlay: true,
        preloader: true,
        preloadTheseFrames: [1],
        reverseAnimationsWhenNavigatingBackwards: true,
        navigationSkipThreshold: 1500
    };
    var mySequence = $("#sequence").sequence(options).data("sequence");

    
	/*
     * jquery superfish menu
     */
	$('#menu').superfish({
		pathClass:'current',
		cssArrows:true,
		delay:200,
		speed:'normal',
		animation:{height:'show'}
	});
	
	/*
	 * Twitter Feed
	 */
	$('.tweet-slider').tweet({
		modpath: './twitter/',
		count: 5,
		loading_text: 'loading twitter feed...',
		username: 'envato',
		template: "{text}{join}{time}",
		join_text: " - "
		/* etc... */
	});

    /*
     * Testimonials slider
     */
    if($('ul').hasClass('testimonial-slider')){
        $('.testimonial-slider').bxSlider({
            mode: 'horizontal', 
            pager: false, 
            auto: true, 
            controls: true, 
            pause: 5000, 
            speed: 800,
            nextText: '',
            prevText: '',
            stopAuto: false,
            autoHover: true
        });
    }

    /*
     * Recent Work Slider
     */ 
    if($('div').hasClass('recent-works') || $('ul').hasClass('recent-work-widget-slider')){
        $('.recent-works, .recent-work-widget-slider').bxSlider({
            mode: 'vertical', 
            pager: false, 
            auto: true, 
            controls: true, 
            pause: 10000, 
            speed: 800,
            nextText: '',
            prevText: '',
            stopAuto: false,
            autoHover: true
        });
    }
	
	/*
     * Twitter Feed Slider
     */
    if($('ul').hasClass('tweet_list')){
        $('.tweet_list').bxSlider({
            mode: 'horizontal', 
            pager: false, 
            auto: true, 
            controls: true, 
            pause: 4000, 
            speed: 800,
            nextText: '',
            prevText: '',
            nextSelector: '#tw-next',
            prevSelector: '#tw-prev',
            useCSS: true,
            easing: 'easeInOutExpo',
            stopAuto: false,
            autoHover: true
        });
    }

    /*
     * Bootstrap Tab
     */
    $('#tab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    /*
     * prettyPhoto
     */
    $("a[data-rel^='prettyPhoto']").prettyPhoto({theme: 'light_rounded'});


    /*
     * Mobile Menu
     */
    $( '#dl-menu' ).dlmenu({
        animationClasses : { in : 'dl-animate-in-5', out : 'dl-animate-out-5' }
    });





    /*
	 * Portfolio Gallery filter
	 */
    var jQueryfilterType = $('#filter input[name="filter"]');
    var jQueryapplications = $('#gallery');
    var jQuerydata = jQueryapplications.clone();

    jQueryfilterType.change(function(e) {
        if ($('#filter input[name="filter"]:checked').val() == 'all') {
            var jQueryfilteredData = jQuerydata.find('li');
        } else {
            var jQueryfilteredData = jQuerydata.find('li[data-type=' + $('#filter input[name="filter"]:checked').val() + ']');
        }

        jQueryapplications.quicksand(jQueryfilteredData, {
            duration : 800,
            easing : 'swing',
            adjustWidth: '100%',
            useScaling : true,
            enhancement : function(c) {
                
                $('label.current').removeClass('current');
                $('input[name="filter"]:checked').parent().addClass('current');

                $("a[data-rel^='prettyPhoto']").prettyPhoto({theme: 'light_rounded'});
                image_sandbox_width_height();
            }
        });

    });


    /*
     * Scroll to Top
     */
    $('div.scroll-top').click(function() {
        $('html, body').animate({ scrollTop:0 }, { duration: 600, easing: "easeOutExpo"});
        return false;
    });
	
	
	//Don't change this code
    $('.accordion').on('shown', function () {
            $('.accordion .accordion-heading.current a i.icon-caret-up').removeClass('icon-caret-up').addClass('icon-caret-down');
            $('.accordion .accordion-heading.current').removeClass('current');
            $(this).find('.in').prev().addClass('current');  
            $('.accordion .accordion-heading.current a i.icon-caret-down').removeClass('icon-caret-down').addClass('icon-caret-up');
    });
    $('.accordion').on('hidden', function () {
            $('.accordion .accordion-heading.current a i.icon-caret-up').removeClass('icon-caret-up').addClass('icon-caret-down');
            $('.accordion .accordion-heading.current').removeClass('current');
            $(this).find('.in').prev().addClass('current');    
            $('.accordion .accordion-heading.current a i.icon-caret-down').removeClass('icon-caret-down').addClass('icon-caret-up');
    });

    

    
});

