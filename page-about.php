<?php
/**
 * Template Name: About
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

      <section class="section--featured text-center" data-aos="fade-in">
        <h1 class="section__title"><?php the_title(); ?></h1>
      </section>

      <section class="section--about about__section bg-color--gray" data-aos="fade-in">
        <!-- about -->
        <div class="about__container grid-container grid full">
          <div class="grid-x align-middle">
            <div class="cell large-12 xlarge-6">
              <div class="jarallax">
                <img class="jarallax-img" src="<?php the_field('about_us_image'); ?>" alt="Deneemotion about">
              </div>
            </div>
            <div class="cell large-12 xlarge-6">
              <div class="grid-container grid">
                <div class="grid-x grid-padding-x grid-margin-x about__right">
                  <div class="cell xlarge-12 xxlarge-8">
                    <div class="about__text"><?php the_content(); ?></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- about -->
      </section>

      <section class="section--team" data-aos="fade-in">
        <!-- team -->
        <div class="grid-container grid">
          <div class="grid-x grid-padding-x">
            <div class="cell">
              <h2 class="section__title text-center">Meet our team</h2>
            </div>
            <div class="cell large-10 large-offset-1">
              <img src="<?php the_field('team_image'); ?>" alt="Deneemotion team">
            </div>
          </div>
        </div>
        <!-- team -->
      </section>
      
      <section class="section--team-text" data-aos="fade-in">
        <!-- team text -->
        <div class="grid-container grid">
          <div class="grid-x grid-padding-x">
            <div class="cell large-8 large-offset-2 text-center">
              <?php the_field('team_text'); ?>
            </div>
            <div class="cell large-8 large-offset-2 text-center">
              <?php the_field('meeting_text'); ?>
            </div>
          </div>
        </div>
      </section>
      
      <section class="section--instagram" data-aos="fade-in">
        <!-- instagram -->
        <?php get_template_part( 'template-parts/instagram' ); ?>
      </section>

      <section class="section--get-in-touch bg-color--gray" data-aos="fade-in">
        <?php get_template_part( 'template-parts/get-in-touch' ); ?>
      </section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
