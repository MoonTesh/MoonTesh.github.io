	$(document).ready(function(){

        /* ------ Slick Slider------ */

        $('.features__slider').slick({
    		infinite: true,
    		slidesToShow: 4,
    		slidesToScroll: 1,
    		responsive: [
    		   {
    		     breakpoint: 992,
    		     settings: {
    		       slidesToShow: 2,
    		       prevArrow: '<button class="prev arrow"></button>',
    		       nextArrow: '<button class="next arrow"></button>',
    		       slidesToScroll: 2,
    		       infinite: true,
    		     }
    		    },
    		   {
    		     breakpoint: 768,
    		     settings: {
    		       slidesToShow: 1,
    		       slidesToScroll: 1,
    		       prevArrow: '<button class="prev arrow"></button>',
    		       nextArrow: '<button class="next arrow"></button>'
    		      }
    		    } 
    		]
	  });

       /* ------ Modal Windows------ */ 
       $('.popup-btn').on('click', function(event){
            event.preventDefault();
            $('.popup').fadeIn();
       });
       $('.popup__close').on('click', function(event){
           event.preventDefault();
           $('.popup').fadeOut();
       });
       
	});
