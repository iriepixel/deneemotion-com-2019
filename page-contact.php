<?php
/**
 * Template Name: Contact
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Denee_Motion_Com
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

      <section class="section--featured text-center">
        <div class="grid-container">
          <div class="grid-x">
            <div class="cell">
              <h1 class="section__title"><?php the_title(); ?></h1>
            </div>
            <div class="cell large-6 large-offset-3">
              <div class="contact__content"><?php the_content(); ?></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section--contact">
        <!-- team -->
        <div class="grid-container grid full jarallax contact__bg" style="background-image: url(<?php the_field('background_image'); ?>);">
          <div class="grid-x grid-padding-x align-middle">
            <div class="cell">
              <div class="grid-container grid contact">
                <div class="grid-x grid-padding-x ">
                  <div class="cell large-6 large-offset-3">
                    <div class="contact-form">
                      <?php echo do_shortcode("[ninja_form id=1]"); ?>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- team -->
      </section>

      <section class="section--instagram">
        <!-- instagram -->
        <?php get_template_part( 'template-parts/instagram' ); ?>
      </section>

      <section class="section--get-in-touch bg-color--gray">
        <?php get_template_part( 'template-parts/get-in-touch' ); ?>
      </section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
