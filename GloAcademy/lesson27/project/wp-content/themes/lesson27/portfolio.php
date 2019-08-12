<?php
/*
Template Name: Portfolio
*/
?>

<?
get_header();
?>

	 <!-- Header -->
    <header class="masthead">
      <div class="container">
        <img class="img-fluid" src="<?php bloginfo('template_url');?>/img/profile.png" alt="">
        <div class="intro-text">
          <span class="name">Start Bootstrap</span>
          <hr class="star-light">
          <span class="skills">Web Developer - Graphic Artist - User Experience Designer</span>
        </div>
      </div>
    </header>



   <!-- Portfolio Grid Section -->
    <section id="portfolio">
      <div class="container">
        <h2 class="text-center">Portfolio</h2>
        <hr class="star-primary">
        <div class="row">
          <div class="col-sm-4 portfolio-item">
            <div class="portfolio-link" href="#portfolioModal1" data-toggle="modal">
              <div class="caption">
                <div class="caption-content">
                  <i class="fa fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="<?php bloginfo('template_url');?>/img/portfolio/cabin.png" alt="">
            </div>
          </div>
          <div class="col-sm-4 portfolio-item">
            <div class="portfolio-link" href="#portfolioModal2" data-toggle="modal">
              <div class="caption">
                <div class="caption-content">
                  <i class="fa fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="<?php bloginfo('template_url');?>/img/portfolio/cake.png" alt="">
            </div>
          </div>
          <div class="col-sm-4 portfolio-item">
            <div class="portfolio-link" href="#portfolioModal3" data-toggle="modal">
              <div class="caption">
                <div class="caption-content">
                  <i class="fa fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="<?php bloginfo('template_url');?>/img/portfolio/circus.png" alt="">
            </div>
          </div>
          <div class="col-sm-4 portfolio-item">
            <div class="portfolio-link" href="#portfolioModal4" data-toggle="modal">
              <div class="caption">
                <div class="caption-content">
                  <i class="fa fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="<?php bloginfo('template_url');?>/img/portfolio/game.png" alt="">
            </div>
          </div>
          <div class="col-sm-4 portfolio-item">
            <div class="portfolio-link" href="#portfolioModal5" data-toggle="modal">
              <div class="caption">
                <div class="caption-content">
                  <i class="fa fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="<?php bloginfo('template_url');?>/img/portfolio/safe.png" alt="">
            </div>
          </div>
          <div class="col-sm-4 portfolio-item">
            <div class="portfolio-link" href="#portfolioModal6" data-toggle="modal">
              <div class="caption">
                <div class="caption-content">
                  <i class="fa fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="<?php bloginfo('template_url');?>/img/portfolio/submarine.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>



<?php
get_footer();
?>