<?php
/* 
Template Name: Home
*/
?>

<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package lesson27
 */

get_header();
?>

	 <!-- Header -->
    <header class="masthead">
      <div class="container">
        <img class="img-fluid" src="<?php bloginfo('template_url');?>/img/profile.png" alt="">
        <div class="intro-text">
          <span class="name"><?php bloginfo('title');?></span>
          <hr class="star-light">
          <span class="skills"><?php bloginfo('description');?></span>
        </div>
      </div>
    </header>

<?php
get_footer();
?>
