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

		<div class="footer__container grid-container grid">
			<div class="grid-x grid-padding-x grid-padding-y padding-vertical-1">
				<div class="cell large-6 footer__left">
					&copy; <?php echo date("Y"); ?> DENEE MOTION | All rights reserved | <a class="color--brand underline" href="http://mariasundin.com/" target="_blank">Photo credit</a>
				</div>
				<div class="cell large-6 footer__right">
					Developed in Brighton with <i class="fa fa-heart color--red" aria-hidden="true"></i> by <a class="color--brand underline" href="https://iriepixel.com" target="_blank">IRIE PIXEL</a>
				</div>
			</div>
		</div>

	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>