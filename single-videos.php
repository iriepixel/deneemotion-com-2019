<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Denee_Motion_Com
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
      
      <?php the_post_navigation(); ?>

      <section class="section--featured text-center" data-aos="fade-in">
        <div class="grid-container">
          <div class="grid-x">
            <div class="cell">
              <h1 class="section__title"><?php the_title(); ?></h1>
            </div>
          </div>
        </div>
      </section>
      
      <section class="section--video-content bg-color--gray" data-aos="fade-in">
        <div class="grid-container">
          <div class="grid-x">
            <div class="cell large-10 large-offset-1">
              <?php the_content(); ?>
            </div>
          </div>
        </div>
      </section>


      <section class="section--more-video" data-aos="fade-in">

        <div class="grid-x grid-padding-x">
          <div class="cell">
            <h2 class="section__title text-center">More works</h2>
          </div>
        </div>

        <!-- random video grid -->
        <?php
          // WP_Query arguments
          $args_posts = [
              'post_type'       => 'videos',
              'posts_per_page'  => 4,
              'orderby'         => 'rand',
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
  
              <div class="cell text-center padding-vertical-1">
                <a class="button button--brand button--center" href="/index.php?page_id=40">More films</a>
              </div>
              
            </div>	

          <?php endif; ?>
        </div>
        <!-- random video grid -->
      </section>

      <section class="section--get-in-touch bg-color--gray" data-aos="fade-in">
        <?php get_template_part( 'template-parts/get-in-touch' ); ?>
      </section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
