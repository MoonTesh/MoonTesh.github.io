	$(document).ready(function(){

        // $(window).resize(function() {
        //   if(document.documentElement.clientWidth < 575) {
        //     $('.fotorama').fotorama({
        //       thumbmargin: 15;
        //       thumbwidth: 60;
        //       thumbheight: 55
        //     });
        //   }
        // });

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

    
        /* ------ Slick Slider Feedback------ */
        $('.feedback-slider').slick({
            prevArrow:'<button type="button" class="feedback-slider__btn feedback-slider__btn_prev"><img src="img/feedback/prevArrow.svg"></button>',
            nextArrow:'<button type="button" class="feedback-slider__btn feedback-slider__btn_next"><img src="img/feedback/nextArrow.svg"></button>',
            responsive: [
               {
                    breakpoint: 767,
                    settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                   
                  }
                } 
            ]
        });

        /* ------ Materials Slider------ */

        $('.materials-slider').slick({
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
