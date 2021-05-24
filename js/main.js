/* 
    project   : BAKER v1.0
    Created on : June 6, 2015, 01:20:12 AM
    Author     : Saif
    Description: Multipurpose Creative Portfolio Theme
           
*/

		
		


	  //Windows phone Fixes
      
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}
		
		
		
		
		
$(document).ready(function(){


	    
	// Bootstrap progressbar 
	
	$('.progress .progress-bar').progressbar({display_text: 'center'});




	
	// Counter js
	$('.counter').counterUp({
    delay: 10,
    time: 3000
	});

 
     
 
 
// Load WOW.js 

 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
		
        mobile:       true
      }
    );
    wow.init();

	
	
	
		
	
		// smoothScroll
		 
	$('a').smoothScroll({
  offset: 0,
 
  // one of 'top' or 'left'
  direction: 'top',
 
  // only use if you want to override default behavior
  scrollTarget: null,
 
  // fn(opts) function to be called before scrolling occurs.
  // `this` is the element(s) being scrolled
  beforeScroll: function() {},
 
  // fn(opts) function to be called after scrolling occurs.
  // `this` is the triggering element
  afterScroll: function() {},
  easing: 'easeInOutExpo',
 
  // speed can be a number or 'auto'
  // if 'auto', the speed will be calculated based on the formula:
  // (current scroll position - target scroll position) / autoCoeffic
  speed: 2500,
 
  // autoCoefficent: Only used when speed set to "auto".
  // The higher this number, the faster the scroll speed
  autoCoefficient: 2,
 
  // $.fn.smoothScroll only: whether to prevent the default click action
  preventDefault: true
 
}); 
    
	 
	 
	 
		 
	 // back-to-top button
	 
	 var offset = $(window).height();
    
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset-300) {
            jQuery('.back-to-top').fadeIn(600);
        } else {
            jQuery('.back-to-top').fadeOut(600);
        }
    });

	
	
	
	
	// nav for small devices
	
	var offset=$(window).height();	
    if(Modernizr.mq('(max-width: 767px)'))
{
	
	jQuery(window).scroll(function() {
   if (jQuery(this).scrollTop() > offset-10) {
            jQuery('.navbar-toggle,.navbar-nav').fadeIn(600);
            
        } else {
            jQuery('.navbar-toggle,.navbar-nav').fadeOut(600);
			
        }
	
		
		});
	
		
// Closes the Responsive Menu on Menu Item Click
    
	$('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
	
}
	 


	 
		
  // Sticky nav - http://jqueryfordesigners.com/fixed-floating-elements/         
  var top = $(window).height()-72;
  
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
    
    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('#main-nav').addClass('fixed');
    } else {
      // otherwise remove it
      $('#main-nav').removeClass('fixed');
    }
  });
	
	
	
	
	
	/*Tooltip*/
	
	$('[data-toggle="tooltip"]').tooltip();




	
	// mixitup
  
  $('#portfolio_filter_action').mixitup({
	animation:{
        enable: true,
        effects: 'fade scale rotateZ',
        duration: 600,
        easing: 'easeInOutCubic',
        perspectiveDistance: '3000px',
        perspectiveOrigin: '50% 50%',
        queue: true,
        queueLimit: 1,
        animateChangeLayout: false,
        animateResizeContainer: true,
        animateResizeTargets: false,
        staggerSequence: null,
        reverseOut: false
		}
		});
		
		
	
	
	
	// Nicescroll

if(Modernizr.mq('(min-width: 768px)'))
{	
$("html").niceScroll({
					cursorcolor:"#a0a0a0",
					cursoropacitymin:.6,
					cursorwidth:11,
					cursorborder:"medium none",
					cursorborderradius:4,
					cursorminheight:200,
					zindex:99999999999999999
			});	
}
    

	
	
// Style switcher Open/Close

