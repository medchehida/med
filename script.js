         $(document).ready(function(e) {   

         
         
                 /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*    ALL NAVIGATION: menu btn, btn 2 states, icons for button     */
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

/*-------------------------------------------------------------*/
/*             jQuery .menu-toggle (CSS) btn onClick           */
/*-------------------------------------------------------------*/

$('.menu-toggle').click(function() {

    /*--------------------------------------------------------------*/
    /*open-close Navigation menu btn, 500 milliseconds to drop-close*/
    /*--------------------------------------------------------------*/
    $('.site-nav').toggleClass('site-nav-open', 500);
        
    /*-------------------------------------------------------------*/
    /* changes hamburger to red X for close button .open CSS       */
    /*-------------------------------------------------------------*/
    $(this).toggleClass('open');

  })
           
         
         });

