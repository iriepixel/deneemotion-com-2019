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

      <section class="section--featured text-center">
        <h1 class="section__title"><?php the_title(); ?></h1>
      </section>

      <section class="section--about bg-color--gray about">
        <!-- about -->
        <div class="grid-container grid full">
          <div class="grid-x align-middle">
            <div class="cell large-6">
              <div class="jarallax">
                <img class="jarallax-img" src="<?php the_field('about_us_image'); ?>" alt="Deneemotion about">
              </div>
            </div>
            <div class="cell large-6">
              <div class="grid-container grid">
                <div class="grid-x grid-padding-x about__right">
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

      <section class="section--team">
        <!-- team -->
        <div class="grid-container grid">
          <div class="grid-x grid-padding-x">
            <div class="cell">
              <h2 class="section__title text-center">Meet our team</h2>
            </div>
            <div class="cell">
              <img src="<?php the_field('team_image'); ?>" alt="Deneemotion team">
            </div>
          </div>
        </div>
        <!-- team -->
      </section>
      
      <section class="section--team-text">
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
