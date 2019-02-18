<?php
/**
 * Template Name: Homepage
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

    <?php echo do_shortcode("[rev_slider alias='homepage_video']");  ?>

		<section class="section--home-grid">
        <!-- video grid -->
        <?php
          // WP_Query arguments
          $args_posts = [
              'post_type'       => 'videos',
              'posts_per_page'  => 6,
              'orderby'         => 'rand'
          ];
          // The Query
          $query_posts = new wp_query( $args_posts );
        ?>
  
        <div class="grid-container grid">
  
          <h1 class="section__title text-center"><div>Denee Motion</div> Wedding & Event Cinematography</h1>
  
          <?php if( $query_posts->have_posts() ) : ?>
            <div class="grid__block grid-x grid-padding-x grid-margin-y">
  
              <?php while ( $query_posts->have_posts() ) : $query_posts->the_post(); ?>
                <?php get_template_part( 'template-parts/video-thumb' ); ?>
              <?php endwhile; ?>
  
              <?php wp_reset_query(); ?>

              <div class="cell text-center padding-vertical-1">
                <a class="button button--brand button--center" href="/works">More films</a>
              </div>

            </div>	
          <?php endif; ?>
        </div>
        <!-- video grid -->
      </section>

      <section class="section--about about__section bg-color--gray">
        <!-- about -->
        <div class="about__container grid-container grid full">
          <div class="grid-x align-middle">
            <div class="cell large-6">
              <div class="jarallax">
                <img class="jarallax-img" src="<?php the_field('about_us_image'); ?>" alt="Deneemotion about">
              </div>
            </div>
            <div class="cell large-6">
              <div class="grid-container grid">
                <div class="grid-x grid-padding-x grid-margin-x about__right">
                  <div class="cell">
                    <h2 class="about__title">About us</h2>
                  </div>
                  <div class="cell xlarge-12 xxlarge-8">
                    <div class="about__text"><?php the_field('about_us_text'); ?></div>
                    <div class="cell padding-top-1 about__button">
                      <a class="button button--brand" href="/about">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- about -->
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
