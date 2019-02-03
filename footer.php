<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Denee_Motion_Com
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">

		<div class="grid-container grid">
  		<div class="grid-x grid-padding-x">
				<div class="cell text-center">
					<?php get_template_part( 'template-parts/social-icons' ); ?>
				</div>
			</div>
		</div>

		<div class="grid-container grid co">
			<div class="grid-x grid-padding-x grid-padding-y padding-vertical-2 color--dark-gray">
				<div class="cell large-6 text-center">
					&copy; <?php echo date("Y"); ?> DENEE MOTION | All right reserved
				</div>
				<div class="cell large-6 text-center">
					Developed in Brighton with <i class="fa fa-heart color--red" aria-hidden="true"></i> by <a class="color--dark-gray underline" href="https://iriepixel.com">IRIE PIXEL</a>
				</div>
			</div>
		</div>

	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
