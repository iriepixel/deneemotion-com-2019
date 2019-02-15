<?php
/**
 * Template Name: Videos
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
              <?php the_content(); ?>
            </div>
          </div>
        </div>
      </section>

		  <section class="section--video-grid">
        <!-- video grid -->
        <?php
          // WP_Query arguments
          $args_posts = [
              'post_type'       => 'videos',
              'posts_per_page'  => -1
          ];
          // The Query
          $query_posts = new wp_query( $args_posts );
        ?>
  
        <div class="grid-container grid">
  
          <?php if( $query_posts->have_posts() ) : ?>
            <div class="grid__block grid-x grid-padding-x grid-margin-y">
  
              <?php while ( $query_posts->have_posts() ) : $query_posts->the_post(); ?>
                <?php get_template_part( 'template-parts/video-thumb' ); ?>
              <?php endwhile; ?>
  
              <?php wp_reset_query(); ?>
  
            </div>	

          <?php endif; ?>
        </div>
        <!-- video grid -->
      </section>

      <section class="section--get-in-touch bg-color--gray">
        <?php get_template_part( 'template-parts/get-in-touch' ); ?>
      </section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
