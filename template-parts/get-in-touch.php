<div class="grid-container grid">
  <div class="grid-x grid-padding-x grid-padding-y text-center">
    <div class="cell">
      <h2 class="section__title">Get in touch</h2>
    </div>
    <div class="cell large-4 large-offset-2 medium-6">
      <i class="fa fa-envelope-o color--brand" aria-hidden="true"></i> <a class="color--dark-gray" href="mailto:<?php the_field('email', 'option'); ?>"><?php the_field('email', 'option'); ?></a>
    </div>
    <div class="cell large-4 medium-6 color--dark-gray">
      <i class="fa fa-phone color--brand" aria-hidden="true"></i> <?php the_field('phone_number', 'option'); ?>
    </div>
  </div>
</div>