$("#style_changer .panel-button").click(function() {
    $("#style_changer").toggleClass("close-style-changer", "open-style-changer", 3000);
    $("#style_changer").toggleClass("open-style-changer", "close-style-changer", 3000);
    return false;
});

$(document).mouseup(function (e)
{
    var container = $("#style_changer");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.removeClass("open-style-changer",  3000);
        container.addClass("close-style-changer",  3000);
    }
});	
	



	
	// Supersized slider 
	
				jQuery(function($){
				
				$.supersized({
		// Functionality
		slideshow               :   1,			// Slideshow on/off
		autoplay				:	1,			// Slideshow starts playing automatically
		start_slide             :   1,			// Start slide (0 is random)
		stop_loop				:	0,			// Pauses slideshow on last slide
		random					: 	0,			// Randomize slide order (Ignores start slide)
		slide_interval          :   5000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	700,		// Speed of transition
		new_window				:	1,			// Image links open in new window/tab
		pause_hover             :   0,			// Pause slideshow on hover
		keyboard_nav            :   1,			// Keyboard navigation on/off
		performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
		image_protect			:	1,			// Disables image dragging and right click with Javascript
												   
		// Size & Position						   
		min_width		        :   0,			// Min width allowed (in pixels)
		min_height		        :   0,			// Min height allowed (in pixels)
		vertical_center         :   1,			// Vertically center background
		horizontal_center       :   1,			// Horizontally center background
		fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
		fit_portrait         	:   1,			// Portrait images will not exceed browser height
		fit_landscape			:   0,			// Landscape images will not exceed browser width
												   
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		thumb_links				:	0,			// Individual thumb links for each slide
		thumbnail_navigation    :   0,			// Thumbnail navigation
		slides 					:  	[			// Slideshow Images
														{image : 'img/image4.jpg',title:'<div class="welcome"><h2>We are BAKER</h2>     <h3>Creativity is our strength</h3></div>'},{image : 'img/image7.jpg',title:'<div class="welcome"><h2>We Build, We Innovate</h2>     <h3>Clients&#0146; satisfaction is our goal</h3></div>'}
												]
					
				});
				
			
		    });
	



	
	// Parallax (Stellar) 
	
	$.stellar({
				horizontalScrolling: false,
				
				responsive:true
			});
	



	
	// Nav highlighting when scroll
		
		/**
         * This part handles the highlighting functionality.
         * We use the scroll functionality again, some array creation and 
         * manipulation, class adding and class removing, and conditional testing
         */
        var aChildren = $("nav li").children(); // find the a children of the list items
        var aArray = []; // create the empty aArray
        for (var i=0; i < aChildren.length; i++) {    
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        } // this for loop fills the aArray with attribute href values
        
        $(window).scroll(function(){
            var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
            var windowHeight = $(window).height(); // get the height of the window
            var docHeight = $(document).height();
            
            for (var i=0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = $(theID).offset().top; // get the offset of the div from the top of page
                var divHeight = $(theID).height(); // get the height of the div in question
                if (windowPos >= (divPos-300) && windowPos < (divPos + divHeight-300)) {
                    $("a[href='" + theID + "']").addClass("nav-active");
                } else {
                    $("a[href='" + theID + "']").removeClass("nav-active");
                }
            }
            
            if(windowPos + windowHeight == docHeight) {
                if (!$("nav li:last-child a").hasClass("nav-active")) {
                    var navActiveCurrent = $(".nav-active").attr("href");
                    $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                    $("nav li:last-child a").addClass("nav-active");
                }
            }
        });	
	
	
		
});
	
	
	
	
	
	
$(window).load(function() {
	
	
  

	
	// preloader activation js 
	
	$("#status").fadeOut(); // will first fade out the loading animation
	$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
		
		
		
		
		
  // Flex slider in testimonials parallax
  
  $(".flexslider").flexslider({
  slideshowSpeed:5000,
  directionNav:false,
  pauseOnAction:false
  })
  
  
  

	
  
});	
	
	
	














			